import Link from "next/link";

type guineasSearchQuery = {
	sortBy: string;
};

type guineasType = {
	name: string;
	squishFactor: number;
	id: number;
};

let guineas: guineasType[] = [
	{
		name: "Derek",
		squishFactor: 10,
		id: 0,
	},
	{
		name: "Butternut",
		squishFactor: 5,
		id: 2,
	},
	{
		name: "Bernard",
		squishFactor: 8,
		id: 1,
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
		<div>
			<h1>Furry amigos</h1>
			<Link href="/friends">Reset the page</Link>
			<Link href="/friends?sortBy=asc">Sort low-high</Link>
			<Link href="/friends?sortBy=desc">Sort high-low</Link>

			{sortedGuineas.map((guineas) => {
				return (
					<div key={guineas.id}>
						<Link href={`/friends${guineas.name.toLowerCase()}`}>
							{guineas.name}
							<br />
							{guineas.squishFactor}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
