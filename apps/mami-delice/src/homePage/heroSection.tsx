
const HeroSection = () => {
  return (
    <section className="relative h-[75vh] w-full flex items-center justify-center text-white overflow-hidden">


      <div className="relative z-10 max-w-3xl px-6 text-center flex flex-col gap-6">

        <h1 className="title-serif text-3xl sm:text-5xl font-normal leading-tight tracking-wide drop-shadow-lg">
          Confiez-nous vos réceptions<br />
          pour une expérience d’exception
        </h1>

        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Mami Délice vous accompagne pour créer des moments uniques grâce à des buffets raffinés, généreux et faits maison.
        </p>

        <div className="mt-2 flex justify-center">
          <a
            href="#contact"
            className="px-6 py-2 border border-white rounded-full text-base font-medium hover:bg-white hover:text-black transition"
          >
            Contact & Devis
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

