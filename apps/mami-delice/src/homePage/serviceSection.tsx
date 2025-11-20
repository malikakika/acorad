import serviceImage from'../assets/heroImage.jpg';

const services = [
  {
    title: "Buffet Traiteur",
    desc: "Buffets élégants, généreux et raffinés, adaptés à tous vos événements.",
  },
  {
    title: "Congélation",
    desc: "Des plats soigneusement préparés et congelés pour vos besoins quotidiens.",
  },
  {
    title: "Réception Dyafa",
    desc: "Un accueil traditionnel marocain pour vos invités, avec élégance et générosité.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full py-28 px-6 text-white overflow-hidden">
     

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-wide">
            Nos Services
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Une expertise culinaire au service de vos événements, avec élégance et excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-14">

          <div className="w-full lg:w-1/2 space-y-8 animate-slide-left">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm tracking-wide">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 animate-slide-right">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <img
                src={serviceImage}
                alt="Buffet Mami Délice"
                className="w-full max-h-[650px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
