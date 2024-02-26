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
    }, 2000);
  };

  return (
    <div className="relative">
      <p className="bg-[#1E1E1E] translate-y-[23px] text-amber-500 text-xs uppercase font-bold pl-4 p-1 rounded-md">
        {lang}
      </p>
      <span
        onClick={handleCopyClick}
        title="Copiar"
        className="text-xs absolute z-10 top-[26px] right-[8px] cursor-pointer text-zinc-100 hover:opacity-[.7] transition-all"
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
    </div>
  );
};
