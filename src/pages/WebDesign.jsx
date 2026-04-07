import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx';

function LightboxImg({ href, src, className = '' }) {
  return (
    <a href={href} data-toggle="lightbox" data-size="lg">
      <img data-aos="fade-up" className={className} src={src} alt="" />
    </a>
  );
}

export default function WebDesign() {
  return (
    <CaseStudyTemplate
      backHash="web"
      stickyIntro
      title="Web Design"
      subtitle="UX Audit, web design and development"
      tools="Figma, Wordpress, HTML, CSS"
      intro={
        <>
          <p data-aos="fade-up">
            <span className="strong">
              <a href="https://groundedsudbury.com/">Grounded</a>:
            </span>{' '}
            creatied illustrations, designed and developed an all-encompassing website that combines the three
            companies founded by the same owners.
          </p>
          <p data-aos="fade-up">
            <span className="strong">
              <a href="https://www.fooddaycanada.ca/">Food Day Canada</a>:
            </span>{' '}
            identified key objectives of the website and focused rebuilding the user journey for them. Redesigned all
            pages, made illustrations and participated in the end-to-end process of the redesign.
          </p>
        </>
      }
      media={
        <>
          <LightboxImg href="/images/grounded-home.png" src="/images/grounded-home.png" className="img-fluid" />
          <LightboxImg href="/images/grounded-about.png" src="/images/grounded-about.png" />
          <LightboxImg href="/images/food-day-home.jpg" src="/images/food-day-home.jpg" />
          <LightboxImg href="/images/food-day-about.png" src="/images/food-day-about.png" />
          <LightboxImg href="/images/food-day-cook.png" src="/images/food-day-cook.png" />
          <LightboxImg href="/images/food-day-dine.png" src="/images/food-day-dine.png" />
          <LightboxImg href="/images/food-day-pledge.png" src="/images/food-day-pledge.png" />
        </>
      }
      prev={{ to: '/well', label: 'Well.ca' }}
      next={{ to: '/branding', label: 'Brand Design' }}
      allAnchor="web"
      contactLead="Want to work on a project together? Let's talk!"
    />
  );
}
