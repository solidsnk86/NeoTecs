export function YouTubeVideo({ video, cpe, children }) {
  return (
    <article className="bg-[#161B22] rounded-xl pb-5">
      <iframe
        src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
        className="rounded-tl-xl rounded-tr-xl flex m-auto w-[100%] md-:w-[100%]"
      />
      <h3 className="my-2">{cpe}</h3>
      <hr />
      <p className="mt-2">{children}</p>
    </article>
  );
}
