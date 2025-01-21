import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <section >

        <div className="p-8 bg-[url('/images/banner.jpg')] bg-cover bg-center">
          <Particle />
          <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
              <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                HI, I&aposm <span className="text-yellow-400">Shima!</span>
              </h1>
              <TextEffect />
            </div>
            <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
              <Image
                src="/images/u1.jpg"
                alt="user"
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
    </section>
  );
};
export default Hero;
