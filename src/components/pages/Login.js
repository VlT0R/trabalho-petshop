import LoginForm from '../pets/LoginForm'
import styles from './CadastroCliente.module.css'

function Login() {
    return (
        <div className={styles.cadastro_container}>
            <h1>Efetuar Login</h1>
            <p>Entre com sua conta para acessar seus dados</p>
            <LoginForm btnText="Logar"/>
        </div>
    )
}

export default Login