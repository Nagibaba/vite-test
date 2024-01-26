import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getAllUsers } from '../common/state/reducers/userSlice'
import { fetchPosts } from '../common/state/reducers/postsSlice'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.allPosts)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    console.log(posts)

    return (
        <div className="center">
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
