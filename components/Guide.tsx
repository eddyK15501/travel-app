import Image from 'next/image';

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='w-full pb-24 padding-container max-container'>
        <Image src='/camp.svg' alt='camp-icon' width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We Are Here For You
        </p>
      </div>
    </section>
  );
};

export default Guide;
