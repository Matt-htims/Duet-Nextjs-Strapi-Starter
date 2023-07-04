export function renderButtonStyle(type) {
	switch (type) {
		case 'primary':
			return 'px-8 py-3 text-lg font-semibold rounded bg-primary text-black';
		case 'secondary':
			return 'px-8 py-3 text-lg font-semibold rounded bg-secondary border-gray';
		case 'accent':
			return 'px-8 py-3 text-lg font-semibold rounded bg-accent border-gray';
		case 'cta':
			return 'px-8 py-3 text-lg font-semibold rounded bg-cta border-gray';
		case 'outline':
			return 'px-8 py-3 text-lg font-semibold border rounded border-gray';
		default:
			return 'px-8 py-3 text-lg font-semibold rounded bg-primary text-black';
	}
}
