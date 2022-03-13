const Logo = () => {
  return <div className="logo">
            <img src={require('../public/bellflowerOrange.svg')} />
            <style jsx>{`
              .logo {
                grid-area: logo;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .logo img {
                width: 90%;
                min-width: 300px;
                max-width: calc(900px * .9)
              }
            `}
            </style>
          </div>
}
export default Logo;