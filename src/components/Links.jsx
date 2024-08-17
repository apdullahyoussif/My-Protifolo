/** @format */

import {
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
	FaInstagram,
} from 'react-icons/fa';
function Links() {
	return (
		<div className=' fixed top-[50%] right-20 z-50'>
			<div className='flex flex-col space-y-4 my-4 md:my-0 '>
				<a
					href='https://www.facebook.com/Abdullahyoussef222'
					className='text-gray-400 hover:text-green-300'>
					<FaFacebook />
				</a>
				<a
					href='https://www.threads.net/@ap9ullah'
					className='text-gray-400 hover:text-green-300'>
					<FaTwitter />
				</a>
				<a
					href='https://www.linkedin.com/in/abdullah-mohammed-youssef'
					className='text-gray-400 hover:text-green-300'>
					<FaLinkedin />
				</a>
				<a
					href='https://github.com/apdullahyoussif'
					className='text-gray-400 hover:text-green-300'>
					<FaGithub />
				</a>
				<a
					href='https://www.youtube.com/@youlyenigma'
					className='text-gray-400 hover:text-green-300'>
					<FaYoutube />
				</a>
				<a
					href='https://www.instagram.com/ap9ullah'
					className='text-gray-400 hover:text-green-300'>
					<FaInstagram />
				</a>
			</div>
		</div>
	);
}

export default Links;
