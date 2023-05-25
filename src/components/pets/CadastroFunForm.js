import { useEffect, useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './CadastroFunForm.module.css'


function CadastroFunForm({ handleSumit, btnText, projectData }) {
    const [project, setProject] = useState(projectData || {})

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



            <Input type="text" text="Nome do funcionario" name="nome" value={project.nome ||''} placeholder="Digite o nome" handleOnChange={handleChange} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default CadastroFunForm