type guineaParam = { params: { pets: string } };

export default function GPRoute({ params }: guineaParam) {
	return (
		<div>
			<p className="p-40 flex justify-around">
				This page is spooookily different to the others
			</p>
		</div>
	);
}
