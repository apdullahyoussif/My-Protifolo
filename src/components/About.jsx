/** @format */

import AboutImage from '../assets/profile1.png';

const About = () => {
	return (
		<div
			className='bg-black text-white py-20'
			id='about'>
			<div className='container mx-auto px-8 md:px-16 lg:px-24'>
				<h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
				<div className='flex flex-col md:flex-row items-center md:space-x-12'>
					<img
						src={AboutImage}
						alt=''
						className='w-72 h-80 rounded object-contain md:hidden mb-8 md:mb-0'
					/>
					<section
						id='skills'
						className='bg-gray-900 rounded-2xl text-white py-12 px-8 md:px-16 lg:px-24'>
						<div className='container mx-auto'>
							<h2
								className='bg-gradient-to-r text-center mb-5 from-green-400 to-blue-500 text-white
                      transform transition  duration-300 hover:scale-105 px-4 py-2 rounded-full '>
								My Skills
							</h2>
							<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>HTML</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>CSS</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>Tailwind CSS</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>JavaScript</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>TypeScript</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>React.js</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>Redux Toolkit</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>Next.js</p>
								</div>
								<div className='bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300'>
									<p className='text-lg font-medium'>Strapi</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default About;
