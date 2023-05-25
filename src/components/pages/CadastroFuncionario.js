import CadastroFunForm from '../pets/CadastroFunForm'
import styles from './CadastroCliente.module.css'
import { Link } from 'react-router-dom'

function CadastroFuncionario() {


   function createPost(project) {
 
        //initialize cost and servives
        project.services = []

        fetch('http://localhost:9991/funcionario', {
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
            <h1>Cadastro de Funcionario</h1>
            <p>Digite as informações para um novo funcionario</p>
            <CadastroFunForm handleSumit={createPost} btnText="Cadastrar" />
            <Link to="/FuncionarioLista">Lista de funcionario cadastrados</Link>
        </div>
    )
}

export default CadastroFuncionario