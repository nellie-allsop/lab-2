import AboutMe from "@/src/components/AboutMe";

export default function Home() {
	return (
		<main className="p-8 flex flex-col items-center justify-center">
			<AboutMe />
			<h2 className="text-4xl font-bold text-white">What is your name?</h2>
			<p className="font-mono text-xl">I am called Nellie.</p>
			<h2 className="text-4xl font-bold text-white">How old are you?</h2>
			<p className="font-mono text-xl">I am 28</p>
			<h2 className="text-4xl text-white font-bold">Do you have any pets?</h2>
			<p className="font-mono text-xl">
				No, but I would love to have some guinea pigs, including one called Dave.
			</p>
		</main>
	);
}
