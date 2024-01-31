import { Header } from "./components/header"
import { ListaPacientes } from './components/listado-pacientes';
import {Formulario} from './components/formulario'
import { PacientesProvider } from './context/PacientesProvider';

function App() {

  return (
    <PacientesProvider>
    <div className="container max-auto mt-10">
    <Header/>
    <div className='mt-12 p-3 md:flex gap-5'>
    <Formulario />
    <ListaPacientes/>
    </div>
    </div>
    </PacientesProvider>
  )
}

export default App
