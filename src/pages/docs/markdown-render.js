import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Pre } from '../../components/Pre';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { ShareButton } from '../../components/ShareButton';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';
import HeaderTitle from '../../components/HeaderTitlte';
import IndexTitle from '../../components/IndexTitle';
export default function MarkDownRender() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <NavSwitch inline />
          <HeaderTitle>Renderizar MarkDown de GitHub</HeaderTitle>
          <hr className="border-text-primary" />
          <IndexTitle>Índice</IndexTitle>
          <ol className="indice">
            <li>
              <a href="#introduccion">Introducción</a>
            </li>
            <li>
              <a href="#estilos-markdown">Estilos MarkDown</a>
            </li>
            <li>
              <a href="#componente-react">Componente React</a>
            </li>
          </ol>
          <SectionTitle title="Introducción" />
          <p>
            Para renderizar Markdown de GitHub en una aplicación de React,
            puedes utilizar la biblioteca react-markdown. Esta biblioteca
            permite analizar y renderizar contenido Markdown en componentes
            React. Asegúrate de revisar la documentación de react-markdown para
            obtener información más detallada:
            <Link
              href="https://remarkjs.github.io/react-markdown/"
              className="mx-1 text-amber-600 link"
            >
              react-markdown en GitHub
              <ExternalLinkIcon className="inline xl:w-4 xl:h-4 w-3 h-3 font-thin bottom-[1px] relative mx-[2px] link-icon" />
            </Link>
            . Aquí hay una guía paso a paso para lograrlo:
          </p>
          <p>
            Aquí vamos a crear un componente de React para poder hacer un fetch
            de nuestros{' '}
            <b className="bg-zinc-300 dark:bg-zinc-800 rounded p-[2px] text-button-variant">
              README.md
            </b>
          </p>
          <ol>
            <li>Para empezar vamos a instalar las siguientes dependencias:</li>
            <Pre lang="bash">{
              /*bash */ `
                            npm install react-markdown
                            `
            }</Pre>
            <li>
              Para importar los estilos de GitHub, tienes que importarlo en tu
              componente:
            </li>
            <Pre lang="javascript">{
              /*javascript */ `
                            @import 'github-markdown-css';
                            `
            }</Pre>
            <li>Personaliza los estilos adicionales a tu gusto:</li>
            <Pre lang="css">{
              /*css */ `
                            .markdown-body {
                                box-sizing: border-box;
                                min-width: 200px;
                                max-width: 980px;
                                margin: 0 auto;
                                padding: 45px;
                            }
                            `
            }</Pre>
            <li>
              Para agregar estilos aplicamos un className en nuestro componente:
            </li>
            <Pre lang="javascript">{
              /*javascript */ `
                            return (
                                <div className="markdown-body">
                                  <ReactMarkdown>{markdownContent}</ReactMarkdown>
                                </div>
                              );
                            `
            }</Pre>
          </ol>
          <SectionTitle title="Estilos MarkDown" />
          <p>
            Para replicar los estilos de GitHub en tu componente ReactMarkdown,
            puedes utilizar una librería de estilos específica de GitHub llamada
            "github-markdown-css". Puedes instalarla usando npm o yarn, y luego
            importarla en tu archivo de estilos y aplicarla al componente
            ReactMarkdown. Aquí hay una forma de hacerlo:
          </p>
          <Pre lang="bash">{
            /*bash */ `
                            npm install github-markdown-css

                            `
          }</Pre>
          <p>
            Importa la librería de estilos en tu archivo de estilos (por
            ejemplo, styles.css):
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
                        /* styles.css */
                        @import 'github-markdown-css/github-markdown.css';

                        `
          }</Pre>
          <p className="list-css-span">
            Debes usar el componente<span>rehypeRaw</span>proporcionado por
            ReactMarkdown para habilitar la interpretación de HTML
          </p>
          <Pre lang="javascript">{
            /*javascript */ `
                        import rehypeRaw from 'rehype-raw'; // Importa rehypeRaw para habilitar la interpretación de HTML

                        return (
                            <div className="markdown-body custom-container">
                                <ReactMarkdown
                                    rehypePlugins={[rehypeRaw]} // Usa rehypeRaw para habilitar la interpretación de HTML
                                >
                                    {markdownContent}
                                </ReactMarkdown>
                            </div>
                        );
                        `
          }</Pre>
          <p>
            Para estilos específicos de GitHub y manejo de imágenes, puedes
            utilizar más plugins de rehype. Aquí hay algunos ejemplos:
          </p>
          <ul className="list-css-span">
            <li>
              <span>rehype-slug</span>: Agrega IDs únicos a los encabezados, lo
              cual puede ser útil para anclas en enlaces internos.
            </li>
          </ul>
          <Pre lang="bash">{
            /*bash */ `
                        npm install rehype-slug
                        `
          }</Pre>
          <p>En tu componente:</p>
          <Pre lang="javascript">{
            /*javascript */ `
                        import rehypeSlug from 'rehype-slug';

                        // ...
              
                        <ReactMarkdown
                        rehypePlugins={[rehypeRaw, rehypeSlug]}
                        >
                        {markdownContent}
                        </ReactMarkdown>
                        `
          }</Pre>
          <ul className="list-css-span">
            <li>
              <span>rehype-autolink-headings</span>: Agrega enlaces automáticos
              a los encabezados.
            </li>
          </ul>
          <Pre lang="bash">{
            /*bash */ `
                        npm install rehype-autolink-headings
                        `
          }</Pre>
          <p>En el componente:</p>
          <Pre lang="javascript">{
            /*javascript */ `
                        import rehypeAutolinkHeadings from 'rehype-autolink-headings';

                        // ...
              
                        <ReactMarkdown
                        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
                        >
                        {markdownContent}
                        </ReactMarkdown>
                        `
          }</Pre>
          <ul className="list-css-span">
            <li>
              <span>rehype-highlight</span>: Resalta el código en bloques de
              código.
            </li>
          </ul>
          <p>En el componente:</p>
          <Pre lang="javascript">{
            /*javascript */ `
                         import rehypeHighlight from 'rehype-highlight';

                        // ...
              
                        <ReactMarkdown
                        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight]}
                        >
                        {markdownContent}
                        </ReactMarkdown>
                        `
          }</Pre>
          <SectionTitle title="Componente React" />
          <p>
            Aquí les dejo un ejemplo más completo de cómo lo pueden implementar:
          </p>
          <Pre lang="javascript">{
            /*javascript*/ `
            import React, { useState, useEffect } from 'react';
            import ReactMarkdown from 'react-markdown';
            import rehypeHighlight from 'rehype-highlight';
            import rehypeRaw from 'rehype-raw';
            import rehypeSlug from 'rehype-slug';
            import rehypeAutolinkHeadings from 'rehype-autolink-headings';
            import 'github-markdown-css/github-markdown.css'; // Importa la librería de estilos
            import 'highlight.js/styles/github-dark.css'; // Se puede elegir el estilo HighLight del <pre> 
            
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
          <p>
            Eso es todo por aquí, espero les haya gustado y lo puedan
            implementar en algún proyecto. Ante cualquier duda o consulta pueden
            escribirme en el
            <Link
              className="underline mx-1 text-amber-500 link"
              href="/docs/feedback"
            >
              feedback
            </Link>
            de NeoTecs.
          </p>
          <ShareButton setTitle={MarkDownRender.title} />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

MarkDownRender.title = 'Fetch de MarkDown en React';
