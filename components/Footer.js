import StyleBase from '../components/StyleBase';
import EmailForm from './EmailForm';

const Footer = () => {
    
    return (
        <StyleBase>
            <section className="footer">
                <hr className="white"/>
                <EmailForm />
                <div className="socialIcons">
                    <a alt="bellflower youtube" href="https://www.youtube.com/channel/UCMt7r35vGbqSH_xX2iglYFA?view_as=subscriber"><img src={require('../public/social_icons/youtube.svg')} /></a>
                    <a alt="bellflower facebook" href="https://www.facebook.com/Bellflowermusic/"><img src={require('../public/social_icons/facebook.svg')} /></a>
                    <a alt="bellflower twitter" href="https://www.instagram.com/bellflower_band/?hl=en"><img src={require('../public/social_icons/instagram.svg')} /></a>
                </div>
            </section>
        <style jsx>{`
        .socialIcons {
            margin: 1rem 0;
            display: flex;
            justify-content: space-around;
        }
        .socialIcons img {
            height: 100%;
            max-width: 50px;
        }
        #map {
            height: 300px;
            width: 100%;
          }
        .socialIcons {
            filter: invert(100%);
            height: 50px;
            margin-top: 2rem;
        }
        hr.white {
          position: absolute;
          width: 100%;
          left: 0;
          margin: 0;
        }
        `}</style>
        </StyleBase>
    )
}

export default Footer;