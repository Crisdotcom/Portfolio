import React from 'react'

const ProjectItem = ({src}) => {
  return (
    <div className='bg-black relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-110 ease-in duration-200'>
        <iframe height="190px" width="400px" src={src} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
    </div>
  )
}

export default ProjectItem