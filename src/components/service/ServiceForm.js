import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './ServiceForm.module.css'

function ServiceForm( { handleSubmit, btnText, projectData} ){

    const[service, setService] = useState([])

    function submit(e){
        e.preventDefault()
        projectData.service.push(service)
        handleSubmit(projectData)
    }
    function handleChange (e) {
        setService({...service, [e.target.name]: e.target.value})
    }


    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome do pet"
            name="namepet"
            placeholder="Insira o nome pet"
            handleOnChange={handleChange}
            /> 
            <Input 
            type="text"
            text="Nome do dono"
            name="namedono"
            placeholder="Insira o nome dono"
            handleOnChange={handleChange}
            />
            <Input 
            type="text"
            text="Nome do funcionario"
            name="namefuncionario"
            placeholder="Insira o nome do funcionario"
            handleOnChange={handleChange}
            />
            <Input 
            type="text"
            text="Nome do serviço"
            name="nameservico"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
            />
            <Input 
            type="number"
            text="Custo do serviço"
            name="cost"
            placeholder="Insira o valor do serviço"
            handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm