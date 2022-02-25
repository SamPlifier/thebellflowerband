import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import albumInfo from '../public/albumInfo.js';
import AlbumVendors from '../components/AlbumVendors';
import Link from 'next/link';
import DynamicImage from '../components/DynamicImage';

const Albums = () => {
    return (
        <StyleBase>
            <Head>
                <title>Albums</title>
            </Head>
            <section>
                {albumInfo.map((album) => {
                    return (
                        <div key={album.name} className="album">
                            <h2>{album.name}</h2>
                            <Link href="/album/[albumName]" as={`/album/${album.urlName}`}>
                                <div>
                                    <div className="albumImgContainer">
                                    <p className="deets">click album for details</p>
                                    <DynamicImage width="700" height="700" alt={`Front cover of Bellflower album ${album.name}`} myLoader={`${album.imageFolder}/album-front.png`} />
                                </div> 
                                </div>
                            </Link>
                            <AlbumVendors vendor={album.vendors}/>
                        </div>
                    )
                })}
                
            </section>
            <style jsx>{`
            .albumImgContainer {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 600px;
                margin: 0 auto;
                position: relative;
            }
            .album img {
                width: 100%;
            }
            .deets {
                color: var(--main-orange);
                position: absolute;
                z-index: 4;
                background: linear-gradient(#000000a6, black);
                height: 100%;
                width: 100%;
                bottom: 0;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .deets:hover {
                cursor: pointer;
                text-decoration: underline;
            }
            `}
            </style>
        </StyleBase>
    )
}

export default Albums;