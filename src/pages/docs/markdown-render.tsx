import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';

export default function MarkDownRender() {
    const MarkDownTitle = ({ Tag = 'h1', children }) => {
        return <Tag></Tag>;
    };
    return (
        <TitlesContextProvider>
            <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-30" />
            <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
                <LectureNav />
                <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
                    <NavSwitch inline />
                    <MarkDownTitle>Renderizar MarkDown de GitHub</MarkDownTitle>

                    <SectionTitle title="Índice" />
                    <article>
                        <p>
                            Aquí vamos a crear un componente de React para poder hacer un
                            fetch de nuestros{' '}
                            <b className="bg-zinc-300 dark:bg-zinc-800 rounded p-[2px] text-button-variant">
                                README.md
                            </b>
                        </p>
                        <ol>
                            <li>
                                Para empezar vamos a instalar las siguientes dependencias:
                            </li>
                        </ol>
                        <Pre lang="javascript">{
              /*javascript*/ `
                            import React, { useState, useEffect } from 'react';
                            import ReactMarkdown from 'react-markdown';
                            import rehypeHighlight from 'rehype-highlight';
                            import rehypeRaw from 'rehype-raw';
                            import rehypeSlug from 'rehype-slug';
                            import rehypeAutolinkHeadings from 'rehype-autolink-headings';
                            import 'github-markdown-css/github-markdown.css';
                            import 'highlight.js/styles/github-dark.css';
                            
                            const MarkdownRenderer = () => {
                                const [markdownContent, setMarkdownContent] = useState('');
                            
                                useEffect(() => {
                                    const githubMarkdownURL =
                                        'https://raw.githack.com/solidsnk86/neo-scraper/master/README.md';
                            
                                    fetch(githubMarkdownURL)
                                        .then((response) => response.text())
                                        .then((data) => setMarkdownContent(data))
                                        .catch((error) =>
                                            console.error('Error al buscar el documento Markdown:', error),
                                        );
                                }, []);
                            
                                return (
                                    <div>
                                        <ReactMarkdown
                                            rehypePlugins={[
                                                rehypeRaw,
                                                rehypeSlug,
                                                rehypeAutolinkHeadings,
                                                [rehypeHighlight, { ignoreMissing: true }],
                                            ]}
                                            components={{
                                                pre: ({ children }) => (
                                                    <div className="code-block">
                                                        <pre>{children}</pre>
                                                    </div>
                                                ),
                                                li: ({ children }) => <li className="custom-li">{children}</li>,
                                            }}
                                            className="space-y-1"
                                        >
                                            {markdownContent}
                                        </ReactMarkdown>
                                    </div>
                                );
                            };
                            
                            export default MarkdownRenderer;
                            
                            `
                        }</Pre>
                    </article>
                    <ShareButton setTitle={MarkDownRender.title} />
                </div>
            </div>
            <Footer />
        </TitlesContextProvider>
    );
}

MarkDownRender.title = 'MarkDown Github Fetching';
