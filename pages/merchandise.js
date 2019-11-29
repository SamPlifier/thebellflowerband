import Link from 'next/link';
import StyleBase from '../components/StyleBase';
const Merch = () => {
    return (
        <StyleBase>
            <section>
                <h2>ITEMS</h2>
                <h2>PURCHASING</h2>
                <p>Purchases can only be made at shows or by contacting us for the time being, but we do take:</p>
                <div className="payment-types">
                    <p>Credit Cards</p>
                    <p>Venmo</p>
                    <p>Paypal</p>
                </div>
            </section>
            <style jsx>{`
            .payment-types {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .payment-types p {
                color: #f69d1a;
            }
            `}</style>
        </StyleBase>
    )
}

export default Merch;