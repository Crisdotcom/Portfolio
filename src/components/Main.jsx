import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src="src/assets/img/main-bg.jpg" alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 '>
            <div className='max-w-[1200px] m-auto h-full w-full flex flex-col justify-center lg:items-start md:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-white'>Cristóbal Lira Gonzalez</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-200'>
                    Soy 
                    <TypeAnimation
                        sequence={[
                            'Programador',
                            1000, 
                            'Desarrollador FullStack', 
                            1000,
                            'Ingeniero...', 
                            3000, 
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[90px] w-full'>
                    <a href="https://www.linkedin.com/in/crist%C3%B3bal-lira-gonzalez-7678b118b/"><FaLinkedinIn className='cursor-pointer text-white' size={20}/></a>
                    <a href="https://github.com/Cristobal-cotard">
                        <FaGithub className='cursor-pointer text-white' size={20}/>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main