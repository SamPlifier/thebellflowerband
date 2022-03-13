import { useState } from 'react';
import StyleBase from '../components/StyleBase';


const ViewAlbumSides = (props) => {
    let album = props.album;
    const [inView, setInView] = useState('front');
    const updateInView = (view) => {
            setInView(view);
            document.getElementsByClassName(view)[0].classList.add('active');
    }
    return (
        <StyleBase>
            <section>
                <div className="album-container">
                    <div className="album-controls">
                            <button className={`front ${inView === 'front' ? 'active' : ''}`} onClick={() => {updateInView('front')}}>Front</button>
                            <button className={`back ${inView === 'back' ? 'active' : ''}`} onClick={() => {updateInView('back')}}>Back</button>
                            <button className={`left ${inView === 'left' ? 'active' : ''}`} onClick={() => {updateInView('left')}}>Inside Left</button>
                            <button className={`right ${inView === 'right' ? 'active' : ''}`} onClick={() => {updateInView('right')}}>Inside Right</button>
                        </div>
                    <div className="album-side">
                        <img src={`/albums/${album}/album-${inView}.png`} />
                    </div>
                </div>
            </section>
            <style jsx>{`
            button {
                color: var(--main-orange);
                font-family: 'BenchNine',sans-serif;
                text-decoration: underline;
                font-size: 4rem;
                text-decoration-thickness: 2px;
                text-decoration-color: #fff;
                text-underline-offset: 2px;
                background: none;
                border: none;
            }
            button:hover {
                cursor: pointer;
            }
            button.active {
                color: #fff;
            }
            .album-controls {
                display: grid;
                grid-template-areas: "front back"
                             "left right";
                grid-template-rows: auto;
                grid-template-columns: 50%;
                grid-row-gap: 1rem;
                grid-column-gap: 1rem;
                margin: 2rem auto;
            }
            .front {
                grid-area: front;
                text-align: right;
            }
            .back {
                grid-area: back;
                text-align: left;
            }
            .left {
                grid-area: left;
                text-align: right;
            }
            .right {
                grid-area: right;
                text-align: left;
            }
            .album-side {
                display: flex;
            }
            .album-side img {
                width: 100%;
            }

            @media (min-width: 767px) {
                .albumContainer {

                }
                .album-side img {
                    max-width: 600px;
                    margin: 0 auto;
                }
            }
            `}</style>
        </StyleBase>
    )
}

export default ViewAlbumSides;