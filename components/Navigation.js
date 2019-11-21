import Link from 'next/link';

const Navigation = (props) => {
    return (
        <nav onClick={props.toggleMenu}>
            <Link href="/"><a title="About Page"><span className="menu-link">HOME</span></a></Link>
            <Link href="/about"><a title="About Page"><span className="menu-link">ABOUT</span></a></Link>
            <Link href="/albums"><a title="Albums Page"><span className="menu-link">ALBUMS</span></a></Link>
            <Link href="/calendar"><a title="Calendar Page"><span className="menu-link">CALENDAR</span></a></Link>
            <Link href="/media"><a title="Media Page"><span className="menu-link">MEDIA</span></a></Link>
            <Link href="/social"><a title="Social Media Page"><span className="menu-link">SOCIAL MEDIA</span></a></Link>
            <Link href="/merchandise"><a title="Merchandise Page"><span className="menu-link">MERCH</span></a></Link>
            <style jsx>{`
                nav {
                    height: calc(100vh - 50px);
                    width: 100vw;
                    position: absolute;
                    top: 50px;
                    background: #222;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    border-top: 1px solid #dcdcd6;
                    z-index: 10;
                }
                a {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #dcdcd6;
                }
                a:hover {
                    background: #dcdcd6;
                    color: #222;
                }
            `}</style>
        </nav>
    )
}

export default Navigation;