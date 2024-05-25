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
    </section>
  );
};

export default Guide;
