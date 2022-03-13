import StyleBase from '../../components/StyleBase';
import ViewAlbumSides from '../../components/ViewAlbumSides';
import albumInfo from '../../public/albumInfo.js';
import AlbumVendors from '../../components/albumVendors';

const Album = () => {
    return (
        <StyleBase>
            <section>
                <div className="albums">
                {albumInfo.map((album, i) => {
                    return (
                        <div key={i}>
                            <h2>INFO</h2>
                            <div className="details">
                                <div className="left">
                                    <p className="detail">Album Name<br/><span>{album.name}</span></p>
                                    <p className="detail">Composers<br/><span>{album.writers.map((writer, j) => {
                                        if (j+1 < album.writers.length) {
                                            return <span key={j}>{`${writer}`}<br/></span>
                                        } else {
                                            return <span key={j}>{writer}</span>
                                        }
                                        })}</span>
                                    </p>
                                    <p className="detail">Release Date<br/><span>{album.releaseDate}</span></p>
                                </div>
                                <div className="right">
                                    <div className="detail">Tracks<br/>
                                        <span>{album.songs.map((song, k) => {
                                            return <div key={k}><span>{k + 1}. {song}</span><br/></div>
                                        })}</span>
                                    </div>
                                </div>
                            </div>
                            <h2>ALBUM COVER</h2>
                            <ViewAlbumSides album={album.name.toLowerCase().split(' ').join('-')}/>
                            <AlbumVendors vendor={album.vendors}/>
                        </div>
                    )
                })}
                </div>
            </section>
            <style jsx>{`
            .details {
                display: flex;
                flex-direction: column;
            }
            .detail {
                color: #f29a2f;
            }
            .detail span {
                color: #fff;
            }
            .albums {
                text-align: left;
            }

            @media (min-width: 768px) {
                .details {
                    flex-direction: row;
                    justify-content: space-around;
                }
                .left, .right {
                    width: auto;
                }
            }
            `}</style>
        </StyleBase>
    )
}

export default Album;