import { Highlight, themes } from 'prism-react-renderer';
import stripIndent from 'strip-indent';
import React, { useRef } from 'react';
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
      toast.success('Contenido copiado al portapapeles', {
        position: toast.POSITION.BOTTOM_LEFT,
        theme: 'dark',
      });
    } catch (err) {
      toast.error('Error al intentar copiar al portapapeles', {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }

    window.getSelection().removeAllRanges();
  };

  return (
    <>
      <ToastContainer />
      <Highlight
        theme={themes.vsDark}
        code={removeIndent(children)}
        language={lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style} ref={preRef}>
            <Copy
              onClick={handleCopyClick}
              className=" w-5 h-5 inline-flex my-auto absolute right-2 mt-[2px] cursor-pointer rounded hover:text-white transition-all"
            />
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};
