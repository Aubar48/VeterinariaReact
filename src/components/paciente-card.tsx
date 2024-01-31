import { Paciente } from "../context/PacientesContext"


export const PacienteCard=({
    paciente: {mascota,duenio,raza,email},
}:{
    paciente:Paciente})=>{

  return (
    <div className="bg-white shadow-sm px-5 rounded mb-3 mx-3 text-black font-bold grid grid-cols-1 divide-y"> 
     <p>Mascota: <span className="text-indigo-700 font-bold">{mascota}</span></p> 
     <p>Dueño: <span className="text-indigo-700 font-bold">{duenio}</span></p> 
     <p>Raza: <span className="text-indigo-700 font-bold">{raza}</span></p> 
     <p>Email: <span className="text-indigo-700 font-bold">{email}</span></p>
     </div>
  )
}

