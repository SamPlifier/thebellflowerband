import Navigation from '../components/Navigation';
import { useState } from 'react';
import { useRouter } from 'next/router';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const formatPageName = (name) => {
        if (name.includes('[')) {
            let lastSlash = name.lastIndexOf('/');
            let newPageName = name.slice(1,lastSlash);
            return newPageName;
        } else {
            return name.slice('1');
        }

    }
    const pageName = useRouter().route === '/' ? "home" : formatPageName(useRouter().route);

    let menuStatus = menuOpen ? 'close' : 'open';
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
    <div className="header">
        <div className="navMenu" data-status={menuStatus} onClick={toggleMenu}>
            <div className="line--1"></div>
            <div className="line--2"></div>
            <div className="line--3"></div>
        </div>
        <div className="siteInfo">
            <p>{pageName}</p>
            <p className="siteUrl">bellflower<span className="highlight">band</span>.com</p>
        </div>
        <style jsx>{`
            .header {
                width: 100%;
                display: grid;
                grid-template-rows: 50px;
                grid-template-columns: 50px auto;
                background: #222222;
                border-bottom: 1px solid #dcdcd6;
            }
            .navMenu {
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-right: 1px solid #fff;
            }
            .line--1, .line--2, .line--3 {
                width: 60%;
                height: 2px;
                background: #f29a2f;
            }
            [data-status="open"] .line--1,
            [data-status="open"] .line--3 {
                transition: all .5s;
                transition-timing-function: cubic-bezier(.24,.66,.78,.58);
            }
            [data-status="open"] .line--2 {
                transition: all .3s;
            }
            .line--2 {
                margin: 5px 0;
            }
            [data-status="close"] .line--1 {
                transition: all .5s;
                transform: rotate(225deg);
                position: relative;
                top: 1px;
            }
            [data-status="close"] .line--2 {
                transition: all 1s;
                display: none;
            }
            [data-status="close"] .line--3 {
                transition: all .5s;
                transform: rotate(-225deg);
                position: relative;
                bottom: 1px;
            }
            .siteInfo {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;
            }
            .siteUrl {
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: 1;
                grid-row-end: 2;
                place-self: center;
                color: #fff;
            }
            .siteUrl .highlight {
                color: #f29a2f;
            }
        `}
        </style>
        {menuOpen && <Navigation toggleMenu={toggleMenu}/>}
    </div>
    )
};

export default Header;