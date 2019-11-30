const AlbumVendors = (props) => {
    return (
        <div>
        <h2>PURCHASE ON</h2>
        <div className="vendors">
            {props.vendor.map(vendor => {
                return (
                <a key={vendor.vendorName} className="vendor" href={vendor.vendorLink}>{vendor.vendorName}</a>
                )
            })}
        <style jsx>{`
        .vendors {
            width: 100%;
            display: grid;
            grid-template-areas: "topLeft topRight"
                         "bottomLeft bottomRight";
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 2rem;
            grid-column-gap: 2rem;
            margin: 2rem 0;
        }
        .vendor {
            border: 2px solid #f69d1a;
            padding: 1rem;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: #f69d1a;
            color: #222;
        }
        `}</style>
        <style jsx global>{`
            .vendorAvail {
                text-align: center;
            }
        `}</style>
        </div>
        </div>
    )
}

export default AlbumVendors;