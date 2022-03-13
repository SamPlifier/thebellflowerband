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
        <hr className="orange"/>
        <div className="navMenu" tabIndex="0" data-status={menuStatus} onClick={toggleMenu}>
            <div className="line--1"></div>
            <div className="line--2"></div>
            <div className="line--3"></div>
        </div>
        <div className="siteInfo">
            <p>{pageName}</p>
            <p className="siteUrl">bellflower<span className="highlight">band</span>.com</p>
        </div>
        {menuOpen && <Navigation toggleMenu={toggleMenu}/>}
        <style jsx>{`
            .header {
                display: grid;
                grid-template-rows: 50px;
                grid-template-columns: 50px auto;
                background: #333;
                z-index: 10;
                position: fixed;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                max-width: 900px;
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
                transition: all 1s ease;
                width: 50px;
            }
            .navMenu:hover {
                cursor: pointer;
            }
            .navMenu:hover, .navMenu:active, .navMenu:focus-visible {
                background: var(--main-orange);
            }
            .navMenu:hover .line--1,
            .navMenu:hover .line--2,
            .navMenu:hover .line--3,
            .navMenu:active .line--1,
            .navMenu:active .line--2,
            .navMenu:active .line--3,
            .navMenu:focus-visible .line--1,
            .navMenu:focus-visible .line--2,
            .navMenu:focus-visible .line--3 {
                background: #fff;
            }
            .line--1, .line--2, .line--3 {
                width: 30px;
                height: 2px;
                background: var(--main-orange);
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
                height: 50px;
                padding-right: 10px;
                padding-left: 10px;
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
                color: var(--main-orange);
            }
            hr.orange {
                position: absolute;
                border: none;
                background: var(--main-orange);
                height: 2px;
                width: 100vw;
                left: 0;
                bottom: 0;
                margin: 0;
                left: 50%;
                transform: translateX(-50%);
            }
        `}
        </style>
    </div>
    )
};

export default Header;