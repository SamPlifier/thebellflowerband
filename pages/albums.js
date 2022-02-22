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
                    let imageUrl = `../${album.albumImages}/album-front.png`;
                    return (
                        <div key={album.name} className="album">
                            <h2>{album.name}</h2>
                            <p className="deets">click album for details</p>
                            <Link href="/album/[albumName]" as={`/album/${album.urlName}`}>
                                <div>
                                    <div className="albumImgContainer">
                                        {console.log(`../${album.albumImages}/album-front.png`)}
                                    {/* <img alt={`Front cover of Bellflower album ${album.name}`} src={require(imageUrl)}/> */}
                                    <Image alt={`Front cover of Bellflower album ${album.name}`} folder={album.imageFolder} file={'album-front.png'}/>
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
            .album img {
                width: 100%;
            }
            .deets {
                color: #f69d1a;
            }
            `}
            </style>
        </StyleBase>
    )
}

export default Albums;