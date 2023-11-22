import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Friends",
	description: "A page all about some of my furry friends",
};

type guineasSearchQuery = {
	sortBy: string;
};

type guineasType = {
	name: string;
	squishFactor: number;
	colour: string;
	id: number;
};

let guineas: guineasType[] = [
	{
		name: "Derek",
		squishFactor: 10,
		colour: "orange",
		id: 0,
	},
	{
		name: "Butternut",
		squishFactor: 5,
		colour: "squashy hue",
		id: 1,
	},
	{
		name: "Bernard",
		squishFactor: 8,
		colour: "brown",
		id: 2,
	},
];

function compareGuineas(a: guineasType, b: guineasType) {
	if (a.squishFactor < b.squishFactor) {
		return -1;
	} else if (a.squishFactor > b.squishFactor) {
		return 1;
	} else {
		return 0;
	}
}

export default function Page({
	searchParams,
}: {
	searchParams: guineasSearchQuery;
}) {
	let sortedGuineas = [...guineas];

	if (searchParams.sortBy == "asc") {
		sortedGuineas.sort(compareGuineas);
	} else if (searchParams.sortBy == "desc") {
		sortedGuineas.sort(compareGuineas).reverse();
	}
	return (
		<div className="text-2xl">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-4xl m-2">Furry amigos</h1>
				<section>
				<Image src="/Derek.jpg" width={343.5} height={405} alt="Derek Allsop" />
				<Image src="/Bernard.jpg" width={710} height={838} alt="Bernard Allsop" />
				<Image src="/Butternut.jpg" width={2448} height={3264} alt="Butternut Allsop" />
				</section>
				<p className="m-2">
					Click on each name to find out more about each friend!
				</p>
				<h2 className="m-2">Sort by squish factor</h2>
			</div>
			<div className="flex flex-row justify-around m-8">
				<Link
					className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
					href="/friends"
				>
					Reset the page
				</Link>
				<br />
				<Link
					className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
					href="/friends?sortBy=asc"
				>
					Sort low-high
				</Link>
				<br />
				<Link
					className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
					href="/friends?sortBy=desc"
				>
					Sort high-low
				</Link>
			</div>
			<div className="bg-green-500 flex flex-col">
				{sortedGuineas.map((guineas) => {
					return (
						<div className="font-mono" key={guineas.id}>
							<Link href={`/friends/${guineas.name.toLowerCase()}`}>
								<div className="bg-green-200 font-bold underline">
									{guineas.name}
								</div>
							</Link>
							<p>Coat colour: {guineas.colour}</p>
							<p>Squish factor: {guineas.squishFactor}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
