import React from 'react'

const ProjectItem = ({img, title,stack}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-elegant-black hover:scale-110 ease-in duration-200'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal">
                <p className='text-center p-3 rounded-xl bg-white text-gray-700 font-bold cursor-pointer text-lg'>Mas Info</p>
            </button>
        </div>
    </div>
  )
}

export default ProjectItem