const StyleBase = (props) => {
    return (
        <div className="page-layout">
            { props.children }
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');
                html, body {
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    background: #333;
                }
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'BenchNine', sans-serif;
                    font-weight: 300;
                    color: #fff;
                    font-size: 2.4rem;
                    text-align: center;
                }
                h2 {
                }
                a, p, li, button, ul, ol, div, label {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 1.2rem;
                    line-height: 2rem;
                    color: #fff;
                }
                input, textarea {
                    font-family: 'Open Sans', sans-serif;
                    font-size: 1.2rem;
                    line-height: 2rem;
                    color: #222;
                  }
                ul, ol {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    line-height: 2rem;
                }
                a {
                    text-decoration: none;
                }

                section {
                    padding: 1rem;
                    box-sizing: border-box;
                }

                @media only screen and (min-width:500px) {
                    section {
                        padding: 1rem 6rem;
                    }
                }

                .page-layout {
                    margin-top: 50px;
                }
                .map {
                    background: 
                }

            `}</style>
        </div>
    )
}

export default StyleBase;