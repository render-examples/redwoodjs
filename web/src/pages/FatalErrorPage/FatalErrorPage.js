// This page will be rendered when an error makes it all the way to the top of the
// application without being handled by a Javascript catch statement or React error
// boundary.
//
// You can modify this page as you wish, but it is important to keep things simple to
// avoid the possibility that it will cause its own error. If it does, Redwood will
// still render a generic error page, but your users will prefer something a bit more
// thoughtful. =)

export default () => (
  <main>
    <section className="section">
      <img src="images/green.svg" alt="" className="img img-green" />
      <img src="images/red.svg" alt="" className="img img-pink" />
      <a href="http://www.render.com" className="logo-link w-inline-block">
        <img src="images/render-logo-color-white.svg" alt="" className="logo" />
      </a>
      <div className="container-center">
        <h2 className="h2 refresh-title">Oops, Something went wrong</h2>
        <div
          aria-hidden
          className="refresh-button"
          role="button"
          onClick={() => location.reload()}
        >
          <h2 className="refresh-text">Refresh</h2>
        </div>
      </div>
    </section>
  </main>
)
