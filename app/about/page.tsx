import { Metadata } from "next";
// import AboutMe from "../components/AboutMe";

export const metadata: Metadata = {
	title: "About",
	description: "A page explaining why I made this site",
};

export default function AboutRoute() {
	return (
		<main className="p-8 flex flex-col items-center justify-center">
			{/* <AboutMe /> */}
			<p className="p-8">Fun fact, I moved to Norwich this year!</p>
		</main>
	);
}
