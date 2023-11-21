import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About me",
	description: "A page all about me!",
};

export default function AboutRoute() {
	return (
		<main className="p-8 flex flex-col items-center justify-center">
			<p className="p-8">Fun fact, I moved to Norwich this year!</p>
		</main>
	)
}
