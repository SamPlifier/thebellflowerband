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
                    width: calc(100vw - 2rem);
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
                    box-sizing: border-box;
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
                }
                @media only screen and (orientation: landscape) {
                    .individual {
                        grid-template-rows: auto auto;
                        grid-template-columns: 50% 50%;
                        -webkit-column-gap: 1rem;
                        column-gap: 1rem;
                        grid-template-areas: "person close" "description photos";
                        padding: 1rem;
                        max-height: 28rem;
                    }
                    .individual h2 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .individual img {
                        width: calc(100% - 1rem);
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