import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-32 h-10 rounded-1g bg-white px-2 rounded-[10px] py-5 items-center text-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">CHRISTIAN</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to ="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Portafolio
            </NavLink>
            <NavLink to ="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Proyectos
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar