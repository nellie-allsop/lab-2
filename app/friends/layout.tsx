export default function friendsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="h-screen p-8 flex flex-col items-center ">
			<div className="bg-blue-500">{children}</div>
		</main>
	);
}
