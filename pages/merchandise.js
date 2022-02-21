import Head from 'next/head';
import StyleBase from '../components/StyleBase';
import merchandise from '../public/merchInfo.js';

const Merch = () => {
    const merchItems = merchandise;
    console.log(merchItems);
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
                                        <p>Item: {item.name}</p>
                                        <p>Price: &#36;{item.price}</p>
                                        <p>Get at: {item.availableAt}</p>
                                        <div className="imgContainer"><img src={item.imgSrc}/></div>
                                    </div>
                            </div>
                        )
                    })}
                </div>
                <h2>PURCHASING</h2>
                <p>These items are only available at shows at the moment. We currently accept <span>Credit Cards</span>, <span>Venmo</span>, and <span>Paypal</span>. Contact us below if you have any questions about stock or payment details.</p>

            </section>
            <style jsx>{`
            .payment-types {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            span {
                color: #f69d1a;
            }
            .merchContainer {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .merchItem {
                border: 2px solid #f69d1a;
                padding: 2rem;
                margin: 2rem 0;
            }
            .merchItem .imgContainer {
                height: auto;
            }
            .merchItem .imgContainer img {
                width: 70%;
                object-fit: contain;
            }
            .description p {
                text-align: left;
            }
            `}</style>
        </StyleBase>
    )
}

export default Merch;