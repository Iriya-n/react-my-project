import left from "../../assets/left.svg"
import right from "../../assets/right.svg"
import styles from "./Footer.module.scss"
import { useState, useEffect } from "react"

export const Footer = ({ page, setPage }) => {
    const [currentPage, setCurrentPage] = useState(page)

    useEffect(() => {
        setPage(currentPage)
    }, [currentPage, setPage])

    const handleInputChange = (e) => {
        const value = +e.target.value
        setCurrentPage(value > 39 ? 39 : value < 1 ? 1 : value)
    }

    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.static}>
                    <a className={styles.icon} href="#" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
                        <img src={left} alt="Previous" />
                    </a>
                </li>
                <li className={styles.item}>
                    <a href="#">{currentPage}</a>
                </li>
                <li className={styles.static}>
                    <a href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, 39))}>{currentPage + 1}</a>
                </li>
                <li className={styles.static}>
                    <a href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 2, 39))}>{currentPage + 2}</a>
                </li>
                <li className={styles.static}>
                    <input placeholder="..." type="number" onChange={handleInputChange} min="1" max="39" />
                </li>
                <li className={styles.static}>
                    <a href="#">42</a>
                </li>
                <li className={styles.static}>
                    <a className={styles.icon} href="#" onClick={() => setCurrentPage(prev => Math.min(prev + 1, 39))}>
                        <img src={right} alt="Next" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
