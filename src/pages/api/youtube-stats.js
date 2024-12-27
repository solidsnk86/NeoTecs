import { NextResponse } from 'next/server';
import { youtubeApiKey } from '../../components/Constants';

export const runtime = 'edge';

export default async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json(
      { message: 'Es necesario un id' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${youtubeApiKey}`,
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: `Error al solicitar datos: ${response.statusText}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const video = data.items[0];

      return NextResponse.json({ data: video }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'No se encontró el video' },
        { status: 404 },
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Server Error: error en la solicitud a la API ' + err.message,
      },
      { status: 500 },
    );
  }
}
