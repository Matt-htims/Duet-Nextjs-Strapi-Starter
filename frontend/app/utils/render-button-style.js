export function renderButtonStyle(type) {
	switch (type) {
		case 'primary':
			return 'px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-900';
		case 'secondary':
			return 'px-8 py-3 text-lg font-semibold rounded bg-secondary border-gray-100';
		case 'accent':
			return 'px-8 py-3 text-lg font-semibold rounded bg-accent border-gray-100';
		case 'cta':
			return 'px-8 py-3 text-lg font-semibold rounded bg-cta border-gray-100';
		case 'outline':
			return 'px-8 py-3 text-lg font-semibold border rounded border-gray-100';
		default:
			return 'px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900';
	}
}
