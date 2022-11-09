import {Link} from "react-router-dom"
import useAuth  from "../hooks/useAuth"
import useProyectos from "../hooks/useProyectos"
import Busqueda from "./Busqueda"


const header = () => {

    const {cerrarSesionAuth } = useAuth()
    const { handleBuscador, cerrarSesionProyectos} = useProyectos()

    const handleCerrarSesion = ()=>{
        cerrarSesionAuth()
        cerrarSesionProyectos()
        localStorage.removeItem('token')
    }


  return (
    <header className="px-4 py-5 bg-gray-800 border-b"> 

        <div className="md:flex md:justify-between">

            <h2 className="text-4xl text-yellow-300 font-black text-center mb-5 md:mb-0">
                TaskManager
            </h2>

        
             <div className="flex flex-col md:flex-row items-center gap-4">

                <button
                    type="button"
                    className="text-white font-bold uppercase"
                    onClick={handleBuscador}

                >Buscar Proyecto</button>
                <Link 
                    to="/proyectos"
                    className="text-white font-bold uppercase"
                >Proyectos</Link>

                <button
                    type="button"
                    className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
                    onClick ={handleCerrarSesion}

                >Cerrar Sesion</button>

                <Busqueda />

             </div>

        </div>

    </header>
  )
}

export default header