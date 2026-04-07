import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection.jsx';

export default function Motion() {
  return (
    <div className="container-lg" id="wrapper">
      <div className="row">
        <section className="section intro col-md-6" id="intro">
          <div className="row sticky-top">
            <Link to="/#motion" className="back-button" data-aos="fade-right">
              &larr; Go Back
            </Link>
            <h1 data-aos="fade-right">Motion Graphics</h1>
            <h2 data-aos="fade-up">UI/UX visulization and 2d animation work</h2>
            <h3 data-aos="fade-up">Illustrator, After Effects, Premiere Pro</h3>
            <p data-aos="fade-up">
              Made designs and illustrations, and implemented them in UI and 2D animations.
            </p>
          </div>
        </section>

        <section className="section work-media col-md-6" id="main">
          <video poster="/images/weathery.jpg" playsInline autoPlay muted loop src="/images/weathery.mp4">
            <source src="/images/weathery.mp4" type="video/mp4" />
          </video>
          <video poster="/images/automotive.jpg" playsInline autoPlay muted loop src="/images/automotive.mp4">
            <source src="/images/automotive.mp4" type="video/mp4" />
          </video>
          <iframe
            width="766"
            height="479"
            src="https://www.youtube.com/embed/oYTS7kznq1U"
            title="YouTube video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <video poster="/images/nhf.jpg" playsInline autoPlay muted loop src="/images/nhf.mp4">
            <source src="/images/nhf.mp4" type="video/mp4" />
          </video>
          <iframe
            width="862"
            height="485"
            src="https://www.youtube.com/embed/EJAtvtb-nok"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <section className="section work-nav col-md-12">
          <Link to="/branding">&larr; Brand Design</Link>
          <Link className="work-nav-all" to="/#motion">
            View All
          </Link>
          <Link to="/well">Well.ca &rarr;</Link>
        </section>
      </div>

      <ContactSection lead="Want to work on a project together? Let's talk!" />
    </div>
  );
}
