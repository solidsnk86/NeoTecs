import { githubAvatar } from './Constants';
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
        <div className="article-card xl:h-[350px] h-[410px] relative text-left text-wrap space-y-2 dark:bg-[#09090B] bg-[#FFFFFF] p-4 rounded-lg border dark:border-zinc-800 shadow-sm shadow-slate-200 dark:!shadow z-50 aspect-square">
            <span className="float-left text-xs">Publicado el {publishedAt}</span>
            <br />
            <header className="flex">
                <img
                    src={githubAvatar}
                    className="rounded-full w-[33px] h-[33px]"
                    alt="Avatar Github profile"
                />
                <p className="mx-2 mt-[6px] text-text-second font-semibold text-sm font-geist">
                    Gabriel C.
                </p>
            </header>
            <p className="text-xl font-bold ">{title}</p>
            <p className='text-text-second line-clamp-4 list-css-span'>{content}</p>
            <div className='absolute bottom-4 right-4'>
                <SharerComponent setTitle={title} setText={content} setUrl={src} className='px-1 py-[5px] absolute top-[1px] right-[120px]' />
                <LinkButton
                    url={src}
                    iconName="ArrowRight"
                    color="gray-100"
                    className="px-2 py-[4.5px] text-sm text-text-primary bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded hover:border-zinc-300 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
                    underline={false}
                >
                    Ir al artículo
                </LinkButton>
            </div>
        </div>
    );
};
