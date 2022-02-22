import Link from 'next/link';

const Navigation = (props) => {
    return (
        <nav onClick={props.toggleMenu} tabIndex="0">
            <Link href="/"><a title="Home Page"><span className="menu-link home">HOME</span></a></Link>
            <Link href="/about"><a title="About Page"><span className="menu-link about">ABOUT</span></a></Link>
            <Link href="/albums"><a title="Albums Page"><span className="menu-link albums">ALBUMS</span></a></Link>
            <Link href="/calendar"><a title="Calendar Page"><span className="menu-link calendar">CALENDAR</span></a></Link>
            <Link href="/media"><a title="Media Page"><span className="menu-link media">MEDIA</span></a></Link>
            <Link href="/merchandise"><a title="Merchandise Page"><span className="menu-link merch">MERCH</span></a></Link>
            <style jsx>{`
                nav {
                    height: calc(100vh - 50px);
                    width: 100vw;
                    position: absolute;
                    top: 50px;
                    background: #333;
                    display: grid;
                    grid-template-areas: "1" 
                                         "2"
                                         "3"
                                         "4"
                                         "5"
                                         "6";
                    grid-template-rows: 1fr.....;
                    grid-template-columns: 1fr;
                    z-index: 10;
                }
                @media only screen and (orientation: landscape) {
                    nav {
                        grid-template-areas: "topLeft topRight" 
                                             "middleLeft middleRight"
                                             "bottomLeft bottomRight";
                        grid-template-rows: 1fr 1fr 1fr;
                        grid-template-columns: 1fr 1fr;
                    }
                }
                .home {
                    grid-area: 1;
                }
                .about {
                    grid-area: 2;
                }
                .albums {
                    grid-area: 3;
                }
                .calendar {
                    grid-area: 4;
                }
                .media {
                    grid-area: 5;
                }
                .merch {
                    grid-area: 6;
                }
                
                a {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-family: 'BenchNine',sans-serif;
                    font-size: 2rem;
                }
                
                a:hover {
                    background: #dcdcd6;
                    color: #333;
                }
            `}</style>
        </nav>
    )
}

export default Navigation;