'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary text-lighted'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='justify-betweenlg:mr-8 flex w-full flex-col lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem] '>
              What can I help with?
            </h1>
            <p>
              As a passionate Front-End Developer with over 5 years of experience, I specialize in building modern, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS. Whether you are a startup or an established business, I can help transform your ideas into elegant and functional digital experiences.

            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'> Projects</p>
                <p className='text-[36px] font-bold text-blue'>
                  {' '}
                  + <AnimatedCounter from={0} to={5} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>
                  {' '}
                  satisfied client
                </p>
                <p className='text-[36px] font-bold text-blue'>
                  <AnimatedCounter from={0} to={5} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                  Front-end development
                </h2>
                <p>
                  Turn your design (Figma/XD) into a pixel-perfect, fully responsive web application using React or Next.js, styled with Tailwind CSS or Material UI. Performance, accessibility, and clean code guaranteed.
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                   UI Development & Optimization
                </h2>
                <p>
                  Build fast, accessible, and visually appealing user interfaces using modern front-end technologies. I focus on clean code, smooth animations, and responsive layouts that deliver excellent user experience across all devices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services