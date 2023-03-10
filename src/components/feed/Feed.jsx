import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import { Posts } from '../../data'
export default function feed() {
  return (
    <div className='feed'>
      <Share/>
      {
        Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        )
        )
      }
    </div>
  )
}
