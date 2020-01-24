import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import { useState } from 'react';
import bandMembers from '../public/musicians.js';
import BandMember from '../components/BandMember';

const About = () => {
    const [bandMember, setBandMember] = useState(false);
    const viewBandMember = (bandMember) => {
        typeof bandMember === 'number' ? setBandMember(bandMember) : setBandMember(false);
    }
    const bandPhoto = require('../public/bellflower-group.jpg');
    return (
        <StyleBase>
            <section>
            <h2>ABOUT THE BAND</h2>
            <div className="orangeBackground"><div className="bandPourHouse"></div></div>
            <p className="aboutBand">Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist &amp; songwriter David Criswell holds down the bottom and offers new material for the band to explore.</p>
            <h2>ABOUT THE INDIVIDUALS</h2>
            <p>Click on a band member for details like experience, influences, or something random.</p>
            <div className="individuals">
                {bandMembers.map((member, i) => {
                    return (
                        <div key={i} data-member={i} className="bandMemberCard" onClick={() => {viewBandMember(i)}}>
                            <img src={member.svg} />
                            <h2>{member.musician}</h2>
                            <p>{member.instrument}</p>
                        </div>
                    )
                })}
            </div>
            <BandMember viewPerson={bandMember} close={viewBandMember}></BandMember>
            <style jsx>{`
            .aboutBand {
                text-align: justify;
            }
            .aboutUsImg {
                width: 100%;
                height: calc(45vw - 2rem);
                object-fit: cover;
            }
            .orangeBackground {
                background: #f69d1a;
            }
            .bandPourHouse {
                height: calc(50vw - 2rem);
                background: url(${bandPhoto});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                opacity: 0.5;
            }
            .bandMemberCard {
                padding: 2rem;
                margin: 2rem 0;
                box-shadow: 0px 2px 0px 0px #f89e00;
            }
            .bandMemberCard:hover {
                cursor: pointer;
            }
            .bandMemberCard h2 {
                color: #f69d1a;
            }
            .individuals img {
                object-fit: contain;
                height: 120px;
            }
            @media only screen and (min-width:700px) {
                .individuals {
                    display: flex;
                    flex-wrap: wrap;
                }
                .bandMemberCard {
                    padding: 0;
                    margin: 2rem;
                    width: calc(50% - 4rem);
                }
            }
            `}</style>
            </section>
        </StyleBase>
    )
}

export default About;