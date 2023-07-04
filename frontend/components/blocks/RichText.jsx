import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function RichText({ data }) {
	return (
		<section className="rich-text container mx-auto py-6 px-12">
			<Markdown children={data.content} remarkPlugins={[remarkGfm]} />
		</section>
	);
}
