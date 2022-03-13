import StyleBase from '../../components/StyleBase';
import ViewAlbumSides from '../../components/ViewAlbumSides';
import albumInfo from '../../public/albumInfo.js';

const Album = () => {
    return (
        <StyleBase>
            <section>
                <div className="albums">
                {albumInfo.map((album, i) => {
                    return (
                        <div key={i}>
                            <h2>INFO</h2>
                            <p className="detail">Album Name<br/><span>{album.name}</span></p>
                            <p className="detail">Release Date<br/><span>{album.releaseDate}</span></p>
                            <p className="detail">Composers<br/><span>{album.writers.map((writer, j) => {
                            if (j+1 < album.writers.length) {
                                return <span key={j}>{`${writer}, `}</span>
                            } else {
                                return <span key={j}>{writer}</span>
                            }
                        })}</span>
                        </p>
                        <div className="detail">Tracks<br/><span>{album.songs.map((song, k) => {
                            return <div key={k}><span>{k + 1}. {song}</span><br/></div>
                        })}</span></div>
                        <h2>ART</h2>
                        <ViewAlbumSides album={album.name.toLowerCase().split(' ').join('-')}/>
                    </div>
                )
                })}
                </div>
            </section>
            <style jsx>{`
            .albums {
                text-align: left;
            }
            .detail {
                color: #f29a2f;
            }
            .detail span {
                color: #fff;
            }
            `}</style>
        </StyleBase>
    )
}

export default Album;