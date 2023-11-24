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
		title: "American Guinea Pigs: The All-American Charm",
		slug: "american-guinea-pigs-all-american-charm",
		content:
			"American guinea pigs are known for their charming personalities and distinct features. In this post, we explore the history of this breed, their unique characteristics, and tips on how to care for these delightful companions. Learn why American guinea pigs make fantastic pets and discover the joy they can bring to your home.",
		category: "Breeds",
	},
	{
		title: "Abyssinian Guinea Pigs: Whirlwind of Whorls",
		slug: "abyssinian-guinea-pigs-whirlwind-of-whorls",
		content:
			"Enter the world of Abyssinian guinea pigs, where a mesmerizing pattern of whorls defines their unique appearance. This blog post delves into the history, care requirements, and playful nature of Abyssinians. Whether you're a seasoned guinea pig enthusiast or a first-time owner, discover what makes Abyssinian guinea pigs a delightful and visually striking addition to any family.",
		category: "Breeds",
	},
	{
		title: "Peruvian Guinea Pigs: Majestic Mane Marvels",
		slug: "peruvian-guinea-pigs-majestic-mane-marvels",
		content:
			"Embark on a journey into the world of Peruvian guinea pigs, where long, flowing locks steal the spotlight. This blog post uncovers the history, grooming essentials, and endearing qualities of Peruvians. If you've ever been captivated by the idea of a guinea pig with a majestic mane, this post is a must-read. Learn how to care for their impressive fur and why Peruvian guinea pigs make for enchanting companions.",
		category: "Breeds",
	},
	{
    title: "The Marvels of Guinea Pig Communication",
    slug: "guinea-pig-communication-marvels",
    content: "Guinea pigs are social creatures with a fascinating communication system. This blog post explores the various sounds, gestures, and behaviors guinea pigs use to express themselves. From joyful squeaks to warning rumbles, discover the nuanced language of these adorable rodents. Gain insights into how understanding guinea pig communication can strengthen the bond between you and your furry friends.",
    category: "Facts",
}
,
{
	title: "Unveiling the Dietary Secrets of Guinea Pigs",
	slug: "guinea-pig-dietary-secrets",
	content: "Guinea pigs have specific dietary needs crucial for their well-being. In this post, we delve into the nutritional requirements of guinea pigs, exploring the importance of hay, fresh veggies, and specialized pellets. Learn about the foods that are safe and those that should be avoided, ensuring your guinea pig enjoys a balanced and healthy diet. Discover the key to maintaining their vitality and longevity through proper nutrition.",
	category: "Facts",
},
	{
		title: "Pigfluencers: the people you didn't know you needed in your life",
		slug: "pigfluencers-blog-post",
		content: "Welcome to the wonderful world of pigfluencers: popular and influential guinea pigs on social media platforms. These are creatures that have gained a significant following due to their adorable looks, charming personalities, and the engaging content shared by their owners. Much like human influencers, pigfluencers often have dedicated social media accounts where their owners post photos and videos showcasing their daily lives, antics, and sometimes even product endorsements.",
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
