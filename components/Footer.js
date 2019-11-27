import StyleBase from '../components/StyleBase';
const Footer = () => {
    return (
        <styleBase>
            <section>
                <div className="socialIcons">
                    <img src={require('../public/social_icons/facebook.svg')} />
                    <img src={require('../public/social_icons/twitter.svg')} />
                    <img src={require('../public/social_icons/youtube.svg')} />
                </div>
            </section>
        <style jsx>{`
        section {
            height: calc(100vh - 52px);
            // background: #f29a2f;
            background: linear-gradient(45deg,#ef447e,#FFC107);
        }
        .socialIcons {
            height: 50%;
        }
        .socialIcons img {
            width: 30%;
        }
        `}</style>
        </styleBase>
    )
}

export default Footer;