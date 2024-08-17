import HeroImage from '../assets/profile3.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 text-left'/>
        <h1 className='md:text-4xl font-bold flex-wrap text-2xl md:w-full w-[300px] mx-auto'>
            I am 
            <span className='text-transparent bg-clip-text bg-gradient-to-r  from-green-400 to-blue-500'> Abdullah Youssef </span>
            , Front End Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 md:w-full mx-auto w-[350px] '>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwhatsapp.com%2Fdl%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3tcaoCio8Fy0kbncsmsESF44snb6bMaWrDX1_StmLEKM9YbixhZiDPJbE_aem_px9wGrs0F1-mPe0ORwXceg&h=AT3KOu6YdfDYd5N20GtI5BK-X3TPDfAr2CsIijkiXQKCVRtoa35ncUzxzR36cdpLmka5SD9u-FZJJ3BV1GQucJ6Ya5H1sWV3fmqssyF9UFuiopcWKH6EsQe2cjd20L3tucEoOw'
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition  duration-300 hover:scale-105 px-4 py-2 rounded-full '>Contact Me WhatsApp</a>
            
        </div>

    </div>
  )
}

export default Hero