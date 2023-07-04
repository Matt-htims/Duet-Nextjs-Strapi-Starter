import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/blocks/Hero'), {
	ssr: true,
});

const BreakoutText = dynamic(
	() => import('../components/blocks/BreakoutText'),
	{
		ssr: true,
	}
);

const Testimonials = dynamic(
	() => import('../components/blocks/Testimonials'),
	{
		ssr: true,
	}
);

const LeadForm = dynamic(
	() => import('../components/blocks/LeadForm/LeadForm'),
	{ ssr: true }
);

const RichText = dynamic(() => import('../components/blocks/RichText'), {
	ssr: true,
});

const ImageSlider = dynamic(() => import('../components/blocks/ImageSlider'), {
	ssr: true,
});

export function blockRenderer(block, index) {
	switch (block.__component) {
		case 'blocks.hero':
			return <Hero key={index} data={block} />;
		case 'blocks.breakout-text':
			return <BreakoutText key={index} data={block} />;
		case 'blocks.testimonials-group':
			return <Testimonials key={index} data={block} />;
		case 'blocks.rich-text':
			return <RichText key={index} data={block} />;
		case 'blocks.lead-form':
			return <LeadForm key={index} data={block} />;
		case 'blocks.image-slider':
			return <ImageSlider key={index} data={block} />;
		default:
			return null;
	}
}
