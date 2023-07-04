import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { getStrapiMedia, getStrapiURL } from '@/utils/api-helpers';
import { fetchAPI } from '@/utils/fetch-api';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

const FALLBACK_SEO = {
	title: 'Nextjs + Strapi Starter',
	description: 'Nextjs + Strapi Starter for Duet Agency',
};

async function getGlobal() {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

	if (!token)
		throw new Error('the Strapi API Token environment variable is not set.');

	const path = `/global`;
	const options = { headers: { Authorization: `Bearer ${token}` } };

	const urlParamsObject = {
		populate: [
			'metadata.shareImage',
			'favicon',
			'navbar.links',
			'navbar.navbarLogo.logoImg',
			'footer.footerLogo.logoImg',
			'footer.menuLinks',
			'footer.legalLinks',
			'footer.socialLinks',
		],
	};

	const response = await fetchAPI(path, urlParamsObject, options);
	return response;
}

export async function generateMetadata() {
	const meta = await getGlobal();

	if (!meta.data) return FALLBACK_SEO;

	const { metadata, favicon } = meta.data.attributes;
	const { url } = favicon.data.attributes;

	return {
		title: metadata.metaTitle,
		description: metadata.metaDescription,
		icons: {
			icon: [new URL(url, getStrapiURL())],
		},
	};
}

export default async function RootLayout({ children }) {
	const global = await getGlobal();
	if (!global.data) return null;

	const { navbar, footer } = global.data.attributes;

	const navbarLogoUrl = getStrapiMedia(
		navbar.navbarLogo.logoImg.data.attributes.url
	);

	const footerLogoUrl = getStrapiMedia(
		footer.footerLogo.logoImg.data.attributes.url
	);

	return (
		<html lang="en">
			<body className={`${inter.className} relative`}>
				<Navbar
					links={navbar.links}
					logoUrl={navbarLogoUrl}
					logoText={navbar.navbarLogo.logoText}
				/>
				<main className="min-h-screen">{children}</main>

				<Footer
					logoUrl={footerLogoUrl}
					logoText={footer.footerLogo.logoText}
					menuLinks={footer.menuLinks}
					legalLinks={footer.legalLinks}
					socialLinks={footer.socialLinks}
				/>
			</body>
		</html>
	);
}
