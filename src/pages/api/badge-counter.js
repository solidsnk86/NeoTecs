import supabase from '../../components/utils/supabase';

export default async function badgerCount(req, res) {
  const { user } = req.query;
  const { badge_color, counter_color } = req.query;
  const username = String(user).toLowerCase();
  const formatThousand = (value) => {
    return value >= 1000 ? '192' : '186';
  };
  const formatValue = (value) => (value >= 1000 ? `${value / 1000}K` : value);

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
      if (counter < 10) return '158';
      if (counter >= 10) return '154';
      if (counter > 100) return '140';
      if (String(counter).match(/1.0K/)) return '130';
      if (counter >= 10000) return '120';
      return counter;
    };
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${formatThousand(
      newCount,
    )} 30" width="${formatThousand(newCount)}" height="30">
    <!-- Fondo con gradiente -->
    <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0" style="stop-color: #282534" />
            <stop offset="100%" style="stop-color:#${badge_color || '2E2D34'}"/>
        </linearGradient>
        <linearGradient id="count-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="100%" style="stop-color:#${
              counter_color || 'FF832A'
            }"/>
        </linearGradient>
    </defs>

    <rect width="184" height="30" fill="url(#bg-gradient)"/>

    <rect x="142" width="42" height="30" fill="url(#count-gradient)"/>

    <text y="19" x="6" font-size="16" text-rendering="geometricPrecision">👀</text>
    <text x="33" y="20" fill="#fff" font-family="Arial, sans-serif" font-size="14" margin-right="4px" text-rendering="geometricPrecision" font-weight="700">Visitas al perfil</text>
    <text x="${adjustCounter(
      newCount,
    )}" y="20" fill="#fff" font-family="Arial, sans-serif" font-size="${
      newCount >= 1000 ? '12' : '14'
    }" text-align="center" font-weight="600">${formatValue(
      newCount.toFixed(0),
    )}</text>
    </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (err) {
    res.status(500).json({ message: 'Server error: ' + err });
  }
}
