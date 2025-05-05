import themesImage from '../../assets/themes-illustration.png';
import publicationImage from '../../assets/publication-opportunit.png';

const sections = [
  {
    title: 'About the Conference',
    content: `Organized by the Academy of Research and Development, in collaboration with Hassan II University, Casablanca, Morocco, ICDAMI-2025 welcomes scholars, industry professionals, and innovation leaders to participate in the International Conference on the Cross-Disciplinary Approach to Managing Innovation (ICDAMI-2025), to be held on 13–14 November 2025 in Morocco.
  
  In an era defined by rapid technological change and AI-driven transformation, organizations across sectors face growing complexity, global competition, and evolving consumer expectations. As such, achieving and sustaining competitive advantage now requires the fusion of artificial intelligence, emerging technologies, and innovative management strategies.
  
  ICDAMI-2025 serves as a global forum for academics, researchers, AI experts, entrepreneurs, and policymakers to share research findings, explore emerging trends, and engage in high-impact dialogue. This interdisciplinary platform aims to bridge gaps between business domains and technological innovation, promoting cross-sector collaboration and transformative business practices.`,
  },
  {
    title: 'Key/Major Themes',
    image: themesImage,
    content: [
      'AI-Driven Strategy and Innovation Management',
      'Marketing, Consumer Insights & Digital Engagement',
      'Human Capital & Organizational Transformation',
      'Operations, Supply Chain & Smart Logistics',
      'Finance, Accounting & FinTech Innovation',
      'Entrepreneurship, Startups & Ecosystem Innovation',
      'AI in Business Education & Learning Innovation',
      'Sustainability, Ethics & Responsible Innovation',
      'International Business & Cross-Cultural Dynamics',
      'Public Policy, Governance & Regulation',
    ],
  },
  {
    title: 'Publication Opportunities',
    image: publicationImage,
    content: `ICDAMI-2025 offers authors the opportunity to publish and disseminate their work through the following channels
  
  Special Issue Publication: All accepted papers will be considered for publication in a special issue of selected peer-reviewed books associated with the conference. Further details regarding partner books and submission guidelines will be shared with authors upon acceptance.
  
  Conference Proceedings: All accepted and presented papers will be published in the official ICDAMI-2025 Conference Proceedings, which will be professionally compiled and made publicly accessible.
  
  DOI Assignment:Each published paper will be assigned a Digital Object Identifier (DOI) through CrossRef, ensuring permanent accessibility and citation tracking.
  
  Indexing & Visibility:The proceedings will be submitted to Google Scholar for indexing to maximize academic reach and visibility.`,
  },
];
const ThemeSection = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-20 bg-light-gray">
      <div className="grid gap-10 md:grid-cols-2">
        {sections.slice(1).map((section, index) => (
          <div
            key={section.title}
            className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md border-l-4 border-accent-blue hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div
              className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-6 ${
                index === 0
                  ? 'w-24 xs:w-24 sm:w-40 md:w-40'
                  : 'w-32 xs:w-28 sm:w-44 md:w-44'
              }`}
            >
              <img
                src={section.image}
                alt=""
                aria-hidden="true"
                className="w-full object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-start mb-6 pl-4 sm:pl-24 mt-12 leading-tight tracking-tight text-primary-blue">
              {section.title}
            </h3>
            {section.title === 'Key/Major Themes' &&
            Array.isArray(section.content) ? (
              <ul className="text-gray-700 leading-relaxed text-left pl-2 text-sm sm:text-base">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 mb-6">
                    <span className="font-semibold text-dark-purple min-w-[1.5rem]">
                      {idx + 1}.
                    </span>
                    <span className="block">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-justify">
                {section.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeSection;
