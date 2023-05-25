import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './LoginForm.module.css'

function LoginForm( {btnText} ) {
    return (
        <form className={styles.form}>
            <Input type="text" text="Login" name="name" placeholder="Digite seu login"/>
            <Input type="password" text="Senha" name="password" placeholder="Digite sua senha"/>
            <SubmitButton text={btnText} />
        </form>
    ) 
}

export default LoginForm