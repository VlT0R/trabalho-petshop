import styles from './ServiceForm.module.css'

function ServiceCard(id, namepet, namedono, namefuncionario, nameservico, cost, removeService){
    return(
        <div className={styles.project_card}>
            <h4>{namepet} </h4> 
        </div>
    )
}

export default ServiceCard