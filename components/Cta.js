import Link from 'next/link';

const CtaStyle = `
    color: #fff;
    background: #d81e5b;
    padding: 1rem 1.5rem;
    border: 2px solid #fff;
    text-align: center;
    transition: 1s all ease;
`;
const CtaHoverStyle = `
    background: #f69d1a;
    color: #333;
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
                    a:hover, a:focus-visible {
                        ${CtaHoverStyle}
                    }
                    [data-link-to="/albums"] {
                        grid-area: album;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    [data-link-to="/media"] {
                        grid-area: video;
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
                `}
                </style>
            </div>
        )
    }
}

export default Cta;