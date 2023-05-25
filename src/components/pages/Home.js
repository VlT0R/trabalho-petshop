import styles from './Home.module.css'
import petshop from '../../img/petshop.svg'
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Pet Shop Pata Amiga</span></h1>
      <p>Crie sua conta aqui</p>
      <LinkButton to="/cadastrocliente" text="Cadastro de Cliente"/>
      <p>Ou entre con sua conta</p>
      <LinkButton to="/login" text="Login"/>
      <img src={petshop} alt="petshop"/>
    </section>
  );
}

export default Home