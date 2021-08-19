import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from '../../styles/Nav.module.css'

interface Props {

}

const Nav: FunctionComponent = (props: Props) => {
    return (
        <nav className={styles.container} >
        
            <Link href="/" >
                <a className={styles.links} >Home</a>
            </Link>
    
            <Link href="/about">
                <a className={styles.links} >About</a>
            </Link>
    
            <Link href="/login">
                <a className={styles.links} >Login</a>
            </Link>
                
        </nav>
    )
}

export default Nav
