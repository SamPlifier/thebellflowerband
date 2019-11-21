import fetch from 'isomorphic-unfetch';
import StyleBase from '../components/StyleBase';
import Cta from '../components/Cta';
import Logo from '../components/Logo';

// const PostLink = props => (
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My blog</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" content="here is some crap" />
//                 <PostLink id="learn-nextjs" content="here is some crap" />
//                 <PostLink id="deploy-nextjs" content="here is some crap" />
//             </ul>
//         </Layout>
//     )
// }

// const Index = props => (
//     <Layout>
//         <h1>Batman Shows</h1>
//         <ul>
//             { props.shows.map(show => (
//                 <li key={show.id}>
//                     <Link href="/p/[id]" as={`/p/${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>

//                 </li>
//             ))}
//         </ul>
//     </Layout>
// )

// Index.getInitialProps = async () => {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
//     console.log(`Show data fetched. Count: ${data.length}`);
//     return {
//         shows: data.map(entry => entry.show)
//     };
// };

// export default Index;

// function getPosts() {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ];
// }

// const PostLink = ({post}) => (
//   <li>
    // <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a>{post.title}</a>
//     </Link>
//   </li>
// );

const Home = () => {
  return (
    <StyleBase>
      <section>
        <Logo />
        <p>a six piece original rock band from<br/>Chapel Hill, NC.</p>
        <Cta type="link" className="album" goTo="/albums" text="HEAR OUR ALBUM" />
      </section>
      <div className="test"></div>
      
      {/* <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul> */}
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