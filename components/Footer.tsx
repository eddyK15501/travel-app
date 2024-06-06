import Image from 'next/image';
import Link from 'next/link';

import { FOOTER_LINKS, FOOTER_CONTACT_INFO } from '@/constants';

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image src='pepe.svg' alt='Pepe' width={55} height={55} />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((col) => (
              <FooterCol title={col.title} key={col.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {col.links.map((link) => {
                    return (
                      <Link href='/' key={link}>
                        {link}
                      </Link>
                    );
                  })}
                </ul>
              </FooterCol>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterCol title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => {
                  return (
                    <Link
                      href='/'
                      className='flex gap-4 md:flex-col lg:flex-row'
                      key={link.label}
                    >
                      <p className='whitespace-nowrap'>{link.label}:</p>
                      <p className='medium-14 whitespace-nowrap text-blue-70'>
                        {link.value}
                      </p>
                    </Link>
                  );
                })}
              </FooterCol>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColProps = {
  title: string;
  children: React.ReactNode;
};

const FooterCol = ({ title, children }: FooterColProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
