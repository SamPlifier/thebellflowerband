import fetch from 'isomorphic-unfetch';
import StyleBase from '../components/StyleBase';
import Cta from '../components/Cta';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <StyleBase>
      <section>
        <Logo />
        <p>a six piece original rock band from<br/>Chapel Hill, NC.</p>
        <Cta type="link" className="album" goTo="/albums" text="HEAR OUR ALBUM" />
      </section>
      <style jsx>{`
      section {
        display: grid;
        height: calc(100vh - 50px);
        grid-template-areas: "logo logo" 
                             "description description"
                             "album album";
        grid-template-rows: 15% 15% 50%;
        grid-template-columns: 50% 50%;
      }
      p {
        grid-area: description;
      }
      .test {
        height: 200px;
        background: red;
      }
      .album {
        grid-area: album;
      }
      `}</style>
    </StyleBase>
  );
}

export default Home;