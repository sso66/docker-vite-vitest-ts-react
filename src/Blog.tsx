import blogData from '../blob.json'
import React from './assets/react.svg'
import WatchList from './assets/image.png'

type Blog = {
  id: number
  title: string
  cover: string
  author: string
}

export default function Blog () {
  return (
    <div className='container'>
      <div className='blog'>
        {blogData.map((blog: Blog) => (
          <div className='card' key={blog.id}>
            <img src={React} alt='' width={48} height={48} />
            <img
              src={WatchList}
              alt=''
              width={480}
              height={240}
              style={{ background: 'black' }}
            />
            <div className='details'>
              <h3>{blog.title}</h3>
              <h4>{blog.author}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
