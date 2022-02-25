import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import Cta from '../components/Cta';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <StyleBase>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        
        <Logo />
        <p>a five piece original rock band started in<br/>Chapel Hill, NC.</p>
        <Cta type="link" className="album" goTo="/media" text="HEAR OUR ALBUM" />
      </section>
      <style jsx>{`
      section {
        height: calc(100vh - 52px);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      p {
        margin: 5rem 0 10rem;
      }
      `}</style>
    </StyleBase>
  );
}

export default Home;