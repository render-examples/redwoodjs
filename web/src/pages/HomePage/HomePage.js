<<<<<<< HEAD
import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
=======
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
>>>>>>> 169bb28 (creating redwood-render home page)
  )
}

export default HomePage
