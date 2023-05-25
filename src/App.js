import {  Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home'
import CadastroPet from './components/pages/CadastroPet'
import CadastroCliente from './components/pages/CadastroCliente'
import CadastroFuncionario from './components/pages/CadastroFuncionario'
import Login from './components/pages/Login'
import Serviços from './components/pages/Serviços'
import ClienteLista from './components/listas/ClienteLista'
import FuncionarioLista from './components/listas/FuncionarioLista'
import PetLista from './components/listas/PetLista'
import ServicoLista from './components/listas/ServicoLista'

import Container from './components/layout/Conteiner'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <BrowserRouter> 
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path= "/" element={<Home/>}/> 
            <Route path= "/CadastroPet" element={<CadastroPet/>}/> 
            <Route path= "/CadastroCliente" element={<CadastroCliente/>}/> 
            <Route path= "/CadastroFuncionario" element={<CadastroFuncionario/>}/>    
            <Route path= "/Login" element={<Login/>}/> 
            <Route path= "/Serviços" element={<Serviços/>}/>
            <Route path= "/ClienteLista" element={<ClienteLista/>}/>
            <Route path= "/FuncionarioLista" element={<FuncionarioLista/>}/>
            <Route path= "/PetLista" element={<PetLista/>}/>
            <Route path= "/ServicoLista" element={<ServicoLista/>}/>
          </Routes>
        </Container>

      <Footer />
    </BrowserRouter>
  )
}

export default App;
