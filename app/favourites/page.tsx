import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Favourites",
	description: "A page all about some of my favourite things.",
};

export default function FavouriteRoute() {
	return (
		<main className="p-8 flex flex-col items-center justify-center">
			<p className="p-8">I love chocolate covered pretzels.</p>
		</main>
	);
}
