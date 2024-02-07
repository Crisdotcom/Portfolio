import React from 'react'
import WorkItem from './WorkItem'
import data from '../js/WorkData'

const Work = () => {
    return (
      <div id="experiencia" className='max-w-[1400px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experiencia Laboral</h1>
          {data.map((item, idx)=> (
              <WorkItem 
                  key={idx} 
                  year={item.year} 
                  title={item.title} 
                  duration={item.duration} 
                  details={item.details}
              />
          ))}
      </div>
    )
  }
  
  export default Work