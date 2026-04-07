import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactSection from './ContactSection.jsx';
import { useLightbox } from '../hooks/useLightbox.js';

export default function CaseStudyTemplate({
  backHash,
  stickyIntro,
  title,
  subtitle,
  tools,
  intro,
  media,
  prev,
  next,
  allAnchor,
  contactLead,
}) {
  const mediaRoot = useRef(null);
  useLightbox(mediaRoot, [title]);

  return (
    <div className="container-lg" id="wrapper">
      <div className="row">
        <section className="section intro col-md-6" id="intro">
          <div className={stickyIntro ? 'row sticky-top' : 'row'}>
            <Link to={`/#${backHash}`} className="back-button" data-aos="fade-right">
              &larr; Go Back
            </Link>
            <h1 data-aos="fade-right">{title}</h1>
            <h2 data-aos="fade-up">{subtitle}</h2>
            <h3 data-aos="fade-up">{tools}</h3>
            {intro}
          </div>
        </section>

        <section ref={mediaRoot} className="section work-media col-md-6" id="main">
          {media}
        </section>

        <section className="section work-nav col-md-12">
          <Link to={prev.to}>&larr; {prev.label}</Link>
          <Link className="work-nav-all" to={`/#${allAnchor}`}>
            View All
          </Link>
          <Link to={next.to}>
            {next.label} &rarr;
          </Link>
        </section>
      </div>

      <ContactSection lead={contactLead} />
    </div>
  );
}
