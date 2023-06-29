'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import Logo from '../atoms/Logo';

function NavLink({ url, text }) {
	const path = usePathname();

	return (
		<li className="flex">
			<Link
				href={url}
				className={`flex items-center mx-4 -mb-1 ${
					path === url && 'text-dark'
				}`}
			>
				{text}
			</Link>
		</li>
	);
}

export default function Navbar({ links, logoUrl, logoText }) {
	return (
		<div className="p-4">
			<div className="container flex justify-between h-16 mx-auto px-0 sm:px-6 ">
				<Logo src={logoUrl}>
					{logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
				</Logo>

				<div className="items-center flex-shrink-0 hidden lg:flex">
					<ul className="items-stretch hidden space-x-3 lg:flex">
						{links.map((link) => (
							<NavLink key={link.id} {...link} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
