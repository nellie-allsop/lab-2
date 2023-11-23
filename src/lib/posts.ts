export type postType = {
	title: string;
	slug: string;
	content: string;
	category: string;
};

const categories = [
	{ name: "Breeds", catslug: "Breeds" },
	{ name: "Facts", catslug: "Facts" },
	{ name: "Pigfluencers", catslug: "Pigfluencers" },
];

const POSTS = [
	{
		title: "testBreeds",
		slug: "testingBreeds",
		content: "testing content",
		category: "Breeds",
	},
	{
		title: "testFacts",
		slug: "testingFacts",
		content: "testing content",
		category: "Facts",
	},
	{
		title: "testPigfluencers",
		slug: "testingPigfluencers",
		content: "testing content",
		category: "Pigfluencers",
	},
];

export function getPosts() {
	return POSTS;
}

export function getPostsBySlug(slug: string) {
	return POSTS.find((post) => post.slug === slug);
}

export function getCategory() {
	return categories;
}

export function getPostsByCategory(catslug: string) {
	return POSTS.filter((post) => post.category === catslug);
}
