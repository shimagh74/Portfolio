// import { Bars3Icon } from "@heroicons/react/16/solid";
// import React from "react"

// interface Props {
//     openNav: ()=> void;
// }
// const Nav =({openNav}:Props)=>{
//     return <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
//         <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
//             <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">WEB
//                 <span className="text-yellow-300">DEV</span>
//             </h1>
//             <div className="nav-link">Home</div>
//             <div className="nav-link">SERVICES</div>
//             <div className="nav-link">ABOUT</div>
//             <div className="nav-link">PROJECT</div>
//             <div className="nav-link">BLOG</div>
//             <div className="nav-link">CONTACT</div>
//             <div onClick={openNav}>
//                 <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
//             </div>
//         </div>

//     </div>
// }
// export default Nav;
import { Bars3Icon } from "@heroicons/react/16/solid";
import { Link, animateScroll as scroll } from "react-scroll";

const menu = [
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Work",
    href: "work",
  },
  {
    name: "FAQ",
    href: "FAQ",
  },
  {
    name: "Contact",
    href: "Contact",
  },
];
interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  return (

        <nav className="z-50 flex gap-8">
          {menu.map((item, index) => (
            <Link
              to={item.href}
              spy={true}
              smooth={true}
              key={index}
              className="cursor-pointer text-lg font-medium capitalize text-lighted"
            >
              <span className="pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
       
  );
};

export default Nav;
