import React, { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Login.module.css'

interface Props {
    
}

const url = 'http://localhost:5000/user/register'

const Register = (props: Props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const data = {
            username,
            password,
            bio
        }
        
        console.log(data)

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

    const handlePassCheckChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPasswordCheck(e.currentTarget.value)
    }

    const handleBioChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setBio(e.currentTarget.value)
    }

    return (
        <div className={styles.container}>
            <h1><em>Register</em></h1>
            <form onSubmit={handleSubmit} className={styles.form} >
                <input 
                    type="text"
                    className={styles.input} 
                    placeholder="Username"
                    value={username} 
                    onChange={handleUserChange} 
                    name="username" 
                    id="username" />

                <input 
                    type="password"
                    className={styles.input}
                    placeholder="Password" 
                    value={password} 
                    onChange={handlePassChange} 
                    name="password" 
                    id="password" />

                <input 
                    type="password"
                    className={styles.input}
                    placeholder="Password Check" 
                    value={passwordCheck} 
                    onChange={handlePassCheckChange} 
                    name="passwordCheck" 
                    id="passwordCheck" />

                <textarea 
                    value={bio}
                    className={styles.input} 
                    placeholder="Bio"
                    onChange={handleBioChange} 
                    name="bio" id="bio" cols={30} 
                    rows={10}></textarea>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Register
