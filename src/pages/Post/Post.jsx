import styles from "./Post.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useParams } from "react-router-dom"

const Post = () => {
    const { id } = useParams()
    const { document: post } = useFetchDocuments("posts", id)

    return (
        <div className={styles.post_container}>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div>{post.tags.map((tag) => (
                        <p key={tag}>
                            <span>#</span>
                            {tag}
                        </p>))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Post