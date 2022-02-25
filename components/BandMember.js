import bandMembers from '../public/musicians.js';
import Image from 'next/image';

const BandMember = (props) => {
    const person = props.viewPerson;
    
    if (typeof props.viewPerson === 'number') {
        return (
            <div className="individual">
                <div className="individual__container">
                <button onClick={props.close} className="close">&#10005;</button>
                <h2>{bandMembers[person].musician}</h2>
                <div className="image-container">
                <Image className="member-photo" id="image" src={`/${bandMembers[person].photo}`} layout="fill" objectFit="cover" />
                </div>
                <p className="description">{bandMembers[person].description}</p>
                </div>
                <style jsx>{`
                .individual {
                    align-items: center;
                    background: #333333f2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: fixed;
                    left: 50%;
                    top: 0;
                    transform: translateX(-50%);
                    margin: 0 auto;
                    height: 100vh;
                    width: 100vw;
                    z-index: 11;
                }
                .individual__container {
                    background: linear-gradient(45deg,#ef447e,var(--main-orange));
                    padding: 0 2rem;
                    max-height: 100vh;
                    max-width: 600px;
                    overflow: scroll;
                }
                .individual__container button, .individual__container h2, .individual__container p {
                    color: #333;
                } 
                .individual__container button {
                    margin-top: 30px;
                    background: unset;
                    border: unset;
                }
                .description {
                    text-align: justify;
                }
                .individual__container button:hover {
                    cursor: pointer;
                }
                .image-container {
                    opacity: .75;
                    filter: grayscale(.8);
                    display: block;
                    position: relative;
                    width: 100%;
                    height: 350px;
                    max-width: 400px;
                    margin: 0 auto;
                }
                `}</style>
            </div>
        )
    } else {
        return null;
    }
}

export default BandMember;