import { projectsData } from '@/app/lib/data'
import React from 'react'
import { Project } from './project'

const Work = () => {
  return (
    <section id='work' className='bg-primary text-lighted '>
      <div className='container w-full py-[60px] lg:py-[100px]'>
        <h1 className='mt-8 px-2 py-4 text-[40px] font-bold uppercase leading-[3rem] md:px-0'>
          recent
          <br />
          <span className='under-line'>projects</span>
        </h1>
        <div className='flex flex-col gap-[200px] py-4 xl:gap-[150px]'>
          {projectsData.map((project, i) => (
            <React.Fragment key={i}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
