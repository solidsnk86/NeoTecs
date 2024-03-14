import { githubAvatar } from './Constants';
import LinkButton from './LinkButton';

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
        <div className="xl:h-[350px] h-[410px] relative text-left text-wrap space-y-2 dark:bg-[#09090B] bg-[#FFFFFF] p-4 rounded-lg border dark:border-zinc-800 shadow-sm shadow-slate-200 dark:!shadow z-50">
            <span className="float-left text-xs">Publicado el {publishedAt}</span>
            <br />
            <header className="flex">
                <img
                    src={githubAvatar}
                    className="rounded-full w-[33px] h-[33px]"
                    alt="Avatar profile"
                />
                <p className="mx-2 mt-[6px] text-text-second font-semibold text-sm font-geist">
                    Gabriel C.
                </p>
            </header>
            <p className="text-xl font-bold ">{title}</p>
            <p>{content}</p>
            <LinkButton
                url={src}
                iconName="ArrowRight"
                color="red-400"
                className="absolute bottom-4 right-4"
            >
                Ir al artículo
            </LinkButton>
        </div>
    );
};
