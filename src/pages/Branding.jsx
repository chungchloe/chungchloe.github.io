import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx';

function LightboxImg({ href, src, className = '' }) {
  return (
    <a href={href} data-toggle="lightbox" data-size="lg">
      <img data-aos="fade-up" className={className} src={src} alt="" />
    </a>
  );
}

export default function Branding() {
  return (
    <CaseStudyTemplate
      backHash="brand"
      stickyIntro
      title="Brand Design"
      subtitle="Branding and logo for companies and events"
      tools="Figma, Illustrator"
      intro={
        <>
          <p data-aos="fade-up">
            <span className="strong">New Hope Fellowship Retreat:</span> Designed the logos and assets in line with
            the theme of the event for 2024 and 2025 in collaboration with the organizers.
          </p>
          <p data-aos="fade-up">
            <span className="strong">
              <a href="https://www.uponthislove.com/">Upon This Love</a>:
            </span>{' '}
            Created the{' '}
            <a href="/images/brand-upon-this-love-brand-guidelines.pdf">brand identity</a>, logo and the website to
            be in line with the wedding industry and also true to the identity of the company.
          </p>
        </>
      }
      media={
        <>
          <LightboxImg href="/images/brand-retreat-2024-1.png" src="/images/brand-retreat-2024-1.png" className="img-fluid" />
          <LightboxImg href="/images/brand-retreat-2024-2.png" src="/images/brand-retreat-2024-2.png" />
          <LightboxImg href="/images/brand-retreat-2025-1.png" src="/images/brand-retreat-2025-1.png" />
          <LightboxImg href="/images/brand-retreat-2025-2.png" src="/images/brand-retreat-2025-2.png" />
          <LightboxImg href="/images/brand-upon-this-love.png" src="/images/brand-upon-this-love.png" />
          <LightboxImg href="/images/brand-upon-this-love-white.jpg" src="/images/brand-upon-this-love-white.jpg" />
        </>
      }
      prev={{ to: '/web-design', label: 'Web Design' }}
      next={{ to: '/motion', label: 'Motion Graphics' }}
      allAnchor="brand"
      contactLead="Want to work on a project together? Let's talk!"
    />
  );
}
