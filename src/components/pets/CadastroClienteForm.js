import { useEffect, useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './CadastroClienteForm.module.css'

function CadastroClienteForm({ handleSumit, btnText, projectData}) {
    const [project, setProject] = useState(projectData || {})


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
                setProject(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSumit(project)
        alert("Operação concluída com sucesso!");   
        resetForm() 
    }



    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }
    function resetForm() {
        setProject({}) // Reseta o estado para um objeto vazio
      }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome" name="nome" value={project.nome ||''} placeholder="Digite o nome" handleOnChange={handleChange} />
            <Input type="text" text="Endereço" name="endereco" value={project.endereco ||''} placeholder="Digite o endereço" handleOnChange={handleChange} />
            <Input type="tel" text="telefone" name="telefone" value={project.telefone||''} placeholder="Telefone com o DDD" handleOnChange={handleChange} />
            <SubmitButton text={btnText} /> 
        </form>
    )
}

export default CadastroClienteForm