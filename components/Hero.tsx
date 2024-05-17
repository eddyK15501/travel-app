import Image from 'next/image';

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
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        />
        <h1 className='bold-52 lg:bold-88'>Pepe Meme Coin Area</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
          Whether you're exploring meme-filled streets, hunting for the perfect
          selfie spot with Pepe, or immersing yourself in the latest crypto
          trends, our app provides tailored recommendations and insights to make
          your journey unforgettable.
        </p>
      </div>
    </section>
  );
};

export default Hero;
