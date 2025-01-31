import heroImage from '../assets/heroImage.png'

const Hero = () => {
  return (
    <section
      id="accueil"
      className="hero bg-primary-blue text-light-gray pt-16 sm:pt-24 animate-fade-in"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-left sm:w-1/2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-relaxed">
            Welcome to Acorad: Empowering Your Future
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl mb-16 leading-loose font-serif">
            At Acorad, we don't just teach — we inspire.
            <br /> <br />
            Join us and transform your passion into expertise, with a commitment
            to excellence and a promise to deliver tangible results.
            <br /> <br />
            Let's build the future, together.
          </p>
        </div>

        <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
          <img
            src={heroImage}
            alt="Acorad Illustration"
            className=" sm:w-4/5 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
