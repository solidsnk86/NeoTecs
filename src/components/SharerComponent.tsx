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
            className={className}
            onClick={share}
            title={`Compartir artículo: ${setTitle}`}
        >
            <Share className="w-[14px] h-[14px] text-text-primary mx-2 translate-y-[0.5px] inline" />
        </div>
    );
};
