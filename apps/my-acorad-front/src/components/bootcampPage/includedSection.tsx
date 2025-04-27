import {
  FaPlaneDeparture,
  FaHotel,
  FaChalkboardTeacher,
  FaBook,
  FaCertificate,
  FaUtensils,
  FaShip,
  FaCity,
  FaShuttleVan,
} from 'react-icons/fa';

const includedItems = [
  {
    icon: FaPlaneDeparture,
    label: 'Round-Trip Airfare',
    detail:
      'From Casablanca or Rabat to Istanbul, round-trip ticket included in the package.',
  },
  {
    icon: FaChalkboardTeacher,
    label: 'One-Week Academic Program',
    detail:
      'Includes expert-led sessions, program design, real case discussions and applied content.',
  },
  {
    icon: FaBook,
    label: 'Learning Materials',
    detail:
      'All classroom resources and printed documents required during the program.',
  },
  {
    icon: FaCertificate,
    label: 'Certificate of Attendance',
    detail:
      'Official certificate awarded upon successful participation in the full program.',
  },
  {
    icon: FaHotel,
    label: '5 Nights Hotel Accommodation',
    detail:
      'Comfortable rooms in a 4-star hotel for the entire duration of the bootcamp.',
  },
  {
    icon: FaUtensils,
    label: 'Daily Meals & Coffee Breaks',
    detail: 'Lunch and two coffee breaks provided every program day.',
  },
  {
    icon: FaUtensils,
    label: 'Welcome Dinner',
    detail:
      'Special dinner on the first day to network and get introduced to the team.',
  },
  {
    icon: FaShip,
    label: 'Cruise Dinner',
    detail:
      'Exclusive night cruise and dinner on the Bosphorus with scenic views of Istanbul.',
  },
  {
    icon: FaCity,
    label: 'Istanbul City Tour',
    detail:
      'Guided tour of the most iconic landmarks and historical spots in Istanbul.',
  },
  {
    icon: FaShuttleVan,
    label: 'Hotel ↔ Venue Shuttle',
    detail:
      'Daily shuttle bus service between the hotel and the training venue.',
  },
  {
    icon: FaShuttleVan,
    label: 'Airport Transfers',
    detail:
      'Pickup and drop-off to/from Istanbul International Airport included.',
  },
];

export const IncludedSection = () => {
  return (
    <section
      className="bg-gradient-to-b from-white via-vanilla to-white py-24 px-6 sm:px-12 lg:px-32"
      role="region"
      aria-labelledby="included-heading"
    >
      <h2
        id="included-heading"
        className="text-4xl sm:text-5xl font-extrabold text-primary-blue text-center mb-16"
      >
        What’s Included
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12 text-lg">
        All participants will enjoy a complete experience — from learning to
        lodging to cultural exploration.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto text-gray-800">
        {includedItems.map(({ icon: Icon, label, detail }, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="text-primary-blue text-3xl mt-1 shrink-0">
              <Icon aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-base sm:text-lg">{label}</p>
              <p className="text-sm text-gray-600 mt-1 leading-snug">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
