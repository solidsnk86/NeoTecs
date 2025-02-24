import supabase from '../../components/utils/supabase';

export default async function badgerCount(req, res) {
  const { user, badge_gradient_1, badge_gradient_2, counter_color } = req.query;
  const username = String(user).toLowerCase();
  const formatThousand = (value) => {
    return value >= 1000 ? '168' : '164';
  };
  const formatValue = (value) => {
    let formattedValue = 0;
    if (value >= 1000) {
      formattedValue = (value / 1000).toFixed(1);
    } else if (value >= 10000) {
      formattedValue = (value / 10000).toFixed(1);
    }
    return formattedValue === 0 ? value : formattedValue;
  };

  try {
    const { data: lastCount } = await supabase
      .from('badge_counter')
      .select('visit_count, gh_profile')
      .eq('gh_profile', username)
      .order('created_at', { ascending: false })
      .limit(1);

    let newCount;

    if (lastCount && lastCount.length > 0) {
      newCount = (lastCount?.[0]?.visit_count || 0) + 1;
    } else {
      newCount = 1;
    }

    const { error: insertError } = await supabase
      .from('badge_counter')
      .insert([{ visit_count: newCount, gh_profile: username }]);

    if (insertError) {
      throw new Error('Cannot send data to DB: ' + insertError.message);
    }

    const adjustCounter = (counter) => {
      if (counter >= 10000) return '136';
      if (counter >= 100) return '134';
      if (counter >= 10) return '137';
      if (String(counter).includes('1.0K')) return '112';
      return '138';
    };

    const svg = `
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${formatThousand(
     newCount,
   )} 26" width="${formatThousand(newCount)}" height="26">
    <style>
        #badge-main {
            filter: drop-shadow(0 2px 6px rgba(0,0,0,0.2));
            transition: all 0.3s ease;s
        }
        #main-text {
            text-shadow: 0 1px 1px rgba(0,0,0,0.2);
        }
        #eyes {animation: blink 4s infinite;}
        @keyframes blink {
            0%,100% {opacity: 1;}
            95% {opacity: 1;}
            96% {opacity: 0.1;}
            98% {opacity: 0.1;}
            99% {opacity: 1;}
        }
    </style>
    
    <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: #${
              badge_gradient_1 || '282534'
            }"/>
            <stop offset="100%" style="stop-color: #${
              badge_gradient_2 || '4868A9'
            }"/>
        </linearGradient>
        
        <linearGradient id="count-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: #${
              counter_color || 'FF832A'
            }"/>
            <stop offset="100%" style="stop-color: #${
              counter_color || 'E56D1A'
            }"/>
        </linearGradient>
    </defs>
    
    <rect width="163" height="26" ry="2.5" fill="#3D444D"/>
    <rect x="1" y="1" id="badge-main" ry="2" width="161" height="24" fill="url(#bg-gradient)"/>
    
    <rect x="1" y="1" id="badge-main" ry="2" width="161" height="24" fill="url(#bg-gradient)"/>
    
    <rect x="128" y="1" width="34" rx="2" height="24" fill="url(#count-gradient)" class="counter-box"/>
    
    <text id="eyes" y="17" x="4" font-size="15" text-rendering="geometricPrecision">👀</text>
    <text id="main-text" x="30" y="18" fill="#fff" font-family="Arial, sans-serif" font-size="14" text-rendering="geometricPrecision" font-weight="500">Visitas al perfil</text>
    <text id="text-counter" x="${adjustCounter(
      newCount,
    )}" y="18" fill="#fff" font-family="Arial, sans-serif" font-size="${
      newCount >= 1000 ? '11' : '13'
    }" text-align="center" font-weight="500">${formatValue(newCount)}</text>
</svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err });
  }
}
