// eslint-disable-next-line import/extensions
import React from 'react';

import { ReactNode } from 'react';
import { Marquee } from '../components/magicui/marquee';

const reviews = [
    {
        name: 'Mikrotik',
        link: 'https://mikrotik.com/',
        logo: (
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/MikroTik_Logo_%282022%29.svg/1920px-MikroTik_Logo_%282022%29.svg.png" alt='mikrotik logo' />
        ),
    },
    {
        name: 'Tp-Link',
        link: 'https://www.tp-link.com/ar/',
        logo: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='#fff' height={50}>
                <title>TP-Link</title>
                <path d="M15.185 0C10.218 0 6.25 3.984 6.25 8.903V10.8h4.99V8.903c0-2.135 1.736-3.863 3.946-3.863 2.187 0 3.708 1.536 3.708 3.815 0 2.257-1.64 3.912-3.827 3.912h-1.878v5.039h1.878c4.874 0 8.819-4.007 8.819-8.952C23.885 3.72 20.2 0 15.185 0zM.115 12.6v4.103c0 .624.523 1.248 1.236 1.248h4.753v4.801c0 .624.523 1.248 1.236 1.248h4.065V12.6Z" />
            </svg>
        ),
    },
    {
        name: 'Ubiquiti',
        link: 'https://www.ui.com/',
        logo: (
            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                height={50}
            >
                <title>Ubiquiti</title>
                <path d="M23.1627 0h-1.4882v1.4882h1.4882zm-5.2072 10.4226V7.4409l.0007.001h2.9755v2.9762h2.9756v.9433c0 1.0906-.0927 2.3827-.306 3.3973-.1194.5672-.3004 1.1308-.5127 1.672-.2175.5537-.468 1.0841-.7408 1.5595a11.6795 11.6795 0 0 1-1.2456 1.7762l-.0253.0294-.0417.0488c-.1148.1347-.2283.2679-.3531.398a11.7612 11.7612 0 0 1-.4494.4492c-1.9046 1.8343-4.3861 2.98-6.9808 3.243-.3122.032-.939.0652-1.2519.0652-.3139-.001-.9397-.0331-1.252-.0651-2.5946-.263-5.0761-1.4097-6.9806-3.243a11.75 11.75 0 0 1-.4495-.4494c-.131-.1356-.249-.2748-.3683-.4154l-.0006-.0004-.0512-.0603a11.6576 11.6576 0 0 1-1.2456-1.7762c-.2727-.4763-.5233-1.0058-.7408-1.5595-.2123-.5414-.3933-1.1048-.5128-1.6718C.1854 13.743.0927 12.452.0927 11.3616V.1864h5.9518v10.2362s0 .7847.0099 1.0415l.0022.0599v.0004c.0127.332.0247.6575.0594.9812.098.919.3014 1.7913.7203 2.5288.1213.213.2443.42.3915.616.8953 1.1939 2.2577 2.0901 3.9573 2.3398.2022.0294.6108.0552.8149.0552.204 0 .6125-.0258.8149-.0552 1.6996-.2497 3.062-1.146 3.9573-2.3398.148-.196.2701-.403.3914-.616.419-.7375.6224-1.6095.7204-2.5288.0346-.3243.047-.6503.0594-.9831l.0022-.0584c.0099-.2568.0099-1.0415.0099-1.0415zm.7427-8.19h2.2326v2.2319h2.9764v2.9764h-2.9764V4.4654h-2.2326V2.2328Z" />
            </svg>
        ),
    },
    {
        name: 'Mikrotik',
        link: 'https://mikrotik.com/',
        logo: (
            <svg
                height={50}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
            >
                <title>Mikrotik</title>
                <path d="M23.041 6.188a1.404 1.404 0 0 0-.218-.36c-.24-.296-.634-.586-1.14-.864l-4.052-2.22L13.576.519C13.074.243 12.61.065 12.22.013A1.772 1.772 0 0 0 12 0c-.432 0-.974.192-1.576.52L6.37 2.74 2.317 4.96c-.504.279-.9.569-1.14.867a1.59 1.59 0 0 0-.122.17 1.654 1.654 0 0 0-.096.19c-.15.348-.22.816-.22 1.368v8.887c0 .66.1 1.2.316 1.558.216.356.66.706 1.262 1.036l4.054 2.22 4.053 2.223c.504.276.966.456 1.36.506.145.02.291.02.436 0 .39-.05.852-.228 1.356-.506l8.107-4.443c.6-.33 1.046-.68 1.262-1.036.036-.06.068-.123.096-.188.15-.348.22-.818.22-1.37V7.556c0-.552-.07-1.02-.22-1.368zM7.233 16.618c0 .2-.218.33-.396.233l-1.45-.796a1.066 1.066 0 0 1-.552-.934v-4.296c0-.2.216-.33.394-.235l1.728.947a.53.53 0 0 1 .276.468v4.612zm11.934-1.497c0 .39-.213.748-.554.936l-1.45.794a.266.266 0 0 1-.394-.234v-5.692c0-.2-.217-.33-.395-.232l-2.62 1.434c-.34.187-.552.545-.552.934v5.646a.532.532 0 0 1-.278.468l-.41.224c-.32.176-.707.176-1.026 0l-.408-.224a.532.532 0 0 1-.278-.468v-5.646c0-.389-.212-.747-.552-.934L4.835 9.16v-.28c0-.388.212-.746.552-.934l.6-.328a1.064 1.064 0 0 1 1.022 0l4.48 2.452c.318.176.704.176 1.021 0l2.07-1.134a.266.266 0 0 0 0-.468L9.932 5.922a.266.266 0 0 1 0-.468l1.556-.852c.32-.176.707-.176 1.026 0l6.1 3.34c.342.188.554.547.553.936v6.243z" />
            </svg>
        ),
    },
];

const ReviewCard = ({
    logo,
    link,
}: {
    logo: string | ReactNode;
    link: string;
}) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=
            'relative min-w-[250px] flex justify-center items-center overflow-hidden rounded-xl bg-slate-800/50 w-full py-4 px-14 transitio'
        >
            <div className="flex flex-row items-center justify-center w-full h-auto gap-2 text-white transition-all hover:scale-[1.1]">
                {logo}
            </div>
        </a>
    );
};

export const MarqueeLogos = () => {
    return (
        <section className="flex flex-col flex-wrap items-center justify-center my-48">
            <h2 className="text-6xl font-bold text-center text-white my-3">
                Patrocinadores
            </h2>
            <p className="max-w-xl text-xl text-sky-200 text-center [†ext-wrap:balance] my-4 py-4">
                Sponsors:
            </p>
            <div className='relative flex flex-col items-center justify-center w-full h-full gap-4 py-20 overflow-hidden rounded-lg bg-background'>
                <Marquee pauseOnHover className="[--duration:40s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {reviews
                        .slice()
                        .reverse()
                        .map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                </Marquee>
                <div className='absolute inset-y-0 left-0 w-40 pointer-events-none from-[#000214] to-transparent bg-gradient-to-r '></div>
                <div className='absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-[#000214]'></div>
            </div>
        </section>
    );
};
