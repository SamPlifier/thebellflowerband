import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import merchandise from '../public/merchInfo.js';
import Image from 'next/image';

const Merch = () => {
    const merchItems = merchandise;
    return (
        <StyleBase>
            <Head>
                <title>Merchandise</title>
            </Head>
            <section>
                <h2>ITEMS</h2>
                <div className="merchContainer">
                    {merchItems.map((item, i) => {
                        return (
                            <div key={i} className="merchItem">
                                    <div className="description">
                                        <p>{item.name}</p>
                                        <p>&#36;{item.price}</p>
                                        <Image className="imgContainer" src={`/${item.imgSrc}`} width="300" height="300"/>
                                    </div>
                            </div>
                        )
                    })}
                </div>
                <h2>PURCHASING</h2>
                <p>Besides the album, items are only available at shows at the moment. We currently accept <span>Credit Cards</span>, <span>Venmo</span>, and <span>Paypal</span>. Contact us below if you have any questions about stock or payment details.</p>
                <div className="bernieContainer">
                    <Image className="imgContainer" src={`/coldBernie.jpg`} layout='fill' objectFit='cover'/>
                </div>
            </section>
            <style jsx>{`
            .payment-types {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            span {
                color: var(--main-orange);
            }
            .merchContainer {
                display: inline-flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .merchItem {
                border-bottom: 2px solid var(--main-orange);
                padding: 1rem;
                margin: 1rem;
                width: 50%;
            }
            .bernieContainer {
                width: 100%;
                position: relative;
                height: 500px;
                margin-bottom: 2rem;
            }
            @media (min-width: 768px) {
                .merchItem {
                    width: calc((100% / 3) - 4rem);
                }
            }
            `}</style>
        </StyleBase>
    )
}

export default Merch;