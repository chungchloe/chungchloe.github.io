import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx';

function LightboxImg({ href, src, className = '' }) {
  return (
    <a href={href} data-toggle="lightbox" data-size="lg">
      <img data-aos="fade-up" className={className} src={src} alt="" />
    </a>
  );
}

export default function Well() {
  return (
    <CaseStudyTemplate
      backHash="well"
      stickyIntro
      title="Well.ca"
      subtitle="UI/UX design, email design, HTML, CSS"
      tools="Figma, Illustrator, Photoshop, Salesforce, Wordpress"
      intro={
        <>
          <p data-aos="fade-up">
            Brainstormed ideas and executed designs according to the user journey for emails and web pages.
          </p>
          <p data-aos="fade-up">
            Built a design system for the marketing emails and developed a{' '}
            <a href="https://www.blog-well.ca/">blog site</a> with a theme consistent with the brand using
            Wordpress.
          </p>
        </>
      }
      media={
        <>
          <LightboxImg href="/images/well-blog.png" src="/images/well-blog.png" />
          <LightboxImg href="/images/well-bts-1.PNG" src="/images/well-bts-1.PNG" className="img-fluid" />
          <LightboxImg href="/images/well-email-4.PNG" src="/images/well-email-4.PNG" />
          <LightboxImg href="/images/well-email-6.PNG" src="/images/well-email-6.PNG" />
        </>
      }
      prev={{ to: '/motion', label: 'Motion Graphics' }}
      next={{ to: '/web-design', label: 'Web Design' }}
      allAnchor="well"
      contactLead="Want to work on a project together? Let's talk!"
    />
  );
}
