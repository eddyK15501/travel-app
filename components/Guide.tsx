import Image from 'next/image';

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='w-full pb-24 padding-container max-container'>
        <Image src='/camp.svg' alt='camp-icon' width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We Are Here For You
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
            Join Us For An Easier Path Ahead.
          </h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Enough with the hopium already, ya big dumdum. Don't allow the pump
            & dumpers to kill your confidence in the volatile markets of
            memecoins. Take a break and join us for a refreshing wilderness
            adventure. Let nature's tranquility replenish your spirit and offer
            newfound perspective. Embrace the serenity of the outdoors and leave
            trading worries behind.
          </p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image
          src='/boat.png'
          alt='kayak'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>37 min</p>
              </div>
              <p className='bold-20 mt-2'>Pepe Camp</p>
            </div>
            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>
                Dogwifhat Mountain
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
