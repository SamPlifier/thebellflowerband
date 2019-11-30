import StyleBase from '../components/StyleBase';
import albumInfo from '../public/albumInfo.js';
// import AlbumVendors from '../components/AlbumVendors';
import Link from 'next/link';
const Albums = () => {
    return (
        <StyleBase>
            <section>
                {albumInfo.map((album) => {
                    return (
                        <div key={album.name} className="album">
                            <h2>{album.name}</h2>
                            <p className="deets">click album for details</p>
                            <Link href="/album/[albumName]" as={`/album/${album.urlName}`}>
                                <div>
                                    <div className="albumImgContainer">
                                    <img alt={`Front cover of Bellflower album ${album.name}`} src={require(`../public/albums/${album.urlName}/album-front.png`)}/>
                                </div> 
                                </div>
                            </Link>
                            {/* <AlbumVendors vendor={album.vendors}/> */}
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