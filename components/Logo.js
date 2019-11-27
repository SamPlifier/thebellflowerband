export default () => <div className="logo">
  <img src={require('../public/bellflowerOrange.svg')} />
  <style jsx>{`
    .logo {
      grid-area: logo;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .logo img {
      height: 100%;
    }
  `}</style>
</div>