import { Link } from 'react-router-dom'

import Container from './Conteiner'

import styles from './Navbar.module.css'
import logo from '../../img/logo.svg'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="PetShop" className={styles.logo_small} /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/CadastroPet">CadastroPet</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/CadastroCliente">CadastroCliente</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/CadastroFuncionario">CadastroFuncionario</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Serviços">Serviços</Link>
                    </li> 
                </ul>
            </Container>
        </nav>
    )
}   

export default Navbar