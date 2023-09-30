export function YouTubeVideo({ video, cpe, children }) {
  return (
    <article className="bg-[#161B22] rounded-xl pb-4">
      <iframe
        src={`https://www.youtube.com/embed/${video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
        className="rounded-tl-xl rounded-tr-xl flex m-auto w-[100%] md-:w-[100%]"
        height={200}
      />
      <div class="hr-container">
        <hr />
        <h3 className="text-xl text-gray-400 font-bold">{cpe}</h3>
        <hr />
      </div>
      <p className="mx-2 text-md">{children}</p>
    </article>
  );
}
