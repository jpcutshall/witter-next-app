import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import axios  from 'axios';
import styles from '../styles/Login.module.css';

interface Props {
    
}

const url = 'http://localhost:5000/user/login'


const Login = (props: Props) => {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const { setUserName, setUserId, setUserRole, setUserToken } = useContext(UserContext)

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const data = {
            username: inputUsername,
            password: inputPassword
        }
        
        try {
            const res = await axios.post(url, data)
            setUserName(res.data.user.username);
            setUserId(res.data.user.id)
            setUserRole(res.data.user.role)
            setUserToken(res.data.token)
            console.log(res.data.user)
        } catch (err) {
            console.error(err)
        }
    }

    const handlePassChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputPassword(e.currentTarget.value)
       
    }

    const handleUserChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputUsername(e.currentTarget.value)
       
    }

    return (
        <div className={styles.container}>
            <h1><em>Login</em></h1>
            <form onSubmit={handleSubmit} className={styles.form} >
                <input 
                    type="text" 
                    placeholder="Username"
                    className={styles.input}
                    value={inputUsername} 
                    onChange={handleUserChange} 
                    name="username" 
                    id="username" />

                <input 
                    className={styles.input} 
                    placeholder="Password"
                    type="password" 
                    value={inputPassword} 
                    onChange={handlePassChange} 
                    name="password" 
                    id="password" />

                <input className={styles.button} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
