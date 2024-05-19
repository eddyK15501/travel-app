import Image from 'next/image';

import Button from './Button';

const Hero = () => {
  return (
    <section className='flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row max-container padding-container'>
      <div className='hero-map' />
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <Image
          src='/camp.svg'
          alt='Camp'
          width={50}
          height={50}
          className='absolute left-[-5px] top-[-30px] w-10'
        />
        <h1 className='bold-52 lg:bold-88'>Pepe Meme Coin Area</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Whether you're exploring meme-filled streets, hunting for the perfect
          selfie spot with Pepe, or immersing yourself in the latest crypto
          trends, our app provides tailored recommendations and insights to make
          your journey unforgettable.
        </p>
        <div className='my-11 flex flex-wrap items-center gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image
                  src='/star.svg'
                  alt='Star'
                  key={i}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className='bold-14 text-blue-70 text-sm'>
            200k <span className='regular-14 ml-0.5'>Excellent Reviews</span>
          </p>
        </div>
        <div className='flex w-full gap-3 sm:flex-row items-center'>
          <Button type='button' title='Download App' variant='btn_green' />
          <div className='font-semibold'>
            <a
              href='https://giphy.com/gifs/paramountmovies-matthew-mcconaughey-wolf-of-wall-street-chest-thump-gdwJdym3VuXQr5OfAc'
              target='_blank'
            >
              <Button
                type='button'
                title='What is this?'
                icon='/play.svg'
                variant='btn_white_text'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 w-[258px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Location</p>
              <Image src='/close.svg' alt='close' width={24} height={24} />
            </div>
            <p className='regular-20 text-white'>Pump Land</p>
          </div>
          <div className='flexBetween'>
            <div className='flex-flex-col'>
              <p className='regular-16 block text-gray-20'>Distance</p>
              <p className='bold-20 text-white'>420.69 mi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
