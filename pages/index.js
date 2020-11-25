
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nova Al Farisi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                <p>I'm an junior full-stack programmer from South Jakarta. currently working at <b>PT. Klip Plastik Indonesia</b> as Web Developer.<br/><br/> I'm currently looking for a new job, please hit the button below to get my resume.</p>
              </div>
              <div className="social" id="social">
                  <a href="https://drive.google.com/file/d/1hPMPtEr_DN7nV1wrbqEWpaqdrd-5DQTE/view?usp=sharing" target="_blank" className="button">Get Resume</a>
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
    </>
  )
}
