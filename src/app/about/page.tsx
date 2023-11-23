import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "About",
	description: "A page explaining why I made this site",
};

export default function AboutRoute() {
	return (
		<main className="p-8 flex flex-col items-center justify-center">
			<p className="p-8">This site was created by Nellie Allsop, an aspiring dev who currently lives in Norwich</p>
			<Image className="rounded-full border-dashed border-8 border-blue-500" src="/Codebar.jpg" width={325} height={250} alt="Nellie being mentored at a codebar session" />
			<p className="p-3"><strong>Picture credit:</strong> codebar Norwich</p>
		</main>
	);
}
