import LinkButton from './LinkButton';
import { SharerComponent } from './SharerComponent';

export const Articles = ({
  title,
  content,
  src,
  publishedAt,
}: {
  title: string;
  content: string;
  src: string;
  publishedAt: number;
}) => {
  return (
    <article className='relative overflow-hidden'>
      <div className="article-card h-[350px] relative text-left text-wrap space-y-2 dark:bg-[#09090B] bg-[#FFFFFF] p-4 rounded-lg border dark:border-zinc-800 shadow-sm shadow-slate-200 dark:!shadow z-50">
        <span className="float-left text-xs">Publicado el {publishedAt}</span>
        <br />
        <header className="flex">
          <img
            src={'/images/icons/favicon-neotecs.jpg'}
            className="rounded-full w-[33px] h-[33px]"
            alt="Avatar Github profile"
          />
          <p className="mx-2 mt-[6px] text-text-second font-semibold text-sm font-geist">
            NeoTecs
          </p>
        </header>
        <p className="text-xl font-semibold text-text-primary">{title}</p>
        <p className="text-text-second line-clamp-4 text-[15px]">
          <i>{content}</i>
        </p>
        <div className="absolute bottom-4 right-4">
          <SharerComponent
            setTitle={title}
            setText={content}
            setUrl={src}
            className="absolute top-[-2px] right-[100px] cursor-pointer hover:opacity-70"
          />
          <LinkButton
            url={src}
            iconName="ArrowRight"
            color="gray-100"
            className="text-sm hover:opacity-70 hover:underline"
            underline={false}
          >
            Ir al artículo
          </LinkButton>
        </div>
      </div>
    </article>
  );
};
