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
            <section>
                <h2>VIDEO</h2>
                <p>SPARKcon Music Festival</p>
                <div className="videoContainer">
                    <div className="loading">Loading</div>
                    <iframe src="https://www.youtube.com/embed/Ofv5mz3Jvak" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    iframe {
                    width: calc(100vw - 2rem);
                    height: calc(56.25vw - 2rem);
                    border: 2px solid #f29a2f;
                    display: flex;
                    justify-content: center;
                    z-index: 2;
                    }
                    .videoContainer {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin: 2rem 0;
                    }
                    .loading {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: calc(100vw - 2rem);
                        height: calc(56.25vw - 2rem);
                        position: absolute;
                        background: #f29a2f;
                        color: #222;
                        z-index: 1;
                    }
                    audio {
                        width: 100%;
                        border-radius: 30px;
                        border: 2px solid #f29a2f;
                    }
                    .poster {
                        width: 100%;v bv  b bv vbvv 
                    }
                    `}</style>
            </section>
        </StyleBase>
    )
}

export default Media;