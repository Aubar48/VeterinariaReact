import { useContext } from "react"
import {PacienteCard} from "./paciente-card"
import { PacienteContext } from "../context/PacientesContext"
export const ListaPacientes = () => {
 const {pacientes} = useContext(PacienteContext)
  return (
    <>
    <div className="md:w-1/2 lg:w-2/5 px-3" >
    <h2 className="font-bold text-3xl mb-10 text-center">Lista de 
    <span className="text-indigo-700 font-bold"> Pacientes</span></h2>
    <div className="overflow-y-scroll bg-white shadow-lg rounded-lg py-5 grid grid-cols-1 divide-x divide-slate-950">
    {pacientes.map(paciente=>(
     <PacienteCard key={paciente.id} paciente ={paciente}/>
    ))}
    </div>
    </div>
    </>
  )
}
