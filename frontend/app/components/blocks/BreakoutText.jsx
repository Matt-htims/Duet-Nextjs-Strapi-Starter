export default function BreakoutText({ data }) {
	return (
		<section className="py-32 px-12">
			<div className="container mx-auto text-center text-3xl font-medium">
				{data.displayType == 'h1' ? (
					<h1>{data.text}</h1>
				) : data.displayType == 'h2' ? (
					<h2>{data.text}</h2>
				) : data.displayType == 'h3' ? (
					<h3>{data.text}</h3>
				) : data.displayType == 'h4' ? (
					<h4>{data.text}</h4>
				) : data.displayType == 'h5' ? (
					<h5>{data.text}</h5>
				) : (
					''
				)}
			</div>
		</section>
	);
}
