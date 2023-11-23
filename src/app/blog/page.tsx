import Link from "next/link"
import {getPosts} from "@/src/lib/posts"

export default function Page(){
  const posts = getPosts()
  return(
    <main>
      <h1>My guinea pig blog</h1>
      <p>Here are some posts:</p>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}