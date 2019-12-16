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
        height: calc(100vh - 52px);
        grid-template-areas: "logo logo" 
                             "description description"
                             "album album";
        grid-template-rows: 25% 25% 50%;
        grid-template-columns: 50% 50%;
      }
      p {
        grid-area: description;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      .album {
        grid-area: album;
      }
      `}</style>
    </StyleBase>
  );
}

export default Home;