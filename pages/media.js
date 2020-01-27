import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import { useState } from 'react';

const Media = () => {
    const [posterNum, setPosterNum] = useState(1);
    const posterCycle = (num) => {
        if (num === 3) {
            setPosterNum(1);
        } else {
            setPosterNum(posterNum + 1);
        }
    }
    
    return (
        <StyleBase>
            <Head>
                <title>Media</title>
            </Head>
            <section>
                <h2>AUDIO</h2>
                <div className="audioContainer">
                    <p>Changes On The Way</p>
                    <div className="audio">
                        <audio src={'/audio/ChangesOnTheWay.mp3'} controls></audio>
                    </div>
                </div>
                <div className="audioContainer">
                    <p>What Is Love</p>
                    <div className="audio">
                        <audio src={'/audio/WhatIsLove.mp3'} controls></audio>
                    </div>
                </div>
                <div className="audioContainer">
                    <p>Blowing The Wind</p>
                    <div className="audio">
                        <audio src={'/audio/BlowingTheWind.mp3'} controls></audio>
                    </div>
                </div>
                <div className="audioContainer">
                    <p>Looking For The One</p>
                    <div className="audio">
                        <audio src={'/audio/LookingForTheOne.mp3'} controls></audio>
                    </div>
                </div>

                <h2>VIDEO</h2>
                <p>SPARKcon Music Festival</p>
                <div className="videoContainer">
                    <div className="loading">Loading</div>
                    <div><iframe src="https://www.youtube.com/embed/Ofv5mz3Jvak" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                </div>
                <p>Carrboro Music Festival</p>
                <div className="videoContainer">
                    <div className="loading">Loading</div>
                    <iframe src="https://www.youtube.com/embed/M_JR38PYAgs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <p>WHUP Radio</p>
                <div className="videoContainer">
                    <div className="loading">Loading</div>
                    <iframe src="https://www.youtube.com/embed/Ojt7JEuhWyM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <h2>POSTERS</h2>
                <img className="poster" onClick={() => {posterCycle(posterNum)}} src={require(`../public/bellflowerPoster${posterNum}.jpg`)} />
                <style jsx>{`
                    /* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.23, autoprefixer: v9.7.3) */

                    .container {
                            z-index: 2;
                        }
                        iframe {
                            width: calc(100vw - 2.1rem);
                            height: calc(56.25vw - 2.1rem);
                            border: 2px solid #f69d1a;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-pack: center;
                                -ms-flex-pack: center;
                                    justify-content: center;
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 2;
                        }
                        .videoContainer {
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-orient: vertical;
                            -webkit-box-direction: normal;
                                -ms-flex-direction: column;
                                    flex-direction: column;
                            -webkit-box-pack: center;
                                -ms-flex-pack: center;
                                    justify-content: center;
                            -webkit-box-align: center;
                                -ms-flex-align: center;
                                    align-items: center;
                            margin: 2rem 0;
                            position: relative;
                            width: calc(100vw - 2rem);
                            height: calc(56.25vw - 2rem);
                        }
                        @media only screen and (min-width:500px) {
                            .videoContainer {
                                width: calc(100vw - 6rem);
                            }
                        }
                        .loading {
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            -webkit-box-pack: center;
                                -ms-flex-pack: center;
                                    justify-content: center;
                            -webkit-box-align: center;
                                -ms-flex-align: center;
                                    align-items: center;
                            width: calc(100vw - 2rem);
                            height: calc(56.25vw - 2rem);
                            position: absolute;
                            background: #f69d1a;
                            color: #222;
                            z-index: 1;
                        }
                        .audioContainer {
                            border-bottom: 2px solid #f89e00;
                            margin-bottom: 2rem;
                        }
                        .audio {
                            display: flex;
                            justify-content: center;
                            background: #f1f3f4;
                            filter: invert(100%);
                            opacity: .7;
                        }
                        audio {
                            width: 100%;
                        }
                        .poster {
                            width: 100%;
                        }
                        @media only screen and (min-width:500px) {
                            iframe, .loading {
                                width: calc(100vw - 12rem);
                                height: calc(56.25vw - 6rem);
                            }
                            .loading {
                                left: 0;
                                top: 0;
                            }
                        }
                    `}</style>
            </section>
        </StyleBase>
    )
}

export default Media;