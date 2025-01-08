const About = () => {
  const sections = [
    {
      title: "Vision",
      content: "Être un acteur clé dans la transformation numérique des entreprises.",
    },
    {
      title: "Mission",
      content: "Fournir des solutions digitales adaptées aux besoins de chaque client pour un avenir meilleur.",
    },
  ];

  return (
    <section id="about" className="bg-light-gray py-20 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-primary-blue font-semibold mb-6">À propos de Acorad</h2>
        <p className="text-lg mb-8">
          Acorad est une entreprise innovante spécialisée dans la création de solutions sur mesure pour accompagner votre
          croissance.
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-6 space-y-6 lg:space-y-0">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-accent-blue text-light-gray py-6 px-8 rounded-lg shadow-md w-80 transition-transform transform hover:translate-y-2 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
