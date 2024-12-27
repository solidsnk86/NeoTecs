import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/github-dark.css';

const MarkdownRenderer = ({ url }: { url: string }) => {
  const [markdownContent, setMarkdownContent] = useState<string>();

  const getMarkDown = async () => {
    const response = await fetch(url);
    const data = await response.text();
    setMarkdownContent(data);
  };

  useEffect(() => {
    getMarkDown();
  });

  return (
    <div className="text-text-primary">
      <ReactMarkdown
        rehypePlugins={[
          rehypeRaw,
          rehypeSlug,
          rehypeAutolinkHeadings,
          [rehypeHighlight, { ignoreMissing: true }],
        ]}
        components={{
          pre: ({ children }) => (
            <div className="my-3 code-block">
              <pre>{children}</pre>
            </div>
          ),
          li: ({ children }) => <li className="custom-li">{children}</li>,
        }}
        className="space-y-2"
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
