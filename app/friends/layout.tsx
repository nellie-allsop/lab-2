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
