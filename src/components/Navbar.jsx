/** @format */


const Navbar = () => {
	return (
		<nav className='bg-gray-900 text-white px-8 md:px-16 py-2 lg:px-24'>
			<div className='container py-2 flex justify-center md:justify-between items-center'>
				<div className='space-x-6'>
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
				<a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwhatsapp.com%2Fdl%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3tcaoCio8Fy0kbncsmsESF44snb6bMaWrDX1_StmLEKM9YbixhZiDPJbE_aem_px9wGrs0F1-mPe0ORwXceg&h=AT3KOu6YdfDYd5N20GtI5BK-X3TPDfAr2CsIijkiXQKCVRtoa35ncUzxzR36cdpLmka5SD9u-FZJJ3BV1GQucJ6Ya5H1sWV3fmqssyF9UFuiopcWKH6EsQe2cjd20L3tucEoOw"
					className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
					whatsApp
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
