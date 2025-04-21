

import Guest1 from '../../assets/SabriBOUBAKER.webp';
import Guest2 from '../../assets/MuhammadUsman.jpeg';
import Guest4 from '../../assets/ChristinaTheodoraki.png';
import hassan2Logo from '../../assets/hassan2Logo.png';

const speakers = [
    {
      name: 'Professor Sabri Boubaker',
      role: 'EM Normandie Business School, France\nUniversity of Swansea, United Kingdom',
      image: Guest1,
    },
    {
      name: 'Muhammad Usman',
      role: 'Associate Professor of Leadership and Management\nUniversity of Sharjah, UAE',
      image: Guest2,
    },
    {
      name: 'Osman M. Karatepe',
      role: 'Eastern Mediterranean University\nFaculty of Tourism\nFamagusta, North Cyprus',
      image: Guest1,
    },
    {
      name: 'Christina Theodoraki',
      role: 'Full Professor (HDR) – Entrepreneurship & Strategy\nIAE Aix-Marseille Graduate School of Management\nAix-Marseille University, France',
      image: Guest4,
    },
  ];
  
const SpeakersSection = () => {
    return (
    <>
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
<h2 className="text-3xl font-extrabold text-center text-dark-purple mb-12">
  Keynote Speakers
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
  {speakers.map((speaker, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
    >
      <div className="h-96 w-full overflow-hidden">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-dark-purple mb-2">
          {speaker.name}
        </h3>
        <p className="text-sm text-gray-700 whitespace-pre-line leading-snug">
          {speaker.role}
        </p>
      </div>
    </div>
  ))}
</div>
</section>

<section className="py-16 px-4 sm:px-8 lg:px-20 bg-vanilla">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-purple mb-6">
            Co-organizer
          </h2>
          <div className="flex flex-col items-center justify-center gap-6">
            <div>
              <img
                src={hassan2Logo}
                alt="Hassan II University Logo"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-base sm:text-lg text-primary-blue font-medium leading-snug">
              Hassan II University – Casablanca, Morocco
            </p>
          </div>
        </div>
      </section>
      </>
  );
};

export default SpeakersSection;