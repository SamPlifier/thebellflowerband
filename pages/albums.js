import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import albumInfo from '../public/albumInfo.js';
import Cta from '../components/Cta';
import DynamicImage from '../components/DynamicImage';
import AlbumVendors2 from '../components/AlbumVendors2';

const Albums = () => {
    return (
        <StyleBase>
            <Head>
                <title>Albums</title>
            </Head>
            <section>
                {albumInfo.map((album, i) => {
                    return (
                        <div key={album.name} className="album">
                            <h2>{`${i + 1}. ${album.name}`}</h2>
                            <div className="cta-container">
                            <Cta type="link" goTo="/album/[albumName]" as={`/album/${album.urlName}`} text="ALBUM DETAILS" />
                            </div>
                            <div>
                                <div className="albumImgContainer">
                                    <DynamicImage width="700" height="700" alt={`Front cover of Bellflower album ${album.name}`} myLoader={`${album.imageFolder}/album-front.png`} />
                                </div> 
                            </div>
                            <AlbumVendors2 vendor={album.vendors} />
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
            .cta-container {
                transform: translate(-50%, 126px);
                z-index: 2;
                position: absolute;
                left: 50%;
                z-index: 2;
            }
            .album img {
                width: 100%;
            }
            .album {
                border-bottom: 2px solid var(--main-orange);
                display: flex;
                flex-direction: column;
            }
            .album:last-child {
                border: none;
            }
            .albumImgContainer:hover p {
                cursor: pointer;
                text-decoration: underline;
            }
            `}
            </style>
        </StyleBase>
    )
}

export default Albums;