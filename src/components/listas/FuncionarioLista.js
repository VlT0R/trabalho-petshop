import { useEffect, useState } from 'react'


import styles from './ClienteLista.module.css'

function ListafuncionariosCadastrados() {
  const [funcionarios, setfuncionarios] = useState([])

  useEffect(() => {
    fetch("http://localhost:9991/funcionario", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setfuncionarios(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.list_container}>
      <h2>Lista de funcionarios Cadastrados</h2>
      {funcionarios.length === 0 ? (
        <p>Nenhum funcionario cadastrado.</p>
      ) : (
        <ul>
          {funcionarios.map((funcionario, index) => (
            <li key={index}>
              <p>Nome: {funcionario.nome}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListafuncionariosCadastrados