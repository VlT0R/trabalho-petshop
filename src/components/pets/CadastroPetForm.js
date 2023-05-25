import { useEffect, useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './CadastroPetForm.module.css'

function CadastroPetForm({ handleSumit, btnText, projectData}) {
    const [project, setProject] = useState(projectData || {})
    const [dono, setDono] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:9991/dono/${project.dono}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            },
        })
       
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setDono(data)
        })
        .catch((err) => console.log(err))
    }, [project.dono])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSumit(project)
        alert("Operação concluída com sucesso!");   
        resetForm({}) 
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function resetForm(obj) {
        setProject(obj) // Reseta o estado para o objeto passado como parâmetro
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Nome" name="nome" value={project.nome ||''} placeholder="Digite o nome" handleOnChange={handleChange}/>
            <Input type="text" text="Especie" name="especie" value={project.especie ||''}placeholder="Digite a especie" handleOnChange={handleChange}/>
            <Input type="text" text="Raça" name="raca" value={project.raca ||''} placeholder="Digite a raça"  handleOnChange={handleChange}/>
            <Input type="text" text="Cor" name="cor" value={project.cor ||''} placeholder="Digite a cor" handleOnChange={handleChange}/>
            <Input type="text" text="Código do Dono" name="dono" value={project.dono||''} placeholder="Código do dono" handleOnChange={handleChange}/>
            {dono && (
                <div>
                    <h2>Informações do Dono:</h2>
                    <p>Código Dono : {dono.id}</p>
                    <p>Nome: {dono.nome}</p>
                    <p>Telefone: {dono.telefone}</p>
                    {/* Exibir mais informações do dono, se necessário */}
                </div>
            )}
            <SubmitButton text={btnText} />
        </form>
    ) 
}

export default CadastroPetForm