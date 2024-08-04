import React, { useRef, useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import stripIndent from 'strip-indent';
import { Copy, Check } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
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
      <div className="bg-[#F6F8FA] dark:bg-black border-r border-t border-l dark:border-[#333] border-[#e0e0e0] translate-y-[30px] text-amber-500 uppercase font-bold h-[30px] rounded-t-md overflow-hidden">
        <small className="dark:bg-[#2A2929] bg-[#EEEEEE] p-6 text-xs">
          {lang}
        </small>
      </div>
      <span
        onClick={handleCopyClick}
        title="Copiar"
        className="text-xs absolute z-10 top-[36px] right-[8px] cursor-pointer text-zinc-400 hover:opacity-[.7] transition-all duration-100"
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
        code={removeIndent(children)}
        language={lang.toLowerCase()}
      >
        {({ tokens, getLineProps, getTokenProps }) =>
          tokens.length < 25 ? (
            <pre className="custom-pre" lang={lang} ref={preRef}>
              {tokens.map((line) => (
                <div
                  {...getLineProps({ line })}
                  key={uuidv4()}
                  className="line"
                >
                  <span className="line-number">
                    {tokens.indexOf(line) + 1}
                  </span>
                  <span className="line-content">
                    {line.map((token) => (
                      <span {...getTokenProps({ token })} key={uuidv4()} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          ) : (
            <pre
              className="custom-pre overflow-y-scroll h-[470px]"
              lang={lang}
              ref={preRef}
            >
              {tokens.map((line) => (
                <div
                  {...getLineProps({ line })}
                  key={uuidv4()}
                  className="line"
                >
                  <span className="line-number">
                    {tokens.indexOf(line) + 1}
                  </span>
                  <span className="line-content">
                    {line.map((token) => (
                      <span {...getTokenProps({ token })} key={uuidv4()} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )
        }
      </Highlight>
    </div>
  );
};
