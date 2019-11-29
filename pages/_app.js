import React from 'react'
import App from 'next/app';
import Header from '../components/Header';
import StyleBase from '../components/StyleBase';
import Footer from '../components/Footer';


class BellflowerApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
                <StyleBase>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </StyleBase>
        )
    }
}

export default BellflowerApp;