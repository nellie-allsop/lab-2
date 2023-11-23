import { getCategory, getPostsByCategory, postType } from "@/src/lib/posts";
import { notFound } from "next/navigation";

type blogParams = {
	params: {
		catslug: string;
	};
};

export function generateStaticParams() {
	const posts = getCategory();
	return posts.map((post) => {
		return { category: post.catslug };
	});
}

export default function Page({ params }: blogParams) {
	const posts: postType[] = getPostsByCategory(params.catslug);

	if (!posts) {
		notFound();
	}

	return (
		<>
			{posts.map((post) => {
				return (
					<div>
						<h1>{post.title}</h1>
						<p>{post.content}</p>
					</div>
				);
			})}
		</>
	);
}
