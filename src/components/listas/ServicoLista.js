import { useEffect, useState } from 'react'


import styles from './ClienteLista.module.css'

function ListaservicosCadastrados() {
  const [servicos, setservicos] = useState([])

  useEffect(() => {
    fetch("http://localhost:9991/servico", {
      method: "GET",
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setservicos(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={styles.list_container}>
      <h2>Lista de servicos Cadastrados</h2>
      {servicos.length === 0 ? (
        <p>Nenhum servico cadastrado.</p>
      ) : (
        <ul>
          {servicos.map((servico, index) => (
            <li key={index}>
              <p>Tipo de serviço: {servico.tipo}</p>
              <p>Pet: {servico.pet.nome}</p>
              <p>Funcionario: {servico.funcionario.nome}</p>
              <p>Preço: {servico.preco}</p>
              <p>Data Hora: {servico.data_hora}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListaservicosCadastrados