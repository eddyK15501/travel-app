import Image from "next/image"
import Link from "next/link"

import { FOOTER_LINKS } from "@/constants"

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href='/' className='mb-10'>
            <Image src='pepe.svg' alt='Pepe' width={55} height={55} />
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterCol />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterCol = () => {}

export default Footer