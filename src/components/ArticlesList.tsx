import { Articles } from '../components/Articles'

export const ArticleList = ({ articles, title, content, src }) => {
    return (
        <div>
            {articles.map((article, index) => (
                <div key={index}>
                    <Articles title={title} content={content} src={src} {...article} />
                </div>
            ))}
        </div>
    )
}