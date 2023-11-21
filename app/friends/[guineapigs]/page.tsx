import Link from "next/link";

type guineaParam = { params: { guineapigs: string } };

export function generateMetadata({ params }: guineaParam) {
	const modTitle =
		params.guineapigs[0].toUpperCase() + params.guineapigs.slice(1);
	return {
		title: `My friends | ${modTitle}`,
		description: `A few facts about ${params.guineapigs}`,
	};
}

export default function Page({ params }: guineaParam) {
	return (
		<div>
			<h2>A dynamic route parameter: {params.guineapigs}</h2>
			<Link href="/friends">back button</Link>
		</div>
	);
}
