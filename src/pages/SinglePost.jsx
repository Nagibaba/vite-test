import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { getAllUsers } from '../common/state/reducers/userSlice'
import { fetchPosts } from '../common/state/reducers/postsSlice'

const SinglePost = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector((state) => state.posts.singlePost)
    const isLoading = useSelector((state) => state.posts.loading)
    useEffect(() => {
        dispatch(fetchPosts(id))
    }, [])

    console.log(post)
    return (
        <div className="center">
            <h1>{id}</h1>
            {isLoading ? (
                'loading...'
            ) : (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )
}

export default SinglePost