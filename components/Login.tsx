import React, { useState } from 'react'
import axios  from 'axios';
import styles from '../styles/Login.module.css'

interface Props {
    
}

const url = 'http://localhost:5000/user/login'


const Login = (props: Props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const data = {
            username,
            password
        }
        
        try {
            const res = await axios.post(url, data)
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    const handlePassChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.currentTarget.value)
       
    }

    const handleUserChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setUsername(e.currentTarget.value)
       
    }

    return (
        <div className={styles.container}>
            <h1><em>Login</em></h1>
            <form onSubmit={handleSubmit} className={styles.form} >
                <input 
                    type="text" 
                    placeholder="Username"
                    className={styles.input}
                    value={username} 
                    onChange={handleUserChange} 
                    name="username" 
                    id="username" />

                <input 
                    className={styles.input} 
                    placeholder="Password"
                    type="password" 
                    value={password} 
                    onChange={handlePassChange} 
                    name="password" 
                    id="password" />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
