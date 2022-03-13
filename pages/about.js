import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import { useState } from 'react';
import bandMembers from '../public/musicians.js';
import BandMember from '../components/BandMember';
import Image from 'next/image';

const About = () => {
    const [bandMember, setBandMember] = useState(false);
    const viewBandMember = (bandMember) => {
        typeof bandMember === 'number' ? setBandMember(bandMember) : setBandMember(false);
    }
    return (
        <StyleBase>
            <section>
            <h2>ABOUT THE BAND</h2>
            <div className="orangeBackground">
                <div className="band-photo">
                {/* <Image className="show-up-tonight" src={`/${bandPhoto}`} width="1400" height="700"/> */}
                <Image className="show-up-tonight" src={`/show-up-band.png`} layout="fill" objectFit="cover" />
                </div>
            </div>
            <p className="aboutBand">Bellflower plays original rock music around Triangle area of North Carolina, centering on the soaring and dynamic voice of Natasha Wilson. The group originated from the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey provides nuanced rhythmic propulsion with great attention to the rise and fall within each song, while multi-instrumentalist Sam Davis-Castro weaves blankets of sound punctured by diverse solos. Bassist and songwriter David Criwsell expands the character palette of the group with artful flexibility, while maintaining the core energy signature of Bellflower.</p>
            <h2>ABOUT THE INDIVIDUALS</h2>
            <div className="individuals">
                {bandMembers.map((member, i) => {
                    return (
                        <button key={i} data-member={i} className="bandMemberCard" onClick={() => {viewBandMember(i)}}>
                            <img src={member.svg} />
                            <p className="person">{member.musician}</p>
                            <p>{member.instrument}</p>
                        </button>
                    )
                })}
            </div>
            <BandMember viewPerson={bandMember} close={viewBandMember}></BandMember>
            <style jsx>{`
            .aboutBand {
                text-align: justify;
            }

            .orangeBackground {
                background: var(--main-orange);
            } 
            .band-photo {
                opacity: 0.8;
                display: flex;
                width: 100%!important;
                height: 45vw;
                position: relative;
                
            }
            .bandMemberCard {
                padding: 2rem;
                margin: 2rem auto;
                background: inherit;
                border: none;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                color: #fff;
            }
            .bandMemberCard:hover {
                cursor: pointer;
            }
            .bandMemberCard img {
                transition: 1s all ease;
            }
            .bandMemberCard:hover img {
                transform: rotateY(180deg);
            }
            .bandMemberCard .person {
                margin: 2rem 0 0 0;
                color: var(--main-orange);
                font-family: 'BenchNine',sans-serif;
                text-decoration: underline;
                font-size: 4rem;
                text-decoration-thickness: 2px;
                text-decoration-color: #fff;
                text-underline-offset: 2px;
            }
            .individuals img {
                object-fit: contain;
                height: 120px;
                padding-top: 1rem;
            }
            @media (min-width:768px) {
                .individuals {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .bandMemberCard {
                    width: calc(100% / 3);
                    margin: 0;
                }
                .band-photo {
                    height: 450px;
                }
            }
            `}</style>
            </section>
        </StyleBase>
    )
}

export default About;