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
                        <button className={`front ${inView === 'front' ? 'active' : ''}`} onClick={() => {updateInView('front')}}>Front<br/>Cover</button>
                        <button className={`back ${inView === 'back' ? 'active' : ''}`} onClick={() => {updateInView('back')}}>Back<br/>Cover</button>
                        <button className={`left ${inView === 'left' ? 'active' : ''}`} onClick={() => {updateInView('left')}}>Inside<br/>Left</button>
                        <button className={`right ${inView === 'right' ? 'active' : ''}`} onClick={() => {updateInView('right')}}>Inside<br/>Right</button>
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
                margin: 2rem 0;
            }
            .active {
                color: #f29a2f;
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
            .album-container {
 
            }
            img {
                width: 100%;
            }
            `}</style>
        </StyleBase>
    )
}

export default ViewAlbumSides;