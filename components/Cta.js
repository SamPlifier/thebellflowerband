import Link from 'next/link';

const CtaStyle = `
    color: #fff;
    background: #d81e5b;
    padding: 1rem 1.5rem;
    border: 2px solid #fff;
`;

const Cta = (props) => {
    if (props.type === 'link') {
        return (
            <div className="cta" data-link-to={props.goTo}>
            <Link href={props.goTo}><a>{props.text}</a></Link>
            <style jsx>{`
                a {
                    ${CtaStyle}
                }
                [data-link-to="/albums"] {
                    grid-area: album;
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
                    ${CtaStyle}
                }
            `}
            </style>
            </div>
        )
    }
}

export default Cta;