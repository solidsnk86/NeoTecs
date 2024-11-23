import { YouTubeComments } from '@/components/YouTubeComments';
import { useEffect, useState } from 'react';
import { youtubeApiKey, channelId } from '@/components/Constants';
import { Youtube } from 'lucide-react';
import { Preloader } from '../../components/Preloader';

export default function Comments() {
  const [option, setOption] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideosId = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&maxResults=10&key=${youtubeApiKey}`;
        const response = await fetch(url);
        const dataVideo = await response.json();
        if (!response.ok) {
          setError(response.statusText);
        }
        setLoading(false);
        setData(dataVideo.items);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getVideosId();
  }, []);

  if (!data) return <p>{data?.message}</p>;
  if (error) return <p className="text-red-400">Error {error}</p>;
  if (loading) return <Preloader />;

  const titles = data.map((item) => item.snippet.title);
  const videoId = data.map((item) => item.snippet.resourceId.videoId);

  return (
    <section className="md:max-w-3xl w-full justify-center mx-auto p-2">
      <h1 className="text-3xl my-4 text-center text-text-primary font-bold">
        Sección Comentarios YouTube{' '}
        <Youtube className="w-6 h-6 inline fill-[#FF0133] text-white" />
      </h1>
      <div className="md:max-w-lg max-w-sm flex justify-center p-3">
        <span className="text-text-primary mr-1 font-semibold">Video: </span>
        <select
          className="w-44"
          onChange={(e) => {
            setOption(e.target.value);
            setText(e.target.selectedOptions[0].innerText);
          }}
        >
          <option value="">Seleccione un video</option>
          {data.map((_, i) => (
            <option
              className="md:max-w-3xl w-full overflow-x-hidden"
              key={titles[i]}
              value={videoId[i]}
            >
              {titles[i]}
            </option>
          ))}
        </select>
      </div>
      <small className="text-text-primary">{error && error.message}</small>
      {option && <YouTubeComments videoId={option} videoText={text} />}
    </section>
  );
}
