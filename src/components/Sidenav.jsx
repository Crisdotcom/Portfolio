import react,{useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail,AiOutlineTrophy} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'


const Sidenav = () =>{
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    };

    return(
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                nav ? (
                    <div className="fixed w-full h-screen  flex flex-col justify-center items-center z-20 md:hidden">
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={20}/>
                            <span className="pl-4">Inicio</span>
                        </a> 
                        <a href="#experiencia" className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <GrProjects size={20}/>
                            <span className="pl-4">Mi Experiencia</span>
                        </a>
                        <a href="#proyectos" className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineProject size={20}/>
                            <span className="pl-4">Mis Proyectos</span>
                        </a>
                        <a href="#logros" className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineTrophy size={20}/>
                            <span className="pl-4">Mis Logros</span>
                        </a>
                        <a href="#acerca" className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <BsPerson size={20}/>
                            <span className="pl-4">Acerca de mi</span>
                        </a>
                        <a href="#contacto" className="w-[75%] flex justify-center items-center rounded-full shadow-lg  bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineMail size={20}/>
                            <span className="pl-4">Contacto</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-xl shadow- bg-gray-300 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href="#experiencia" className="rounded-xl shadow- bg-gray-300 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <GrProjects size={20}/>
                    </a>
                    <a href="#proyectos" className="rounded-xl shadow- bg-gray-300 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineProject size={20}/>
                    </a>
                    <a href="#logros" className="rounded-xl shadow- bg-gray-300 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineTrophy size={20}/>
                    </a>
                    <a href="#acerca" className="rounded-xl shadow- bg-gray-300 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsPerson size={20}/>
                    </a>
                    <a href="#contacto" className="rounded-xl shadow- bg-gray-300 shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Sidenav