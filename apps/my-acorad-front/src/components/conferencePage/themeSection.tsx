import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import themesImage from '../../assets/themes-illustration.png';

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

const ThemeSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-light-gray py-16 px-6 sm:px-12 lg:px-32" role="region" aria-label="Conference themes">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-primary-blue">Themes & Sub-themes</h2>
        <p className="text-md sm:text-lg text-gray-700 mt-3 max-w-3xl mx-auto">
          Explore the strategic and emerging topics shaping innovation in business and society.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {themes.map(({ title, items }, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 transition-all">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-primary-blue text-sm sm:text-base hover:bg-gray-50 focus:outline-none"
            >
              {title}
              <span className="text-gray-500 text-xs">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <ul className="px-6 pb-4 list-disc list-inside text-sm text-gray-700 space-y-2">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <img
          src={themesImage}
          alt="Themes illustration"
          className="w-full max-w-3xl rounded-xl shadow-md object-contain"
        />
      </div>
    </section>
  );
};

export default ThemeSection;
