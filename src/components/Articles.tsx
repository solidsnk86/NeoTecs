import { HomeBlock } from '../pages/index'
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
    publishedAt: number,
}) => {
    return (
        <HomeBlock>
            <div className="h-[220px] relative text-left text-wrap space-y-2 dark:bg-[#09090B] bg-[#FFFFFF] p-4 rounded-lg border dark:border-zinc-800 shadow-sm shadow-slate-200 dark:!shadow z-50">
                <span className='float-left text-xs'>Publicado el {publishedAt}</span><br />
                <p className="text-xl font-bold ">
                    {title}
                </p>
                <p>{content}</p>
                <LinkButton url={src} iconName='ArrowRight' color='red-400' className='xl:absolute bottom-4 right-4 block'>Ir al artículo</LinkButton>
            </div>
        </HomeBlock>
    );
};
