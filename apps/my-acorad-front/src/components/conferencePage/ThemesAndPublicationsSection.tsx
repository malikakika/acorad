import { FaChevronDown } from 'react-icons/fa';
import themesImage from '../../assets/themes-illustration.png';
import publicationImage from '../../assets/publication-opportunit.png';

const themes = [
  {
    title: 'AI-Driven Strategy and Innovation Management',
    items: [
      'Business model innovation in the AI era',
      'Strategic foresight and scenario planning using AI',
      'Disruptive and open innovation ecosystems',
      'Cross-industry digital transformation',
    ],
  },
  {
    title: 'Marketing, Consumer Insights & Digital Engagement',
    items: [
      'AI in consumer behavior analysis and personalization',
      'Predictive marketing, chatbots, and virtual agents',
      'Neuromarketing, sentiment analysis, and social listening',
      'Ethical AI in branding and advertising',
    ],
  },
  {
    title: 'Human Capital & Organizational Transformation',
    items: [
      'AI-powered HR analytics and recruitment',
      'Human-AI collaboration and future of work',
      'Leadership, culture, and change management in AI-enabled firms',
      'Workforce reskilling and lifelong learning strategies',
    ],
  },
  {
    title: 'Operations, Supply Chain & Smart Logistics',
    items: [
      'AI in supply chain forecasting, risk, and agility',
      'Automation, IoT, and real-time optimization',
      'Smart manufacturing and Industry 4.0',
      'Sustainable and circular supply chains with AI',
    ],
  },
  {
    title: 'Finance, Accounting & FinTech Innovation',
    items: [
      'Algorithmic trading, credit scoring, and robo-advisors',
      'AI in fraud detection, auditing, and compliance',
      'Blockchain-AI convergence in financial systems',
      'FinTech ecosystems and regulatory innovation',
    ],
  },
  {
    title: 'Entrepreneurship, Startups & Ecosystem Innovation',
    items: [
      'AI as a catalyst for entrepreneurial decision-making',
      'Digital incubators, accelerators, and venture analytics',
      'Social and sustainable entrepreneurship powered by AI',
      'Entrepreneurial education and AI tools for startups',
    ],
  },
  {
    title: 'AI in Business Education & Learning Innovation',
    items: [
      'AI-enabled adaptive learning and intelligent tutoring',
      'Virtual classrooms and immersive business simulations',
      'AI for assessment, feedback, and learner analytics',
      'Cross-disciplinary learning environments and curriculum innovation',
    ],
  },
  {
    title: 'Sustainability, Ethics & Responsible Innovation',
    items: [
      'AI for climate action and environmental monitoring',
      'ESG and impact measurement using AI tools',
      'Bias, transparency, and fairness in AI systems',
      'Designing inclusive, ethical, and sustainable AI systems',
    ],
  },
  {
    title: 'International Business & Cross-Cultural Dynamics',
    items: [
      'Global adoption of AI in innovation strategies',
      'Cultural intelligence in AI implementation',
      'Emerging markets and inclusive technology design',
      'Localization and adaptation of AI-driven solutions',
    ],
  },
  {
    title: 'Public Policy, Governance & Regulation',
    items: [
      'Data governance, sovereignty, and regulation',
      'National AI strategies and cross-border policy frameworks',
      'Public-private partnerships for AI and innovation',
      'AI ethics and legal implications across sectors',
    ],
  },
];

const ThemesAndPublicationsSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-vanilla to-white  py-20 px-6 sm:px-12 lg:px-20"
      role="region"
      aria-label="Themes and publication"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 ">
        {/* LEFT */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-200 p-6 sm:p-10 relative">
          <div className="flex mb-4">
            <img
              src={themesImage}
              alt="Themes icon"
              className="hidden sm:block absolute top-4 left-4 w-16 sm:w-20 lg:w-24 h-auto"
              />
          </div>

          <h2 className="text-3xl font-bold text-primary-blue mb-4 text-center">
            Themes & Sub-themes
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6 text-center">
            Explore the strategic and emerging topics shaping innovation in
            business and society.
          </p>

          <div className="space-y-4">
            {themes.map(({ title, items }, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md"
              >
                <div className="flex justify-between items-center px-4 py-3 font-semibold text-primary-blue text-sm">
                  {title}
                  <span className="text-gray-400">
                    <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                  </span>
                </div>

                <ul className="px-6 pb-4 list-disc list-inside text-sm text-gray-700 space-y-2 hidden group-hover:block">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className=" relative bg-white rounded-3xl shadow-md border border-gray-200 p-6 sm:p-10">
          <div className="flex  mb-4">
            <img
              src={publicationImage}
              alt="Publication icon"
              className="hidden sm:block absolute top-4 left-4 w-16 sm:w-20 lg:w-24 h-auto"
              />
          </div>

          <h2 className="text-3xl font-bold text-primary-blue mb-4 ml-6 text-center">
            Publication Opportunities
          </h2>
          <div className="text-gray-700 space-y-4 text-[0.95rem] leading-relaxed mt-8">
            <p>
              <strong>ICDAMI-2025</strong> offers authors the opportunity to
              publish and disseminate their work through the following channels:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Special Issue Publication:</strong> Selected papers will
                appear in peer-reviewed books related to the conference. Details
                provided upon acceptance.
              </li>
              <li>
                <strong>Conference Proceedings:</strong> Accepted and presented
                papers will be published officially and made accessible.
              </li>
              <li>
                <strong>DOI Assignment:</strong> Each paper receives a CrossRef
                Digital Object Identifier (DOI) for traceability.
              </li>
              <li>
                <strong>Indexing & Visibility:</strong> Proceedings will be
                submitted to Google Scholar for maximum exposure.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemesAndPublicationsSection;
