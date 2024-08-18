/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';

export function YouTubeVideo({ video, cpe, children }) {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js"
        ></script>
      </Head>
      <article className="pb-4 overflow-hidden">
        <lite-youtube videoid={video}></lite-youtube>
        <h3 className="text-lg text-text-primary text-left my-2 font-bold line-clamp-1 xl:line-clamp-2">
          {cpe}
        </h3>
        <div className="text-sm text-left">{children}</div>
      </article>
    </>
  );
}
