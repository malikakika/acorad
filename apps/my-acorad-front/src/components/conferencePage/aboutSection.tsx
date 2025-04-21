

const sections = [
    {
      title: 'About the Conference',
      content: `Organized by the Academy of Research and Development, in collaboration with Hassan II University, Casablanca, Morocco, ICDAMI-2025 welcomes scholars, industry professionals, and innovation leaders to participate in the International Conference on the Cross-Disciplinary Approach to Managing Innovation (ICDAMI-2025), to be held on 13–14 November 2025 in Morocco.
  
  In an era defined by rapid technological change and AI-driven transformation, organizations across sectors face growing complexity, global competition, and evolving consumer expectations. As such, achieving and sustaining competitive advantage now requires the fusion of artificial intelligence, emerging technologies, and innovative management strategies.
  
  ICDAMI-2025 serves as a global forum for academics, researchers, AI experts, entrepreneurs, and policymakers to share research findings, explore emerging trends, and engage in high-impact dialogue. This interdisciplinary platform aims to bridge gaps between business domains and technological innovation, promoting cross-sector collaboration and transformative business practices.`,
    },
   
  
  ];
const AboutSection = () => {
    return (
<section className="bg-vanilla py-12 px-4 sm:px-8 lg:px-20">
<div className="max-w-5xl mx-auto text-center">
  <h2 className="text-3xl font-extrabold text-dark-purple mb-12">
    {sections[0].title}
  </h2>
  <p className="text-primary-blue whitespace-pre-line leading-relaxed text-left sm:text-justify">
    {sections[0].content}
  </p>
</div>
</section>
  );
};

export default AboutSection;