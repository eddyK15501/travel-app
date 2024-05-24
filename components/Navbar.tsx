import Link from 'next/link';
import Image from 'next/image';

import Button from './Button';

import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image
          src='/pepe.svg'
          alt='pepe-logo'
          width={70}
          height={60}
          priority={true}
        />
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
      <div className='lg:flex lg:justify-center hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>
      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
