const HomePage = () => {
  return (
    <section className="temp-section">
      <img src="images/green.svg" alt="" className="temp-img temp-img-green" />
      <img
        src="images/5efe8c86adc66d00f28144be_blue-red.svg"
        alt=""
        className="temp-img temp-img-pink"
      />
      <img
        src="images/yellow-blue.svg"
        alt=""
        className="temp-img temp-img-yellow"
      />
      <a href="http://www.render.com" className="temp-logo-link w-inline-block">
        <img
          src="images/render-logo-color-white.svg"
          alt=""
          className="temp-logo"
        />
      </a>
      <div className="temp-container-center">
        <h2 className="temp-h1">
          Hello
          <br />
          Redwood
        </h2>
        <h5 className="temp-subhead">
          Deployed on{' '}
          <a href="http://www.render.com" className="temp-link">
            Render
          </a>
        </h5>
      </div>
    </section>
  )
}

export default HomePage
