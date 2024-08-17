
const Footer = () => {
	return (
		<footer className='bg-black text-white py-8'>
			<div className='container mx-auto px-8 md:px-16 lg:px-24'>
				<div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
					<div className='flex-1 mb-4 md:mb-0'></div>
					<div className='flex-1 w-full'>
						<form className='flex items-center justify-center'>
							<input
								type='email'
								placeholder='Your email'
								className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
							/>
							<button
								type='submit'
								className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400'>
						&copy; {new Date().getFullYear()}{' '}
						<span className='text-green-300'>Abdullah Youssef</span>. All rights
						reserved.
					</p>

				</div>
			</div>
		</footer>
	);
};

export default Footer;
