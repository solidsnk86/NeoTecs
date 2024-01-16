import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const CookieNotice = () => {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsClosed(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className="cookie-notice">
      <p className="text-xs my-1">
        Este sitio web almacena cookies en tu computadora. Estas cookies se
        utilizan para recopilar información sobre cómo interactúas con nuestro
        sitio web y nos permiten recordarte. Utilizamos esta información para
        mejorar y personalizar tu experiencia de navegación, así como para
        análisis y métricas sobre nuestros visitantes, tanto en este sitio web
        como en otros medios. Para obtener más información sobre las cookies que
        utilizamos, consulta nuestra
        <Link href="docs/politicas-privacidad" className="mx-1 underline">
          Política de Privacidad.
          <ExternalLink className="link-icon" />
        </Link>
      </p>
      <button
        onClick={handleAcceptCookies}
        className="accept-button font-semibold text-xs float-right"
      >
        Aceptar
      </button>
    </div>
  );
};

export default CookieNotice;
