/** @format */

import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className='bg-gray-900 text-white px-8 md:px-16 py-2 lg:px-24'>
			<div className='container py-2 flex justify-between items-center shadow-xl'>
				<div className='md:hidden ml-auto'>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='text-white hover:text-gray-400 focus:outline-none'>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					</button>
				</div>
				<div
					className={`md:flex hidden md:flex-row md:space-x-6 items-center ${
						isMenuOpen ? 'block' : 'hidden'
					} md:block`}>
					<a
						href='#home'
						className='hover:text-gray-400'>
						Home
					</a>
					<a
						href='#about'
						className='hover:text-gray-400'>
						About Me
					</a>
					<a
						href='#service'
						className='hover:text-gray-400'>
						Services
					</a>
					<a
						href='#project'
						className='hover:text-gray-400'>
						Projects
					</a>
					<a
						href='#contact'
						className='hover:text-gray-400'>
						Contact
					</a>
				</div>
				<div className='hidden md:block'>
					<a
						href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwhatsapp.com%2Fdl%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3tcaoCio8Fy0kbncsmsESF44snb6bMaWrDX1_StmLEKM9YbixhZiDPJbE_aem_px9wGrs0F1-mPe0ORwXceg&h=AT3KOu6YdfDYd5N20GtI5BK-X3TPDfAr2CsIijkiXQKCVRtoa35ncUzxzR36cdpLmka5SD9u-FZJJ3BV1GQucJ6Ya5H1sWV3fmqssyF9UFuiopcWKH6EsQe2cjd20L3tucEoOw'
						className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
						whatsApp
					</a>
				</div>
			</div>
			{isMenuOpen && (
				<div className='flex items-end divide-y-2  divide-slate-600 flex-col space-y-2 mt-4 md:hidden'>
					<a
						href='#home'
						className='hover:text-gray-400 transition hover:px-1'>
						Home
					</a>
					<a
						href='#about'
						className='hover:text-gray-400 transition hover:px-1'>
						About Me
					</a>
					<a
						href='#service'
						className='hover:text-gray-400 transition hover:px-1'>
						Services
					</a>
					<a
						href='#project'
						className='hover:text-gray-400 transition hover:px-1'>
						Projects
					</a>
					<a
						href='#contact'
						className='hover:text-gray-400 transition hover:px-1'>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
