// import { XMarkIcon } from "@heroicons/react/16/solid";
// import React from "react";

// interface Props{
//     nav: boolean;
//     closeNav: ()=> void;
// }

// const MobileNav = ({nav , closeNav}:Props) => {

//     const navAnimation = nav? "translate-x-0" : "translate-x-[-100%]";

//     return(
//         <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000] bg-[#09101a]`}>
//             <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
//             <div className="nav-link-mobile">Home</div>
//             <div className="nav-link-mobile">SERVICES</div>
//             <div className="nav-link-mobile">ABOUT</div>
//             <div className="nav-link-mobile">PROJECT</div>
//             <div className="nav-link-mobile">BLOG</div>
//             <div className="nav-link-mobile">CONTACT</div>
//             </div>
//             <div
//             onClick={closeNav}
//             className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] text-yellow-400">
//                 <XMarkIcon/>
//             </div>
//         </div>
//     )
// }

// export default MobileNav;
'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const menu = [
  {
    name: 'services',
    href: 'services'
  },
  {
    name: 'work',
    href: '/works'
  },
  {
    name: 'FAQ',
    href: '/FAQ'
  },
  {
    name: 'Conact',
    href: '/contact'
  }
]

const MobileNav = () => {
  return (
    <Sheet >
      <SheetTrigger className='flex items-center'>
        <Menu className='size-8 text-blue' />
      </SheetTrigger>
      <SheetContent>
        <div className='mb-20 mt-10 flex items-center justify-center'>
          <Link href='/'>
            <Image src='/logo.png' height={60.53} width={47.35} alt='logo' />
          </Link>
        </div>
        <nav className='mt-8 flex flex-col items-center justify-center gap-8 text-lightedYellow'>
          {menu.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className='text-lg font-medium capitalize'
            >
              <span className='pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue'>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav