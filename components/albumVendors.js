const AlbumVendors = (props) => {
    return (
        <div>
            <h2>AVAILABLE ON</h2>
            <div className="vendors">
                {props.vendor.map(vendor => {
                    return (
                    <a key={vendor.vendorName} className="vendor" href={vendor.vendorLink}>{vendor.vendorName}</a>
                    )
                })}
            <style jsx>
            {`
            .vendors {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 2rem;
            }
            .vendor {
                text-align: center;
            }
            .vendors a {
                color: var(--main-orange);
                font-family: 'BenchNine', sans-serif;
                font-size: 4rem;
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-decoration-color: #fff;
                text-underline-offset: 2px;
            }
            @media (min-width: 768px) {
                .vendors {
                    flex-direction: row;
                    align-items: center;
                }
                .vendors a:nth-child(2) {
                    margin: 0 2rem;
                }
            }
            `}
            </style>
            </div>
        </div>
    )
}

export default AlbumVendors;