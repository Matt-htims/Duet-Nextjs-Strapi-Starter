export default function HighlightedText({ text, tag, className, color }) {
	const tempText = text.split(' ');
	let result = [];

	result.push(`<${tag} class="${className ? className : ''}">`);

	tempText.forEach((word, index) => {
		if (word.includes('[')) {
			const highlight = word.replace('[', '').replace(']', '');
			result.push(
				`<span key=${index} class="${color ? color : ''}">${highlight}</span> `
			);
		} else result.push(word + ' ');
	});

	result.push(`</${tag}>`);

	return <div dangerouslySetInnerHTML={{ __html: result.join('') }} />;
}
