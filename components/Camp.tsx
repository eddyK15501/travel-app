import Image from "next/image";

interface CampProps {
  bgImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ bgImage, title, subtitle, peopleJoined }: CampProps) => {
  return(
    <div className={`w-full h-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className='flex flex-col justify-between items-start p-6 lg:px-20 lg:py-10 h-full'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image src='/folded-map.svg' alt='Map Icon' width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full justify-start items-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite bgImage='bg-bg-img-1' title='Pepe Camp' subtitle='Pump Land, USA' peopleJoined='2800+ joined' />
      </div>
    </section>
  );
};

export default Camp;
