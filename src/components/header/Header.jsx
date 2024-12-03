import logo from "../../assets/logo.png"
import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <nav>
                <ul className={styles.navigation}>
                    <li className={styles.item}><a className={styles.link} href="#">Home</a></li>
                    <li className={styles.item}><a className={styles.link} href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}