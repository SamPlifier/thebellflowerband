import StyleBase from '../../components/StyleBase';
import ViewAlbumSides from '../../components/ViewAlbumSides';
import albumInfo from '../../public/albumInfo.js';
import AlbumVendors from '../../components/AlbumVendors'

const Album = () => {
    return (
        <StyleBase>
            <section>
                <div className="albums">
                {albumInfo.map((album, i) => {
                    return (
                        <div key={i}>
                            <AlbumVendors vendor={album.vendors}/>
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
                        <p className="detail">Song Number<br/><span>{album.songs}</span></p>
                        <div className="detail">Song Names<br/><span>{album.songNames.map((song, k) => {
                            return <div key={k}><span>{song}</span><br/></div>
                        })}</span></div>
                        <h2>ART</h2>
                        <ViewAlbumSides album={album.name.toLowerCase().split(' ').join('-')}/>
                    </div>
                )
                })}
                </div>
            </section>
            <style jsx>{`

            .album-vendors {
                display: grid;
                grid-template-areas: "iTunes googlePlay"
                             "amazonPrime cdBaby";
                grid-template-rows: "3rem 3rem";
                grid-template-columns: "50% 50%";
                grid-row-gap: 2rem;
                margin: 2rem 0;
            }
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