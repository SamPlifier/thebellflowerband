import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import { useState } from 'react';
import Image from 'next/image';

const Media = () => {
    const [posterNum, setPosterNum] = useState(1);
    const posterCycle = (num) => {
        if (num === 4) {
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
                <div className="songs">
                    <div className="audioContainer">
                        <p className="song"><span className="number">1.</span> Changes On The Way</p>
                        <div className="audio">
                            <audio src={'/audio/01 - Changes On The Way - Changes On The Way.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">2.</span> Feeling You</p>
                        <div className="audio">
                            <audio src={'/audio/02 - Changes On The Way - Feeling You.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">3.</span> Blowing The Wind</p>
                        <div className="audio">
                            <audio src={'/audio/03 - Changes On The Way - Blowing The Wind.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">4.</span> Looking For The One</p>
                        <div className="audio">
                            <audio src={'/audio/04 - Changes On The Way - Looking For The One.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">5.</span> Candy Crunch</p>
                        <div className="audio">
                            <audio src={'/audio/05 - Changes On The Way - Candy Crunch.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">6.</span> Kind Of Like Jolene</p>
                        <div className="audio">
                            <audio src={'/audio/06 - Changes On The Way - Kind Of Like Jolene.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">7.</span> Bradford Pear</p>
                        <div className="audio">
                            <audio src={'/audio/07 - Changes On The Way - Bradford Pear.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">8.</span> Fire To The Feast</p>
                        <div className="audio">
                            <audio src={'/audio/08 - Changes On The Way - Fire To The Feast.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">9.</span> What Is Love</p>
                        <div className="audio">
                            <audio src={'/audio/09 - Changes On The Way - What Is Love.mp3'} controls></audio>
                        </div>
                    </div>
                    <div className="audioContainer">
                        <p className="song"><span className="number">10.</span> To The End</p>
                        <div className="audio">
                            <audio src={'/audio/10 - Changes On The Way - To The End.mp3'} controls></audio>
                        </div>
                    </div>
                </div>

                <h2>MUSIC VIDEOS</h2>
                <div className="videosContainer">
                    <div className="videoContainer">
                        <p>Let You Go</p>
                        <div className="loading">Loading</div>
                        <div><iframe src="https://www.youtube.com/embed/FlzUDro5yYg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    </div>
                    <div className="videoContainer">
                        <p>I'll Show Up Tonight</p>
                        <div className="loading">Loading</div>
                        <div><iframe src="https://www.youtube.com/embed/K9ap2fFgkvs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    </div>
                </div>

                <h2>LIVE PERFORMANCES</h2>
                <div className="videosContainer">
                    <div className="videoContainer">
                        <p>SPARKcon Music Festival</p>
                        <div className="loading">Loading</div>
                        <div><iframe src="https://www.youtube.com/embed/Ofv5mz3Jvak" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    </div>
                    <div className="videoContainer">
                        <p>Carrboro Music Festival</p>
                        <div className="loading">Loading</div>
                        <iframe src="https://www.youtube.com/embed/M_JR38PYAgs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="videoContainer">
                        <p>WHUP Radio</p>
                        <div className="loading">Loading</div>
                        <iframe src="https://www.youtube.com/embed/Ojt7JEuhWyM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <h2>POSTERS</h2>
                <div className="postersContainer">
                    <Image className="poster" src={`/bellflowerPoster${posterNum}.jpg`} layout="fill" objectFit="contain" onClick={() => {posterCycle(posterNum)}}/>
                </div>

                
                <style jsx>{`
                    /* prefixed by https://autoprefixer.github.io (PostCSS: v7.0.23, autoprefixer: v9.7.3) */

                    .container {
                            z-index: 2;
                        }
                    iframe {
                        width: calc(100vw - 2.1rem);
                        height: calc(56.25vw - 2.1rem);
                        border-bottom: 2px solid var(--main-orange);
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
                    .videosContainer {
                        display: flex;
                        flex-direction: column;
                    }
                    .videoContainer {
                        display: flex;
                        flex-direction: column;
                        margin: 4rem 0;
                        position: relative;
                        width: 100%;
                        height: calc(56.25vw - 2rem);
                    }
                    .videoContainer p {
                        position: absolute;
                        top: -5.5rem;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 100%;
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
                        width: calc(100vw - 2.2rem);
                        height: calc(56.25vw - 2rem);
                        position: absolute;
                        color: #222;
                        z-index: 1;
                    }
                    .audioContainer {
                        border-bottom: 2px solid #f89e00;
                        margin-bottom: 1rem;
                        position: relative;
                        width: 100%;
                        display: inline-flex;
                        flex-wrap: wrap;
                    }
                    .audioContainer p {
                        margin: 0;
                        display: inline;
                    }
                    .songs {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    .audio {
                        display: flex;
                        justify-content: center;
                        background: #f1f3f4;
                        filter: invert(100%);
                        opacity: .7;
                        width: 100%;
                        padding-top: 1.5rem;
                    }
                    audio {
                        width: 100%;
                    }
                    .song {
                        position: absolute;
                        z-index: 2;
                        color: #f89e00;
                        left: 2rem;
                        top: 0rem;
                    }
                    .number {
                        color: #c1c1c1;
                    }
                    .postersContainer {
                        position: relative;
                        height: 600px;
                        margin-bottom: 4rem;
                    }
                    @media only screen and (min-width:768px) {
                        iframe, .loading {
                            width: 100%;
                            height: calc((56.25vw - 1rem) / 2);
                            max-height: 306px;
                        }
                        .loading {
                            left: 0;
                            top: 0;
                        }
                        .videosContainer {
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                        .videoContainer {
                            width: calc(50% - 1rem);
                            height: calc((56.25vw - 1rem) / 2);
                            max-height: 306px;
                        }
                        .videoContainer:nth-child(odd) {
                            margin-right: 1rem;
                        }
                        .videoContainer:nth-child(even) {
                            margin-left: 1rem;
                        }
                        .audioContainer {
                            width: calc(50% - 1rem);
                        }
                    }
                    `}</style>
            </section>
        </StyleBase>
    )
}

export default Media;