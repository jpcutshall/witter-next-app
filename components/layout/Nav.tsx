import Link from 'next/link';
import styles from '../../styles/Nav.module.css'

interface Props {

}

const Nav = (props: Props) => {
    return (
        <nav className={styles.container} >
        
            <Link href="/" >
                <a className={styles.links} >Home</a>
            </Link>
    
            <Link href="/about">
                <a className={styles.links} >About</a>
            </Link>
    
            <Link href="/register">
                <a className={styles.links} >Register</a>
            </Link>
                
        </nav>
    )
}

export default Nav
