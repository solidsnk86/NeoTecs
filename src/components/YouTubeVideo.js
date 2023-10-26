export function YouTubeVideo({ video, cpe, children }) {
  return (
    <article className="pb-4">
      <iframe
        src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
        className="rounded-xl flex m-auto w-[100%] md-:w-[100%]"
        height={200}
      />
      <h3 className="text-lg text-slate-100 my-2 font-bold line-clamp-1">
        {cpe}
      </h3>
      <div className="text-sm text-left">{children}</div>
    </article>
  );
}
