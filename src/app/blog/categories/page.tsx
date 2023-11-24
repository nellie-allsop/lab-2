import Link from "next/link"
import {getCategory} from "@/src/lib/posts"


export default function Page(){
  const categories = getCategory()
  return(
    <main>
      <h1>select by category</h1>
      <p>Here are some posts:</p>
      <ul>
        {categories.map(category => {
          return (
            <li key={category.name}>
              <Link href={`/blog/categories/${category.catslug}`}>{category.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}