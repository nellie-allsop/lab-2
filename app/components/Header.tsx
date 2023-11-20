import Link from "next/link";

export default function Header() {
	return (
		<div className="bg-red-300">
			<div className="flex flex-col">
				<nav className="flex justify-around text-white m-8">
					<Link href="./">Home </Link>
					<Link href="./about">About me</Link>
					<Link href="./favourites">My favourites</Link>
					<Link href="./friends">Some friends...</Link>
				</nav>
				<div>
					<br />
					<h1 className="font-bold flex justify-around mb-8 text-xl">
						Telling you about me, using next.js
					</h1>
				</div>
			</div>
		</div>
	);
}
