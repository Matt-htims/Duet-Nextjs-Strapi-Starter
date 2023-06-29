import { fetchAPI } from '@/app/utils/fetch-api';
import { blockRenderer } from '@/app/utils/block-renderer';

async function getPageBySlug(slug) {
	const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
	const path = `/pages`;
	const urlParamsObject = { filters: { slug } };
	const options = { headers: { Authorization: `Bearer ${token}` } };
	const response = await fetchAPI(path, urlParamsObject, options);
	return response;
}

export default async function RootRoute() {
	const page = await getPageBySlug('about');
	if (page.data.length === 0) return null;
	const contentBlocks = page.data[0].attributes.contentBlocks;
	return contentBlocks.map((block, index) => blockRenderer(block, index));
}
