import { useEffect, useState } from 'react'


import styles from './ClienteLista.module.css'

function ListapetsCadastrados() {
  const [pets, setpets] = useState([])

  useEffect(() => {
    fetch("http://localhost:9991/pet", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setpets(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.list_container}>
      <h2>Lista de pets Cadastrados</h2>
      {pets.length === 0 ? (
        <p>Nenhum pet cadastrado.</p>
      ) : (
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>
              <p>Especie: {pet.especie}</p>
              <p>Nome: {pet.nome}</p>
              <p>Raça: {pet.raca}</p>
              <p>Cor: {pet.cor}</p>
              <p>Dono: {pet.dono.nome}</p>
              {/* <p>Código do Dono: {pet.dono}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListapetsCadastrados