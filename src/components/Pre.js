import React, { useRef, useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import stripIndent from 'strip-indent';
import { Copy, Check } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

const removeIndent = (code = '') => {
  return stripIndent(code).trim();
};

export const Pre = ({ children, lang = '' }) => {
  const preRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    if (preRef.current) {
      const range = document.createRange();
      range.selectNode(preRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    document.execCommand('copy');
    setCopied(true);

    window.getSelection().removeAllRanges();

    setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  return (
    <div className="relative">
      <div className=" bg-black border-r border-t border-l border-[#333] translate-y-[30px] text-amber-500 uppercase font-bold h-[30px] rounded-t-md overflow-hidden">
        <small className="bg-[#2A2929] p-6 text-xs">{lang}</small>
      </div>
      <span
        onClick={handleCopyClick}
        title="Copiar"
        className="text-xs absolute z-10 top-[36px] right-[8px] cursor-pointer text-zinc-400 hover:opacity-[.7] transition-all duration-100"
      >
        {copied ? (
          <div className="check-effect">
            Copiado!
            <Check className="w-[14px] text-lime-400 h-[14px] inline mx-1 mb-[2px]" />
          </div>
        ) : (
          <Copy className="w-[14px] h-[14px] inline mx-1 copy-effect" />
        )}
      </span>
      <Highlight
        theme={themes.oneDark}
        code={removeIndent(children)}
        language={lang.toLowerCase()}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="custom-pre" lang={lang} ref={preRef}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                {line.map((token, key) => (
                  <o>
                    <span {...getTokenProps({ token, key })} key={key} />
                  </o>
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
