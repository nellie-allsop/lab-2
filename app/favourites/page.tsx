import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Favourites",
	description: "A page all about some of my favourite things.",
};

export default function FavouriteRoute() {
	return (
		<main className="p-8 flex flex-col items-center justify-center">
			<p className="p-8">I love chocolate covered pretzels.</p>
			<Image className="rounded-full border-dashed border-8 border-blue-500" src='https://images.unsplash.com/photo-1662143029122-bda6c0da0d85?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='A nutella and pretzel dipping pot' height={280} width={401.5}></Image>
		</main>
	);
}
