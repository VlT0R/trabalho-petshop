import { useEffect, useState } from 'react'


import styles from './ClienteLista.module.css'

function ListadonosCadastrados() {
  const [donos, setdonos] = useState([])

  useEffect(() => {
    fetch("http://localhost:9991/dono", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setdonos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.list_container}>
      <h2>Lista de donos Cadastrados</h2>
      {donos.length === 0 ? (
        <p>Nenhum dono cadastrado.</p>
      ) : (
        <ul>
          {donos.map((dono, index) => (
            <li key={index}>
              <p>Nome: {dono.nome}</p>
              <p>Endereço: {dono.endereco}</p>
              <p>Telefone: {dono.telefone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListadonosCadastrados