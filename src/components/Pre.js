import React, { useRef, useState, useMemo } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import cleanIndent from 'clean-indent';
import { Copy, Check } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

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

  const code = useMemo(() => cleanIndent(children), [children]);

  return (
    <div className="relative">
      <div className="bg-[#F6F8FA] dark:bg-black border-r border-t border-l dark:border-[#333] border-[#e0e0e0] translate-y-[30px] text-amber-500 uppercase font-bold h-[30px] rounded-t-md overflow-hidden">
        <small className="dark:bg-[#2A2929] bg-[#EEEEEE] p-6 text-xs">
          {lang}
        </small>
      </div>
      <span
        onClick={handleCopyClick}
        title="Copiar"
        className="text-xs absolute top-[36px] right-[8px] cursor-pointer text-zinc-400 hover:opacity-[.7] transition-all duration-100"
      >
        {copied ? (
          <div className="check-effect text-text-second">
            Copiado!
            <Check className="w-[14px] text-lime-400 h-[14px] inline mx-1 mb-[2px]" />
          </div>
        ) : (
          <Copy className="w-[14px] h-[14px] inline mx-1 copy-effect text-text-second" />
        )}
      </span>
      <Highlight
        theme={themes.oneDark}
        code={code}
        language={lang.toLowerCase()}
        key={crypto.randomUUID()}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`custom-pre ${
              tokens.length >= 25 ? 'overflow-y-scroll h-[470px]' : ''
            }`}
            lang={lang}
            ref={preRef}
            key={crypto.randomUUID()}
          >
            {tokens.map((line, lineIndex) => {
              return (
                <div
                  {...getLineProps({ line })}
                  className="line"
                  key={crypto.randomUUID()}
                >
                  <span className="line-number" key={crypto.randomUUID()}>
                    {lineIndex + 1}
                  </span>
                  <span className="line-content" key={crypto.randomUUID()}>
                    {line.map((token) => {
                      return (
                        <span
                          {...getTokenProps({ token })}
                          key={crypto.randomUUID()}
                        />
                      );
                    })}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
