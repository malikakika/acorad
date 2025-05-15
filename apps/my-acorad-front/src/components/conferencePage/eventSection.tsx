import galaImage from '../../assets/gala.jpg';
import cafeImage from '../../assets/cafe.jpg';
import cityTourImage from '../../assets/casaCity.jpeg';


const events = [
  {
    title: 'Gala Dinner',
    image: galaImage,
    description: `At the Gala Dinner you will have the opportunity to enjoy culinary specialities from all parts of Morocco. The closing event will take place in a stunning and unique atmosphere. In addition to culinary delights, the program will be enriched by the vocal artists. Look forward to an unforgettable evening as the closing event of ICDAMI-2025.`,
  },
  {
    title: 'Academic Coffee',
    image: cafeImage,
    description: `We will provide an opportunity to the PhD students and nascent researchers to meet with the learned professors and receive constructive feedback on their ongoing and future research.`,
  },
  {
    title: 'City Tour – Discover Casablanca',
    image: cityTourImage,
    description: `Enjoy a cultural half-day tour of Casablanca! You'll visit iconic sites including the Sacré-Cœur Church, Mohammed V Square, the Old Medina, the majestic Hassan II Mosque, and stroll along La Corniche. This 3.5-hour tour will immerse you in the city's rich heritage and modern flair.`,
  },
];

const EventsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-20 bg-vanilla">
      <h2 className="text-2xl sm:text-3xl font-bold text-dark-purple text-center mb-12">
        Special Events
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition"
          >
            <div className="h-96 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-accent-blue mb-4">
                {event.title}
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
