import React from 'react'
import { useRouter } from 'next/router'

function BlogPostPage() {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  )
}

export default BlogPostPage