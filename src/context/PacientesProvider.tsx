import { Paciente, PacienteContext } from './PacientesContext';
import { PropsWithChildren, useState } from 'react';

export const PacientesProvider = ({children} : PropsWithChildren) =>{
    const[pacientes, setPacientes] = useState<Paciente[]>([])
    const agregarPaciente = (paciente : Paciente) =>{
        setPacientes((prev: Paciente[]) => {
            return [...prev, paciente];
          });
    }
    return(
    <PacienteContext.Provider value={{
        pacientes,
        agregarPaciente
    }}>
        {children}
    </PacienteContext.Provider>
)}