import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { useLightbox } from '../hooks/useLightbox.js';

export default function Home() {
  const location = useLocation();
  const funRef = useRef(null);
  useLightbox(funRef, []);

  useEffect(() => {
    if (location.pathname !== '/') return undefined;
    const id = location.hash?.replace('#', '');
    if (!id) return undefined;
    const run = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    const t = window.setTimeout(run, 100);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <div className="container-lg" id="wrapper">
      <HeroCanvas />

      <section className="section" id="about">
        <div className="row align-items-end justify-content-evenly">
          <div className="col-md-7 col-xs-12">
            <h2 data-aos="fade-up">About</h2>
            <p data-aos="fade-up">
              Hello! I&apos;m a designer who loves building seamless and accessible digital experiences, and
              experimenting with new AI design features.
            </p>
            <p data-aos="fade-up" className="italic">
              Fun fact: I coded this whole website!
            </p>
          </div>
          <div className="col-md-5 col-xs-12" data-aos="fade-left">
            <a className="main-button" href="https://www.linkedin.com/in/chloeychung/">
              LinkedIn
            </a>
            <a className="main-button" href="/chloe-chung-resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="main">
        <h2 data-aos="fade-up">Work</h2>
        <div className="main-work-box row">
          <div className="work-box col-md-12" id="well">
          <div className="row align-items-center justify-content-evenly">
            <div className="col-md-6 col-xs-12" data-aos="fade-left">
                <Link className="work-link" to="/well">
                  <img src="/images/thumbnail-well.png" alt="" />
                </Link>
              </div>
              <div className="col-md-6 col-xs-12 work-blurb" data-aos="fade-left">
                <h3>Well.ca</h3>
                <p>
                Crafting ad sets, landing pages and emails,  backed by analytics and heatmapping to drive improvement of digital marketing KPIs.
                </p>
                <Link className="work-link link-underline" to="/well">
                  View work
                </Link>
              </div>
            </div>
          </div>

          <div className="work-box col-md-12">
            <div className="row align-items-center justify-content-evenly column-reverse">
              <div className="col-md-6 col-xs-12 work-blurb" data-aos="fade-right">
                <h3>ThinkDirty App</h3>
                <p>
                  Designing icons and motion graphics for the Think Dirty app and the website.
                </p>
              </div>
              <div className="col-md-6 col-xs-12" data-aos="fade-left">
                <img src="/images/thumbnail-thinkdirty.png" alt="" />
              </div>
            </div>
          </div>

          <div className="work-box col-md-12" id="web">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-md-6 col-xs-12" data-aos="fade-right">
                <Link className="work-link" to="/web-design">
                  <img src="/images/thumbnail-grounded.png" alt="" />
                </Link>
              </div>
              <div className="col-md-6 col-xs-12 work-blurb" data-aos="fade-left">
                <h3>Web design</h3>
                <p>
                  Working on UX audits and updating the visual hierarchy of the existing websites and building new websites.
                </p>
                <Link className="work-link link-underline" to="/web-design">
                  View work
                </Link>
              </div>
            </div>
          </div>

          <div className="work-box col-md-12" id="brand">
            <div className="row align-items-center justify-content-evenly column-reverse">
              <div className="col-md-6 col-xs-12 work-blurb" data-aos="fade-right">
                <h3>Brand design</h3>
                <p>
                  Building brand guidelines and component libraries for new brands and events as side and
                  passion projects.
                </p>
                <Link className="work-link link-underline" to="/branding">
                  View all
                </Link>
              </div>
              <div className="col-md-6 col-xs-12" data-aos="fade-left">
                <Link className="work-link" to="/branding">
                  <img src="/images/thumbnail-upon-this-love.png" alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="work-box col-md-12" id="motion">
            <div className="row align-items-center justify-content-evenly">
              <div className="col-md-6 col-xs-12" data-aos="fade-right">
                <Link className="work-link" to="/motion">
                  <video poster="/images/automotive.jpg" playsInline autoPlay muted loop src="/images/automotive.mp4">
                    <source src="/images/automotive.mp4" type="video/mp4" />
                  </video>
                </Link>
              </div>
              <div className="col-md-6 col-xs-12 work-blurb" data-aos="fade-left">
                <h3>Motion Graphics</h3>
                <p>
                  Designing various motion graphics with After Effects to provide effecitve storytelling and user interaction demonstration.
                </p>
                <Link className="work-link link-underline" to="/motion">
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section row" id="fun" ref={funRef}>
        <h2 data-aos="fade-up">Side Projects</h2>
        <p data-aos="fade-up">I design and code things when I&apos;m bored. Here they are.</p>
        <div className="col-md-4 col-sm-12">
          <a href="https://dribbble.com/chungchloe">
            <img data-aos="fade-up" src="/images/dribbble-matcha.png" alt="" />
            <h3 data-aos="fade-up">Dribbble</h3>
          </a>
        </div>
        <div className="col-md-4 col-sm-12">
          <a href="/images/then.jpg" data-toggle="lightbox" data-size="lg">
            <img data-aos="fade-up" className="img-fluid" src="/images/then.jpg" alt="" />
          </a>
          <h3 data-aos="fade-up">Hey, I made my own font.</h3>
        </div>
        <div className="col-md-4 col-sm-12">
          <a href="https://codepen.io/chungchloe">
            <img data-aos="fade-up" src="/images/codepen-jiji.png" alt="" />
            <h3 data-aos="fade-up">CodePen</h3>
          </a>
        </div>
      </section>

      <ContactSection lead="Want to work on a project together? Let's talk!" />
    </div>
  );
}
