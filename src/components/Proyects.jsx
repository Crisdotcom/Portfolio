import React from 'react'
import ProjectItem from './ProjectItem'
import ProjectVideo from './ProjectVideo'
import projectDasboard from '../assets/img/projects/project-dashboard.png'
import projectgr from '../assets/img/projects/projectgr.png'
import onbreak from '../assets/img/projects/onbreak.png'
import crudLaravel from '../assets/img/projects/crudLaravel.png'
const Proyects = () => {
  return (
    <div id='proyectos' className='max-w-[1400px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Proyectos</h1>
      <p className='text-center py-8 text-justify'>
      He tenido el privilegio de trabajar en una amplia variedad de proyectos web, tanto dependientes como independientes. A lo largo de mi trayectoria, he colaborado en proyectos que requerían integración con sistemas existentes y dependían de flujos de trabajo específicos. Además, he tenido la oportunidad de trabajar en proyectos independientes donde he tenido la libertad creativa y técnica para desarrollar soluciones personalizadas. Estas experiencias me han permitido adquirir un conocimiento profundo de la industria del desarrollo de software y me han brindado la capacidad de adaptarme a diferentes entornos y requisitos. Cada proyecto ha sido un desafío emocionante y una oportunidad de aprendizaje invaluable que ha enriquecido mi carrera como profesional en el desarrollo web.
      </p>
      <div className='grid sm:grid-cols-3 gap-12'>
        <ProjectItem img={projectDasboard} title='Tecsiplus' stack="PHP"/>
        <ProjectItem img={projectgr} title='NVOCC' stack="PHP"/>
        <ProjectItem img={onbreak} title='OnBreak' stack=".NET/WPF"/>
        <ProjectItem img={crudLaravel} title='CRUD' stack="PHP/Laravel"/>
        <ProjectVideo src="https://www.youtube.com/embed/99F8ECxG5pc"/>
        <ProjectVideo src="https://www.youtube.com/embed/JtnpPgmwH9M"/>
      </div>


    </div>
  )
}

export default Proyects