import Link from 'next/link';

const CtaStyle = `
    color: #fff;
    padding: 1rem 1.5rem;
    text-align: center;
    position: relative;
    background-image: linear-gradient(45deg, #d81e5b 10%, var(--main-orange));
    z-index: 1;
    font-weight: 400;
`;
const CtaBeforeStyle = `
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(45deg, #9c27b0 50%, #d81e5b);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
`
const CtaHoverBeforeStyle = `
    opacity: 1;
`

const Cta = (props) => {
    if (props.type === 'link') {
        return (
            <div className="cta" data-link-to={props.goTo}>
                <Link href={props.goTo}><a>{props.text}</a></Link>
                <style jsx>{`
                    a {
                        ${CtaStyle}
                    }
                    a::before {
                        ${CtaBeforeStyle}
                    }
                    a:hover::before {
                        ${CtaHoverBeforeStyle}
                    }
                    a:hover {
                        cursor: pointer;
                    }
                `}
                </style>
            </div>
        )
    } else {
        return (
            <div className="cta">
                <button type="button">{props.text}</button>
                <style jsx>{`
                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        ${CtaStyle}
                    }
                    button::before {
                        ${CtaBeforeStyle}
                    }
                    button:hover::before {
                        ${CtaHoverBeforeStyle}
                    }
                    button:hover {
                        cursor: pointer;
                    }

                `}
                </style>
            </div>
        )
    }
}

export default Cta;
