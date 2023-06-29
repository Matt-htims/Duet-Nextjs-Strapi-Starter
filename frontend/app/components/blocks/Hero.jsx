import Link from 'next/link';
import Image from 'next/image';
import HighlightedText from '../atoms/HighlightedText';
import { getStrapiMedia } from '@/app/utils/api-helpers';
import { renderButtonStyle } from '@/app/utils/render-button-style';

export default function Hero({ data }) {
	const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

	return (
		<section className="">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
					<HighlightedText
						text={data.title}
						tag="h1"
						className="text-5xl font-bold leading-none sm:text-6xl mb-8"
						color="text-primary"
					/>

					<HighlightedText
						text={data.description}
						tag="p"
						className="mt-6 mb-8 text-lg sm:mb-12"
						color="text-primary"
					/>
					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						{data.buttons.map((button, index) => (
							<Link
								key={index}
								href={button.url}
								target={button.newTab ? '_blank' : '_self'}
								className={renderButtonStyle(button.type)}
							>
								{button.text}
							</Link>
						))}
					</div>
				</div>
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<Image
						src={imgUrl || ''}
						alt={
							data.picture.data.attributes.alternativeText || 'none provided'
						}
						className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
						width={600}
						height={600}
					/>
				</div>
			</div>
		</section>
	);
}
