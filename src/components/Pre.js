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

  const handleCopyClick = (e) => {
    if (preRef.current) {
      const range = document.createRange();
      range.selectNode(preRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    document.execCommand('copy');
    e.stopPropagation();

    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    toast('Contenido copiado al portapapeles', {
      position: toast.POSITION.BOTTOM_LEFT,
      type: 'default',
      theme: isDarkMode ? 'dark' : 'light',
    });

    window.getSelection().removeAllRanges();
  };

  return (
    <div className="relative">
      <p className="bg-[#1E1E1E] translate-y-[23px] text-amber-500 text-xs uppercase font-bold pl-4 p-1 rounded-md">
        {lang}
      </p>
      <Copy
        onClick={(e) => handleCopyClick(e)}
        className="w-4 h-4 inline-flex my-auto absolute z-10 top-[27px] right-[8px] cursor-pointer text-zinc-100 hover:opacity-[.7] transition-all"
      />
      <Highlight
        theme={themes.vsDark}
        code={removeIndent(children)}
        language={lang.toLowerCase()}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style} lang={lang} ref={preRef}>
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
      <ToastContainer closeButton closeOnClick />
    </div>
  );
};
