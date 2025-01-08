const Services = () => {
  return (
    <section id="services" className="bg-light-gray py-20 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-primary-blue">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Consulting Stratégique</h3>
            <p>Optimisez votre stratégie d'entreprise grâce à des conseils d'experts et des solutions innovantes.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Transformation Digitale</h3>
            <p>Accompagnez la digitalisation de votre entreprise avec des outils performants et adaptés.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Développement sur Mesure</h3>
            <p>Développez des solutions logicielles personnalisées qui répondent précisément à vos besoins.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
