import bandMembers from '../public/musicians.js';

const BandMember = (props) => {
    const person = props.viewPerson;
    
    if (typeof props.viewPerson === 'number') {
        return (
            <div className="individual">
                <div className="individual__container">
                <button onClick={props.close} className="close">&#10005;</button>
                <h2>{bandMembers[person].musician}</h2>
                <img src={bandMembers[person].photo}/>
                <p>{bandMembers[person].description}</p>
                </div>
                <style jsx>{`
                .individual {
                    align-items: center;
                    background: #333333f2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 11;
                }
                .individual__container {
                    background: linear-gradient(45deg,#ef447e,#f69d1a);
                }
                .individual__container img {
                    width: calc(100% - 30px);
                }
                .individual__container p {
                    margin: 30px 15px;
                }
                .individual__container button {
                    margin-top: 30px;
                    background: unset;
                    border: unset;
                }
                .individual__container button:hover {
                    cursor: pointer;
                }
                `}</style>
            </div>
        )
    } else {
        return null;
    }
}

export default BandMember;