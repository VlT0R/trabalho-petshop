import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
            </ul>
            <p className={styles.copy_right}><span>PetShop</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer