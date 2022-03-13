const StyleBase = (props) => {
    return (
        <div className="page-layout">
            { props.children }
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=BenchNine:300&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
                :root {
                    font-size: 62.5%;
                    line-height: 1.5;
                    --main-orange: #f29a2f;
                }
                html {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
                html::-webkit-scrollbar {
                    display: none;
                }

                html, body {
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    background: #333;
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                }
                body {
                    padding-top: 50px;
                }
                h1, h2, h3, h4, h5, h6 {
                    color: #fff;
                    font-family: 'BenchNine', sans-serif;
                    font-size: 4rem;
                    font-weight: 300;
                    text-align: center;
                    text-transform: uppercase;
                }
                button, a, p, li, ul, ol, div, label {
                    color: #fff;
                    font-size: 2rem;
                    font-weight: 300;
                }
                input, textarea {
                    color: #333;
                    font-size: 2rem;
                    font-weight: 300;
                }
                ul, ol {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
                a {
                    text-decoration: none;
                    transition: all .5s;
                }
                nav a {
                    font-size: 4rem;
                }
                section {
                    box-sizing: border-box;
                }
                .page-layout {
                    margin: 0 auto;
                }
                .page-layout, .header, nav, .individual {
                    width: 100%;
                }
                .page-layout .page-layout {
                    width: calc(100% - 2rem);
                }
                @media (min-width: 768px) {
                    .page-layout .page-layout {
                        width: calc(100% - 4rem);
                    }
                }
                @media (min-width: 992px) {
                    .page-layout .page-layout {
                        max-width: 900px;
                    }
                }
            `}</style>
        </div>
    )
}

export default StyleBase;