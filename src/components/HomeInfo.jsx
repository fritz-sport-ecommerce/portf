import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hola, soy
        <span className='font-semibold mx-2 text-white'>Christian Lozano</span>
        👋
        <br />
        Programador de Software 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Trabajó con muchas empresas. <br /> y adquirí muchas habilidades en el camino
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
        Más información

          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          
Lideró múltiples proyectos hacia el éxito a lo largo de los años. <br /> 
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
        Ver portafolio

          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      ¿Necesitas realizar un proyecto o buscas un desarrollador? <br/> Estoy a sólo unas pocas teclas de distancia
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
      Contactar
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;