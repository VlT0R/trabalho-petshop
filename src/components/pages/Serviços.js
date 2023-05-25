import { v4 as uuidv4 } from 'uuid'

import { useState } from 'react'
import Container from "../layout/Conteiner"

import { Link } from 'react-router-dom'
import styles from "./Serviços.module.css"

import ServiceForm from '../service/ServiceForm'


function Serviços() {

    const [showServiceForm, setShowServiceForm] = useState(false)



    function createService(project) {

        const lastService = project.services[project.service.lenght - 1]

        lastService.id = uuidv4

        fetch(`http://localhost:9991/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    }
    


    //function removeService() { }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <div className={styles.project_datails}>
            <Container customClass="column">
                <div className={styles.details_container}>
                    <h1>Serviços
                    </h1>
                    <div className={styles.project_info}>
                        <p>
                            <span>Categorias:</span> Banho, Tosa e Banho e Tosa
                        </p>
                        <p>
                            <span>Preço:</span> R$50,00 | R$90,00 | R$120,00
                        </p> 
                    </div>
                </div>
                <div className={styles.details_container}>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um pet:</h2>
                    </div>
                    <button className={styles.btn} onClick={toggleServiceForm}>
                        {!showServiceForm ? 'Adicionar pet' : 'Fechar'}
                    </button>
                    <div className={styles.project_info}>
                        {showServiceForm && (<ServiceForm
                            handleSubmit={createService}
                            btnText="Adicionar serviço"
                        //projectData={project}
                        />)}
                    </div>
                </div> 
                <h2>Serviços</h2>
                <Container customClass="start">
                    {/*  <ServiceCard 
                        id={service.id}
                        namepet={service.namepet}
                        namedono={service.namedono}
                        namefuncionario={service.namefuncionario}
                        nameservico={service.nameservico}
                        cost={service.cost}
                        handleRemove={removeService}
                    />
                    */
                    }
                    <Link to="/ServicoLista">Lista de Serviços</Link>
                </Container>
            </Container>
        </div >
    )
}

export default Serviços