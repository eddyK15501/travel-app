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
              alt='Map Icon'
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
                  alt='Person Icon'
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
          title='Dogwifhat Camp'
          subtitle='Somewhere in the Woods'
          peopleJoined='300+ joined'
        />
      </div>
    </section>
  );
};

export default Camp;
