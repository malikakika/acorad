const Services = () => {
  return (
    <section id="services" className="bg-light-gray py-20 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-primary-blue">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-primary-blue p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Strategic Consulting</h3>
            <p className="text-white text-lg">Optimize your business strategy with expert advice and innovative solutions tailored to your goals.</p>
          </div>
          <div className="bg-gradient-to-r from-primary-blue via-accent-blue to-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Digital Transformation</h3>
            <p className="text-white text-lg">Drive the digitalization of your business with powerful tools and solutions designed to enhance efficiency and growth.</p>
          </div>
          <div className="bg-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Custom Development</h3>
            <p className="text-white text-lg">Create personalized software solutions that are tailored to your specific business needs and challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
