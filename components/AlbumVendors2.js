import Image from 'next/image';
const AlbumVendors2 = (props) => {
    return (
        <div>
            <h2>AVAILABLE ON</h2>
            <div className="vendors">
                {props.vendor.map(vendor => {
                    return (
                    <a key={vendor.vendorName} className="vendor" href={vendor.vendorLink}>
                        <div className="vendor-logo-container">
                            <Image src={`/${vendor.vendorLogo}`} layout='fill' objectFit='contain' alt={vendor.vendorAlt}/>
                        </div>
                    </a>
                    )
                })}
            <style jsx>
            {`
            .vendors {
                width: 100%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                margin-bottom: 20px;
                justify-content: center;

            }
            .vendor {
                text-align: center;
            }
            .vendors a {
                color: var(--main-orange);
                padding: 1rem;
                width: auto;
                display: flex;
                justify-content: center;
            }
            .vendors a:nth-child(1) {
                transform: translateX(-26px);
            }
            .vendor-logo-container {
                height: 40px;
                width: 175px;
                display: block;
                position: relative;
                transform: unset;
            }

            @media (min-width: 768px) {
                .vendors {
                    flex-direction: row;
                }
                .vendors a {
                    width: 33%;
                }
            }
            `}
            </style>
            </div>
        </div>
    )
}

export default AlbumVendors2;