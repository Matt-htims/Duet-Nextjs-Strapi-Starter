'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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
	const [open, setOpen] = useState(false);

	function handleTray() {
		setOpen(!open);
	}
	function closeTray() {
		setOpen(false);
	}

	const hamburgerLine = `h-1 w-9 bg-black transition ease transform duration-[400ms]`;

	// useEffect(() => {
	// 	if (open) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.style.overflow = 'unset';
	// 	}
	// });

	return (
		<>
			<div className="p-4 z-40 sticky top-0">
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
					<button
						onClick={handleTray}
						className="cursor-pointer text-white lg:hidden right-0 mr-11 space-y-3"
					>
						<div
							className={`${hamburgerLine} ${
								open ? 'rotate-45 translate-y-2' : ''
							}`}
						></div>
						<div
							className={`${hamburgerLine} ${
								open ? '-rotate-45 -translate-y-2' : ''
							}`}
						></div>
					</button>
				</div>
			</div>
			<div
				onClick={handleTray}
				className={`w-full h-screen bg-black/70 transition-all duration-[400ms] fixed top-0 bottom-0 opacity-0 z-20 overflow-hidden lg:hidden ${
					open ? 'opacity-100' : 'z-[-1]'
				}`}
			></div>
			<div
				className={`fixed top-0 bottom-0 transition-all duration-[400ms] flex flex-col justify-center z-30 items-center space-y-10 w-9/12 ml-auto bg-primary lg:hidden ${
					open ? 'right-0' : 'right-[-100%]'
				}`}
			>
				{links.map((link) => (
					<Link
						href={link.url}
						key={link.id}
						onClick={handleTray}
						className="text-white text-5xl transition hover:text-black font-main"
					>
						{link.text}
					</Link>
				))}
			</div>
		</>
	);
}
