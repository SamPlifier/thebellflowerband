import StyleBase from '../components/StyleBase';
import EmailForm from './EmailForm';
import Map from '../components/Map';

const Footer = () => {
    
    return (
        <StyleBase>
            <section className="footer">
                <EmailForm />
                {/* <Map/> */}
                <div className="socialIcons">
                    <a alt="bellflower youtube" href="https://www.youtube.com/channel/UCMt7r35vGbqSH_xX2iglYFA?view_as=subscriber"><img src={require('../public/social_icons/youtube.svg')} /></a>
                    <a alt="bellflower facebook" href="https://www.facebook.com/Bellflowermusic/"><img src={require('../public/social_icons/facebook.svg')} /></a>
                    <a alt="bellflower twitter" href="https://twitter.com/hashtag/bellflowermusic?src=hash"><img src={require('../public/social_icons/twitter.svg')} /></a>
                </div>
            </section>
        <style jsx>{`
        .footer {
            border-top: 2px solid #fff;
        }
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
          }
        `}</style>
        </StyleBase>
    )
}

export default Footer;