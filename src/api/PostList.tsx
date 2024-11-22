// src/api/PostList.tsx

import React from 'react'
import axios, { CancelTokenSource } from 'axios'
import Post from '../types/post'

const defaultPosts: Post[] = []

const PostList = () => {
  const [posts, setPosts]: [Post[], (posts: Post[]) => void] =
    React.useState(defaultPosts)

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true)

  const [error, setError]: [string, (error: string) => void] =
    React.useState('')

  const cancelToken = axios.CancelToken //create cancel token

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source())

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation')
    }
  }

  React.useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then(response => {
        setPosts(response.data)
        setLoading(false)
      })
      .catch(ex => {
        const error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred'
        setError(error)
        setLoading(false)
        // setCancelTokenSource
      })
  }, [cancelTokenSource])

  return (
    <>
      <div className='App'>
        {loading && <button onClick={handleCancelClick}>Cancel</button>}
        <ul className='posts'>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
        {error && <p className='error'>{error}</p>}
      </div>
    </>
  )
}

export default PostList
