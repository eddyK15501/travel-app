import Link from 'next/link';
import Image from 'next/image';

import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/pepe.svg' alt='Pepe Logo' width={70} height={60} />
      </Link>
      <ul className='gap-12 hidden lg:flex'>
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className='regular-16 text-gray-50 flex justify-center cursor-pointer pb-1.5 transition-all'
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
