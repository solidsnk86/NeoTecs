import { Share } from 'lucide-react';

export const SharerComponent = ({
    setTitle,
    setText,
    setUrl,
    className
}: {
    setTitle: string;
    setText: string;
    setUrl: string;
    className: string | null
}) => {
    const share = () => {
        if (navigator.share) {
            navigator.share({
                title: setTitle,
                text: setText,
                url: setUrl,
            });
        }

        if (!share) {
            throw Error('Navigator does not allowed to share');
        }
    };
    return (
        <div
            className={`${className} w-fit flex bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded hover:border-zinc-300 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300`}
            onClick={share}
            title={`Compartir artículo: ${setTitle}`}
        >
            <Share className="w-[17px] h-[17px] text-text-primary mx-1 inline" />
        </div>
    );
};
