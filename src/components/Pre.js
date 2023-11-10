import React, { useRef } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import stripIndent from 'strip-indent';
import { Copy } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const removeIndent = (code = '') => {
  return stripIndent(code).trim();
};

export const Pre = ({ children, lang = '' }) => {
  const preRef = useRef(null);

  const handleCopyClick = () => {
    if (preRef.current) {
      const range = document.createRange();
      range.selectNode(preRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    try {
      document.execCommand('copy');

      const isDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      toast.success('Contenido copiado al portapapeles', {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: isDarkMode ? 'dark' : 'light',
      });
    } catch (err) {
      toast.error('Error al intentar copiar al portapapeles', {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: 'dark',
      });
    }

    window.getSelection().removeAllRanges();
  };

  return (
    <div className="relative">
      <ToastContainer />
      <Copy
        onClick={handleCopyClick}
        className="w-5 h-5 inline-flex my-auto absolute z-10 right-2 mt-3 cursor-pointer rounded text-slate-100 hover:opacity-[.7] transition-all"
      />
      <Highlight
        theme={themes.vsDark}
        code={removeIndent(children)}
        language={lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style} ref={preRef}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
