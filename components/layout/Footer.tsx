import { FunctionComponent } from 'react'
import styles from '../../styles/Footer.module.css'

interface Props {
    
}

const Footer: FunctionComponent = (props: Props) => {
    return (
        <footer className={styles.container} >
            <p>Created by{' '} 
                <a href="https://jacobcutshall.com" target="_blank" rel="noreferrer" >
                <em>Jacob Cutshall</em></a></p>
        </footer>
    )
}

export default Footer
