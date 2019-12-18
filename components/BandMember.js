import bandMembers from '../public/musicians.js';

const BandMember = (props) => {
    const person = props.viewPerson;
    
    if (typeof props.viewPerson === 'number') {
        return (
            <div className="individual">
                <button onClick={props.close}>&#10005;</button>
                <h2>{bandMembers[person].musician}</h2>
                <img src={bandMembers[person].photo}/>
                <p>{bandMembers[person].description}</p>
                <style jsx>{`
                .individual {
                    position: fixed;
                    height: calc(100vh - 2rem);
                    width: calc(100vw - 4rem);
                    max-width: 800px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(45deg,#ef447e,#f69d1a);
                    padding: 0 1rem;
                    text-align: left;
                    display: grid;
                    grid-template-areas: "close" "photos" "person" "description";
                    grid-template-rows: 70px 3fr 1fr 5fr;
                    grid-template-columns: 100%;
                    z-index: 11;
                }
                .individual button, .individual img, .individual h2, .individual p {
                    color: #222;
                }
                .individual button {
                    grid-area: close;
                    font-size: 1.6rem;
                }
                .individual button:hover {
                    cursor: pointer;
                }
                .individual img {
                    grid-area: photos;
                    width: 100%;
                    max-height: 100%;
                    object-fit: cover;
                    object-position: top;
                    opacity: .8;
                }
                .individual h2 {
                    grid-area: person;
                }
                .individual p {
                    grid-area: description;
                    margin-top: 0;
                    overflow-y: scroll;
                }
                button {
                    border: none;
                    background: transparent;
                }
                @media only screen and (min-width: 30em) {
                    .individual {
                        grid-template-rows: 70px 5fr 1fr 3fr;
                    }
                    .individual p {
                        position: relative;
                        top: -.5rem;
                    }
                }
                @media only screen and (orientation: landscape) {
                    .individual {
                        grid-template-rows: 70px 2fr 2fr;
                        grid-template-columns: 50% 50%;
                        column-gap: 1rem;
                        grid-template-areas: "close close" "photos description" "person description";
                    }
                    .individual h2 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .individual p {
                        padding: 0 1rem 1rem 0;
                    }
                }
                `}</style>
            </div>
        )
    } else {
        return null;
    }
}

export default BandMember;