import Link from "next/link";

export default function Header() {
	return (
		<div className="bg-pink-500 text-white">
			<div className="flex flex-col">
				<nav className="flex justify-around m-8 text-2xl">
					<Link
						className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
						href="/"
					>
						Home{" "}
					</Link>
					<Link
						className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
						href="/about"
					>
						About
					</Link>
					<Link
						className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
						href="/favourites"
					>
						My favourites
					</Link>
					<Link
						className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
						href="/blog"
					>
						Blog
					</Link>
					<Link
						className="bg-green-500 hover:bg-green-300 font-bold rounded py-3 px-3"
						href="/friends"
					>
						Some friends...
					</Link>
				</nav>
				<div>
					<br />
					<h1 className="font-bold flex justify-around mb-8 text-4xl">
						Telling you about me, using next.js
					</h1>
				</div>
			</div>
		</div>
	);
}
