import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex justify-between max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/pepe.svg' alt='Pepe Logo' width={70} height={60} />
      </Link>
    </nav>
  );
};

export default Navbar;
