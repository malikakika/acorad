import hassan2Logo from '../../assets/hassan2Logo.png';
import casablancaImage from '../../assets/UH2.jpg';

const committee = [
  {
    name: 'Pr. Abdelatif Komat',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'Pr. Sara YASSINE',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'Pr. Salah KOUBAA',
    institution: 'Hassan II University of Casablanca',
  },
  { name: 'Dr Wasim Jahangir', institution: 'Heriot-Watt University, UK' },
  {
    name: 'Muhammad Saad Baloch',
    institution: 'University of Southampton, UK',
  },
  { name: 'Professor T-Ramayah', institution: 'Universiti Sains Malaysia' },
  { name: 'Dr. Ijaz Ur Rehman', institution: 'University of Sharjah, UAE' },
  {
    name: 'Pr. Fatima Zahra AZZI',
    institution: 'Hassan II University of Casablanca',
  },
  { name: 'Pr. Zineb NOUI', institution: 'Hassan II University of Casablanca' },
  {
    name: 'Pr. Khadija HAMADANI',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'Pr. Kamal Zehraoui',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'PhD Student Affinna Kawter',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'PhD Student Aya Sehmani',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'PhD Student Maryame BIJOU',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'PhD Student Asmaa BAKHOUCH',
    institution: 'Hassan II University of Casablanca',
  },
  {
    name: 'PhD Student Amal HAFA',
    institution: 'Hassan II University of Casablanca',
  },
];

const CoorganiserAndCommitteeSection = () => {
  return (
    <section
      id="organizers"
      className="relative py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white via-vanilla to-white overflow-hidden"
      aria-labelledby="organizers-heading"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-multiply"
        style={{ backgroundImage: `url(${casablancaImage})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-white/60 via-vanilla/60 to-white/60"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT - Co-organizer */}
        <div>
          <header className="text-center lg:text-left mb-2">
            <h2
              id="organizers-heading"
              className="text-3xl sm:text-4xl font-bold text-primary-blue mb-6"
            >
              Co-organizer
            </h2>

            <img
              src={hassan2Logo}
              alt="Logo of Hassan II University of Casablanca"
              className="mx-auto lg:mx-0 w-32 sm:w-40 lg:w-48 xl:w-64 max-w-full h-auto object-contain drop-shadow-xl"
            />
            <p className="text-lg sm:text-xl font-semibold text-primary-blue mt-4 drop-shadow text-center lg:text-left">
              Hassan II University – Casablanca, Morocco
            </p>
            <p className="text-sm sm:text-base">
                🔗{' '}
                <a
                  href="https://www.univh2c.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue underline hover:text-primary-blue"
                >
                  www.univh2c.ma
                </a>
              </p>
          </header>

          <article className="bg-transparent text-gray-800 space-y-6 backdrop-blur-sm">
            <section aria-labelledby="about-university">
              <h3
                id="about-university"
                className="text-xl font-bold text-primary-blue mb-2"
              >
                About the University
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Hassan II University of Casablanca (UH2C) is a public university
                created in 2014 from the merger of two major institutions. It is
                the largest university in Morocco with over 108,000 students,
                2,300+ academic staff, and 18 institutions across 6 campuses.
              </p>
              <div className="space-y-2 mt-2">
                <p className="text-sm sm:text-base">
                  📍 <strong>Location:</strong> FACULTY OF LEGAL, ECONOMIC AND
                  SOCIAL SCIENCES, Km 8, Route d'El Jadida, B.P 8110 Oasis –
                  Casablanca
                </p>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    title="Google Map - Hassan II University"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.359612315822!2d-7.656506400000001!3d33.5440318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62cd8ce4d3dd5%3A0x5a44f546f630c974!2sFacult%C3%A9%20des%20sciences%20juridiques%2C%20%C3%A9conomiques%20et%20sociales%20de%20Casablanca!5e0!3m2!1sfr!2sfr!4v1747206451461!5m2!1sfr!2sfr"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            
            </section>

            <section aria-labelledby="about-casablanca">
              <h3
                id="about-casablanca"
                className="text-xl font-bold text-primary-blue mb-2"
              >
                About Casablanca
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Casablanca is Morocco’s vibrant economic and cultural capital.
                Located on the Atlantic coast, it offers a rich mix of tradition
                and modernity with iconic landmarks, diverse cuisine, and a
                cosmopolitan spirit.
              </p>
            </section>
          </article>
        </div>

        {/* RIGHT - Committee */}
        <div className="flex flex-col gap-6">
          {/* Titre au-dessus de la carte */}
          <header className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-blue">
              Organizing Committee
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 gap-6" role="list">
            {committee.map((person, idx) => (
              <article
                key={idx}
                role="listitem"
                className="bg-vanilla rounded-xl shadow-sm border border-gray-200 p-4"
              >
                <h3 className="text-base font-semibold text-dark-purple">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoorganiserAndCommitteeSection;
