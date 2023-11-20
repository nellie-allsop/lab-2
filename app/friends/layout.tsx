export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="bg-black h-screen">
			<div>{children}</div>
		</main>
	);
}
