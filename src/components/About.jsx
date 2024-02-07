import React from 'react'
import StackItem from './StackItem'
import mongoIcon from '../assets/img/icons/mongo-icon.png'
import expressIcon from '../assets/img/icons/exprss-icon.png'
import reactIcon from '../assets/img/icons/react-icon.png'
import nodeIcon from '../assets/img/icons/node-icon.png'
import unityIcon from '../assets/img/icons/unity-icon.png'
import unrealIcon from '../assets/img/icons/unreal-icon.png'
import blenderIcon from '../assets/img/icons/blender-icon.png'
import psIcon from '../assets/img/icons/ps-icon.png'
import jsIcon from '../assets/img/icons/js-icon.png'
import pyIcon from '../assets/img/icons/python-icon.png'
import cIcon from '../assets/img/icons/csharp-icon.png'
import phpIcon from '../assets/img/icons/php-icon.png'
import javaIcon from '../assets/img/icons/java-icon.png'
import restIcon from '../assets/img/icons/rest-icon.png'
import soapIcon from '../assets/img/icons/soap-icon.png'
import mysqlIcon from '../assets/img/icons/mysql-icon.png'
import plIcon from '../assets/img/icons/plsql-icon.svg'

const About = () => {
  return (
    <div id="acerca" className='max-w-[1400px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Acerca de mi</h1>
            <p className='py-8 '>
              Ingeniero informático con experiencia en proyectos web para grandes y medianas empresas. Mi gran 
              capacidad de adaptabilidad a nuevos ambientes y, sobre todo, a nuevos grupos de trabajo, me permite aportar 
              un enfoque fresco y versátil a cada proyecto.
              Me especializo en el desarrollo web Front y Back-End con un sólido conocimiento de tecnologías como HTML, 
              CSS (principalmente Bootstrap), JavaScript (incluyendo Jquery y TypeScript) y PHP (Laravel), NodeJS, entre 
              otras. A lo largo de mi carrera, he participado en proyectos web independientes que actualmente están en 
              producción, lo que me ha permitido adquirir habilidades de gestión de proyectos, organización y trabajo en 
              equipo. Me apasiona mantenerme actualizado en cuanto a las últimas tendencias y tecnologías en el 
              desarrollo web y siempre busco maneras de mejorar mis habilidades y conocimientos. Siempre estoy 
              dispuesto a colaborar con mi equipo para alcanzar los objetivos y superar las expectativas del cliente.
            </p>
        <div className='flex py-8'>
          <div className="w-1/2">
            
            <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-4'>Tecnologias que manejo</h1>

            <section>
              <h1 className='text-2xl font-bold text-start text-stone-600 py-2'>Desarrollo web con 'Stack MERN':</h1>
              <div className='flex justify-between pt-6'>
                <StackItem img={mongoIcon} text={'MongoDB'}/>
                <StackItem img={expressIcon} text={'Express'}/>
                <StackItem img={reactIcon} text={'ReactJS'}/>
                <StackItem img={nodeIcon} text={'NodeJS'}/>
              </div>
            </section>

            <section>
              <h1 className='text-2xl font-bold text-start text-stone-600 py-2'>Lenguajes de programacion:</h1>
              <div className='flex justify-between pt-6'>
                <StackItem img={jsIcon} text={'JavaScript'}/>
                <StackItem img={pyIcon} text={'Python'}/>
                <StackItem img={cIcon} text={'C#'}/>
                <StackItem img={phpIcon} text={'PHP'}/>
                <StackItem img={javaIcon} text={'Java'}/>
              </div>
            </section>
            <section>
              <h1 className='text-2xl font-bold text-start text-stone-600 py-2'>Otras tecnologias:</h1>
              <div className='flex justify-between pt-6'>
                <StackItem img={restIcon} text={'ApiRest'}/>
                <StackItem img={soapIcon} text={'ApiSoap'}/>
                <StackItem img={mysqlIcon} text={'MySQL'}/>
                <StackItem img={plIcon} text={'OracleSQL'}/>
              </div>
            </section>

            <section>
              <h1 className='text-2xl font-bold text-start text-stone-600 py-4'>Desarrollo de Videojuegos (<a href='' className='font-normal underline text-blue-500'>Mas info</a>) :</h1>
              <div className='flex justify-between pt-6'>
                <StackItem img={unityIcon} text={'Unity'}/>
                <StackItem img={blenderIcon} text={'Blender'}/>
                <StackItem img={psIcon} text={'Photoshop'}/>
              </div>
            </section>

          </div>
          <div className="w-1/2 ml-5">
            <img className='rounded-full w-full shadow-xl shadow-gray-900 hover:scale-105 ease-in duration-100' src="https://imagescdn.planetfashion.in/img/app/product/7/747157-8425658.jpg?auto=format" alt="" />
          </div>
        </div>
    </div>
  )
}

export default About