import bandMembers from '../public/musicians.js';

const BandMember = (props) => {
    const person = props.viewPerson;
    console.log(props);
    
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
                    top: 1rem;
                    left: 1rem;
                    background: linear-gradient(45deg,#ef447e,#FFC107);
                    padding: 0 1rem;
                    text-align: left;
                    display: grid;
                    grid-template-areas: "close" "photos" "person" "description";
                    grid-template-rows: 1fr 3fr 1fr 5fr;
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
                .individual img {
                    grid-area: photos;
                    width: 100%;
                    height: 100%;
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
                }
                `}</style>
            </div>
        )
    } else {
        return null;
    }
}

export default BandMember;