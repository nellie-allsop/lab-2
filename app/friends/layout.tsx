import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "A cute website",
	description: "made during a next.js course",
};

export default function friendsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="bg-white h-screen p-8 flex flex-col items-center ">
			<div>{children}</div>
		</main>
	);
}
