
export default function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-side">
          <div className="nav">
              <div className="nav-brand">
                na<span>.</span>
              </div>
              <ul className="nav-items">
                <li className="nav-item"><a href="#">Work</a></li>
                <li className="nav-item"><a href="#">Story</a></li>
                <li className="nav-item"><a href="#social">Contact</a></li>
              </ul>
            </div>
            <div className="content">
              <h1 className="my-name"><span>Nova Al</span> Farisi</h1>
              <img src="/nopa.jpeg" alt="picture" className="image"/>
              <p>I'm an junior full-stack programmer from mars. currently working at <b>PT. Klip Plastik Indonesia</b> as Web Developer.</p>
            </div>
            <div className="social" id="social">
                <a href="https://api.whatsapp.com/send/?phone=628976007835&text=Hello%20Nova" target="_blank" className="button">Say Hello</a>
                <div className="social-media">
                  <a href="https://www.linkedin.com/in/nova-al-farisi-26a0b719b/" target="_blank" className="social-icon"><img src="/linkedin.png" alt="Social"/></a>
                  <a href="https://instagram.com/nova_alfarisi" target="_blank" className="social-icon"><img src="/instagram.png" alt="Social"/></a>
                  <a href="https://github.com/NovaAlFarisi" target="_blank" className="social-icon"><img src="/git.png" alt="Social"/></a>
                </div>
              </div>
          </div>
        <div className="right-side">
          <div className="profile-img">
            <img src="/nopa.jpeg" alt="picture" className="image"/>
          </div>
        </div>
      </div>
    </div>
  )
}
