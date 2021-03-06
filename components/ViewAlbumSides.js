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
                <img src=""/>
                <img className="icon" src={require(`../public/albums/${album}/album-${inView}.png`)} />
                    <div className="album-controls">
                        <button className={`front ${inView === 'front' ? 'active' : ''}`} onClick={() => {updateInView('front')}}>Front Cover</button>
                        <button className={`back ${inView === 'back' ? 'active' : ''}`} onClick={() => {updateInView('back')}}>Back Cover</button>
                        <button className={`left ${inView === 'left' ? 'active' : ''}`} onClick={() => {updateInView('left')}}>Inside Left</button>
                        <button className={`right ${inView === 'right' ? 'active' : ''}`} onClick={() => {updateInView('right')}}>Inside Right</button>
                    </div>
                </div>
            </section>
            <style jsx>{`
            .album-controls {
                display: grid;
                grid-template-areas: "front back"
                             "left right";
                grid-template-rows: "3rem 3rem";
                grid-template-columns: "50% 50%";
                grid-row-gap: 2rem;
                grid-column-gap: 2rem;
                margin: 2rem 0;
            }
            .album-controls button {
                border: 2px solid #fff;
                padding: 1rem;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #f69d1a;
                color: #222;
                transition: background ease .5s;
            }
            .album-controls button.active {
                background: #fff;
            }
            .front {
                grid-area: front;
            }
            .back {
                grid-area: back;
            }
            .left {
                grid-area: left;
            }
            .right {
                grid-area: right;
            }

            img {
                width: 100%;
            }
            `}</style>
        </StyleBase>
    )
}

export default ViewAlbumSides;