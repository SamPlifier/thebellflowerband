import React from 'react'
import App from 'next/app';
import Header from '../components/Header';
import StyleBase from '../components/StyleBase';
import Footer from '../components/Footer';
import Head from 'next/head';
import icon from '../public/bellflower_favicon.ico';

class BellflowerApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
                <StyleBase>
                    <Head>
                        <meta
                          name="viewport"
                          content="initial-scale=1.0, width=device-width"
                          key="viewport"
                        />
                        <link rel="shortcut icon" type="icon" href={icon} />
                    </Head>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </StyleBase>
        )
    }
}

export default BellflowerApp;