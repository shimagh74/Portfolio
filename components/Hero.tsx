import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";
import Social from "./social";

const Hero = () => {
  return (
    <section className="relative pt-24 w-full h-screen bg-primary text-lighted overflow-hidden">
      {/* پارتیکل‌ها */}
      <Particle />

      {/* محتوا */}
      <div className="relative z-10 container mx-auto h-full">
        <div className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8 h-full">
          {/* متن */}
          <div className="text-center xl:text-left">
            <span>Hello I&apos;m</span>
            <h1 className="text-[40px] font-bold capitalize leading-[3rem]">
              Shima
            </h1>
            <TextEffect />
            <div className="py-8 text-lighted">
              <p>
                A passionate React Developer based in Melbourne, I specialize in
                building dynamic, user-friendly web applications using modern
                frameworks and technologies. With expertise in React.js,
                Next.js, Node.js, and Tailwind CSS, I deliver high-performance,
                scalable solutions while ensuring seamless user experiences.
                Let’s create something exceptional together!
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8">
              <div className="flex gap-x-2">
                <Link
                  href="/resume/Shima_Resume.pdf"
                  target="_blank"
                  download
                  className="flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-lighted"
                >
                  <span className="text-sm">Download CV</span>
                  <Download className="size-5" />
                </Link>
              </div>
              <div className="flex py-4 xl:py-0">
                <Social />
              </div>
            </div>
          </div>
          {/* تصویر */}
          <Image
            src="/images/mainPic.jpg"
            height={400}
            width={400}
            alt="profile"
            className="inset-0 z-40 object-contain hidden xl:block xl:translate-y-[3px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
