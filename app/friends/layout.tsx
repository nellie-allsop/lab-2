export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="bg-white h-screen">
			<div>{children}</div>
		</main>
	);
}
