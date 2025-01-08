const Hero = () => {
    return (
      <section id="accueil" className="hero bg-primary-blue text-light-gray py-16 sm:py-24 animate-fade-in">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Bienvenue sur Acorad
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8">
            Nous aidons les entreprises à se réinventer à travers des solutions innovantes.
          </p>
          <a
            href="#contact"
            className="bg-accent-green text-primary-blue py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 hover:bg-accent-blue"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  