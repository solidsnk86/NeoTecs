import LinkButton from "./LinkButton"

export const Articles = ({ title, content, src }: { title: string, content: string, src: string }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <LinkButton url={src} color="purple-400" />
        </div>
    )
}