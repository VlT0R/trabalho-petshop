import CadastroClienteForm from '../pets/CadastroClienteForm'
import styles from './CadastroCliente.module.css'
import { Link } from 'react-router-dom'

function CadastroCliente(){
    
    function createPost(project) {
        
       
  
        //initialize cost and servives
        project.services = []

        fetch('http://localhost:9991/dono', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
              
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className={styles.cadastro_container}>
            <h1>Cadastro de Cliente</h1>
            <p>Digite suas informações</p>
            <CadastroClienteForm handleSumit={createPost} btnText="Cadastrar" />
            <Link to="/ClienteLista">Lista de clientes cadastrados</Link>
        </div> 
    )
}

export default CadastroCliente