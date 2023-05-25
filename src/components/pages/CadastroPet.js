import CadastroPetForm from '../pets/CadastroPetForm'
import styles from './CadastroCliente.module.css'
import { Link } from 'react-router-dom'


function CadastroPet() {
  const createPost = (project) => {
    project.services = []
    fetch('http://localhost:9991/pet', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log(err));
}

  return (
    <div className={styles.cadastro_container}>
      <h1>Cadastro de Pet</h1>
      <p>Digite suas informações do seu pet</p>
      <CadastroPetForm handleSubmit={createPost} btnText="Cadastrar" />
      <Link to="/PetLista">Lista de pet cadastrados</Link>
    </div>
  )
}

export default CadastroPet