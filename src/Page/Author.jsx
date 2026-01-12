import React from 'react'
import AuthorHeader from '../components/Blog/Author/AuthorHeader'
import AuthorAbout from '../components/Blog/Author/AuthorAbout'
import BlogCards from '../components/Blog/Author/BlogCard'

const Author = () => {
  return (
    <div>
      <AuthorHeader />
      <AuthorAbout />
      <BlogCards />
    </div>
  )
}

export default Author
