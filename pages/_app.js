import React from 'react'
import App from 'next/app';
import StyleBase from '../components/StyleBase';
import Header from '../components/Header';
import nextrouter from 'next/router';

class BellflowerApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
                <StyleBase>
                    <Header />
                    <Component {...pageProps} />
                </StyleBase>
        )
    }
}

export default BellflowerApp;