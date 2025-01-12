const About = () => {
  const sections = [
    {
      title: "Who We Are",
      subtitle: "Empowering Knowledge Creation",
      content: "The Academy of Research and Development provides platforms for academicians to excel in knowledge creation, cutting-edge research, and knowledge sharing. The academy aims to encourage young scholars, academicians, faculty members, and corporate researchers to conduct meaningful research and generate valuable insights for research and development, academia, the corporate sector, and socio-economic growth worldwide. ACoRD has been working to empower academicians, research scholars, corporate professionals, social and management scientists, and personnel at various organizational levels. It offers bespoke and customized training programs across key areas of business, social sciences, and management. These programs are tailored to meet the needs of both public and private organizations, including for-profit and non-profit entities. ACoRD is continuously expanding its horizons by broadening its range of services and strengthening its presence in Morocco, England, and the United Arab Emirates. It provides diverse and integrated services across academia, research, and the corporate sector, fostering growth and innovation in each domain.",
    },
    {
      title: "What We Do",
      subtitle: "Supporting Academia and Industry",
      content: "We support and empower the academicians, research scholars, faculty members, teachers and personals serving at different levels of their organizations both in the academia and corporate sector, while offering bespoke training in a number of key areas of research, teachings, enterprise, business development and management. We support the talent development profession by providing trusted content in the form of research, events, and education programs and trainings.",
    },
    {
      title: "Who We Serve",
      subtitle: "Faculties, Students, and Professionals",
      content: "Our members and customers are faculties, students, professionals and individuals who help themselves and the organizations where they work to achieve their full potential by improving their knowledge, skills, and abilities in the workplace. Our services, programs and trainings are suitable for academia, public as well as private organizations, and are suitable for-profit companies as well as for not-for-profit and NGOs.",
    },
    {
      title: "Our Vision",
      subtitle: "Driving Transformative Change",
      content: "To be a key player in fostering innovation and enabling socio-economic growth worldwide through research and development.",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 text-center bg-light-gray animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary-blue font-semibold mb-8">About ACORAD</h2>
        <p className="text-lg text-gray-700 mb-12">
          The Academy of Research and Development (ACORAD) is dedicated to advancing excellence in knowledge creation and empowering professionals worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-primary-blue bg-opacity-90 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform overflow-hidden group"
            >
              <div className="group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-light-gray mb-2">{section.title}</h3>
                <h4 className="text-lg font-medium text-light-gray mb-4">{section.subtitle}</h4>
              </div>
              <div className="absolute inset-0 bg-dark-blue p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-y-auto rounded-lg">
                <p className="text-soft-yellow">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
