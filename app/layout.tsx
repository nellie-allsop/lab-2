import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "about Nellie",
	description:
		"Come on a magical, mystical journey into the world of Miss Allsop.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${space.className} bg-gradient-to-r from-yellow-500 via-green-500 to-pink-500`}
			>
				<Header />
				<div className="h-screen">
				{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
