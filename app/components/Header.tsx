import Link from "next/link";

export default function Header() {
	return (
		<div>
			<div className="flex flex-col">
				<nav>
					<Link href="./">Home </Link>
					<Link href="./about">About me</Link>
					<Link href="./favourites">My favourites</Link>
					<Link href="./friends">Some friends...</Link>
				</nav>
				<div>
					<br />
					<h1>Telling you about me, using next.js</h1>
				</div>
			</div>
		</div>
	);
}
