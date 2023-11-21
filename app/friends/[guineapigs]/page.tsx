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
		<div className="flex flex-col-reverse">
			<h2>Welcome to this page all about {params.guineapigs}! They were a lovely friend to me ❤️</h2>
			<Link className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3 text-white w-20 h-20"href="/friends">Back button</Link>
		</div>
	);
}
