import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

interface CampProps {
  bgImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ bgImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`w-full h-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className='flex flex-col justify-between items-start p-6 lg:px-20 lg:py-10 h-full'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image
              src='/folded-map.svg'
              alt='map-icon'
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => {
              return (
                <Image
                  src={url}
                  alt='person-icon'
                  className='inline-block w-10 h-10 rounded-full'
                  width={52}
                  height={52}
                  key={url}
                />
              );
            })}
          </span>
          <p className='bold-14 md:bold-16 text-white'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full justify-start items-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          bgImage='bg-bg-img-1'
          title='Pepe Camp'
          subtitle='Bonk Land, USA'
          peopleJoined='2800+ joined'
        />
        <CampSite
          bgImage='bg-bg-img-2'
          title='Dogwifhat Mountain'
          subtitle='Somewhere in Nature'
          peopleJoined='300+ joined'
        />
      </div>
      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 relative w-full overflow-hidden rounded-3xl p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20'>
          <h2 className='capitalize text-white regular-24 md:regular-32 2xl:regular-64'>
            <strong>Feeling Lost</strong> And Don't Know The Way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            While navigating the ups and downs of the memecoin market can be
            challenging, finding solace in nature's embrace through a tranquil
            hike can provide the perfect opportunity to reflect, recharge, and
            gain perspective.
          </p>
          <Image
            src='/quote.svg'
            alt='banner-bg-img'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
