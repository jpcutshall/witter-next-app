import type { AppProps } from 'next/app';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { UserContext } from '../contexts/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userToken, setUserToken] = useState('');
  const obj = {
    userName,
    setUserName,
    userId,
    setUserId,
    userRole,
    setUserRole,
    userToken,
    setUserToken
  }

  return ( 
    <UserContext.Provider value={obj} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  )
}
export default MyApp
