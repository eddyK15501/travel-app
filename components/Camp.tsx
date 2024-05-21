interface CampProps {
  bgImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ bgImage, title, subtitle, peopleJoined }: CampProps) => {
  return(
    <div>
      CampSite Component
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
