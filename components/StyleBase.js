const StyleBase = (props) => {
    return (
        <div className="page-layout">
            { props.children }
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|Open+Sans&display=swap');
                html, body {
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    background: #222;
                }
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Noto Serif TC', serif;
                    font-weight: 300;
                    color: #fff;
                    font-size: 1.4rem;
                    text-align: center;
                }
                a, p, li, button, ul, ol, div {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 1.2rem;
                    color: #fff;
                }
                ul, ol {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                }
                section {
                    padding: 1rem;
                    box-sizing: border-box;
                }
                .page-layout {
                    margin-top: 50px;
                }
            `}</style>
        </div>
    )
}

export default StyleBase;