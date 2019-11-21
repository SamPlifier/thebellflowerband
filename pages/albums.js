import StyleBase from '../components/StyleBase';
import albumInfo from '../public/albumInfo.js';
import AlbumVendors from '../components/AlbumVendors';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Albums = () => {
    const router = useRouter();
    return (
        <StyleBase>
            <section>
                {albumInfo.map((album) => {
                    return (
                        <div key={album.name} className="album">
                            <p>Album: {album.name}</p>
                            <p className="deets">click album for details</p>
                            <Link href="/album/[albumName]" as={`/album/${album.urlName}`}>
                                <div>
                                    <div className="albumImgContainer">
                                    <img alt={`Front cover of Bellflower album ${album.name}`} src={require(`../public/albums/${album.urlName}/album-front.png`)}/>
                                    <div className="bannerBox"><div className="albumDetailsCover"><h3>NEW ALBUM</h3></div></div>
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
            }
            .albumDetailsCover {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f29a2ff2;
                width: calc(100% - 2rem);
                transform: rotate(-45deg);
                bottom: 66%;
                right: 30%;
                overflow: hidden;
            }
            .album img {
                width: 100%;
            }
            .bannerBox {
                position: absolute;
                height: calc(100vw - 4.1rem);
                width: calc(100% - 2rem);
                overflow: hidden;
            }
            .deets {
                color: #f29a2f;
            }
            `}
            </style>
        </StyleBase>
    )
}

export default Albums;