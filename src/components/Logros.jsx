import React from "react";
import WorkItem from "./WorkItem";
const Logros = () => {
  return (
    <div id="logros" className="max-w-[1400px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Logros</h1>
      <div className="flex pt-8">
        <div className="w-1/2 flex justify-center">
          <img
            src="src/assets/img/logros/devjam.png"
            alt="/"
            className="rounded-2xl w-[400px] h-[400px]"
          />
        </div>
        <div className="w-1/2 ">
          <WorkItem
            year="2020"
            title="Devjam DuocUC"
            details="Tuve el privilegio de representar a mi sede (Plaza Norte) en el encuentro de desarrolladores de videojuegos organizado por el CITT de DuocUC. Participé en la categoría GOTY y tuve la fortuna de resultar ganador del primer lugar con mi videojuego titulado 'Encuentro cercano'. \n Este videojuego fue el resultado de mucho esfuerzo y dedicación. Desarrollé de manera independiente el primer nivel del juego, trabajando en todos los aspectos, desde los modelos 3D y la escenografía del mapa, hasta las texturas, la música/sonidos y, por supuesto, la programación. Fue un desafío emocionante poder abordar todos estos aspectos del desarrollo del juego por mi cuenta. \n El primer nivel de 'Encuentro cercano' fue presentado en el evento, y recibió una excelente acogida por parte de los asistentes y los jueces. Estoy muy orgulloso del resultado final y del reconocimiento que obtuve al obtener el primer lugar en la categoría. \n Este logro me ha motivado a seguir trabajando en mi pasión por el desarrollo de videojuegos. Espero poder continuar mejorando mis habilidades y participar en futuros eventos similares para compartir y aprender de otros desarrolladores talentosos."
            subtitle="Ganador primer lugar en categoria GOTY (Game of the year)."
          />
        </div>
      </div>
      <div className="flex pt-8">
        <div className="w-1/2 flex justify-center">
          <img
            src="src/assets/img/logros/devjam.png"
            alt="/"
            className="rounded-2xl w-[400px] h-[400px]"
          />
        </div>
        <div className="w-1/2 ">
          <WorkItem
            year="2021"
            title="Devjam DuocUC"
            details="Nuevamente tuve el privilegio de representar a mi sede (Plaza Norte) en el encuentro de desarrolladores de videojuegos organizado por el CITT de DuocUC. Después de haber ganado el primer lugar en la categoría GOTY el año pasado, participé con entusiasmo en la edición de 2021, con la esperanza de mostrar mi crecimiento y habilidades mejoradas.

            Mi videojuego, titulado 'Encuentro cercano', volvió a cautivar a los asistentes y a los jueces. Desarrollé el segundo nivel del juego, y esta vez pude destacarme aún más en la creación de los modelos 3D, la escenografía, las texturas, la música/sonidos y, por supuesto, la programación. Me emocionó poder demostrar cómo había progresado desde el año anterior y entregar una experiencia aún más completa y emocionante.
            
            El nivel que presenté en el evento recibió una respuesta increíblemente positiva. Los asistentes disfrutaron de la jugabilidad, la estética visual y la atmósfera inmersiva que logré crear. Y, para mi sorpresa y alegría, fui nuevamente reconocido con el primer lugar en la categoría GOTY. Ganar dos veces consecutivas en el mismo lugar es un logro que me llena de orgullo y me impulsa a seguir mejorando en mi carrera como desarrollador de videojuegos.
            
            Este reconocimiento me ha brindado una gran motivación y confianza en mis habilidades. Me siento inspirado para seguir explorando nuevas ideas y desafíos en el mundo del desarrollo de videojuegos. Estoy emocionado por lo que el futuro me depara y espero poder seguir participando en eventos similares, donde pueda compartir y aprender de otros apasionados desarrolladores de videojuegos."
            subtitle="Ganador primer lugar en categoria GOTY (2° año consecutivo)."
          />
        </div>
      </div>
    </div>
  );
};

export default Logros;
