import { FunctionComponent } from 'react';
import Head from "next/head";
import Nav from './Nav';
import Footer from './Footer';

interface Props {
    children: any
}

const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Head>
                <title>Witter</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="keywords" content="Witter, wisdom, sharing, free" />
                <meta name="description" content="Witter is like twitter but not. Share Wisdom and Ideas freely with your subscribers." />
            </Head>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;