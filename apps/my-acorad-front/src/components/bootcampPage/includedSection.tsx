import {
  FaChalkboardTeacher,
  FaPlane,
  FaHotel,
  FaUtensils,
  FaBook,
  FaCertificate,
  FaShip,
  FaCity,
  FaShuttleVan,
} from 'react-icons/fa';
const includedItems = [
  { icon: FaPlane, label: 'Round Air Ticket' },
  { icon: FaHotel, label: 'Six-Day Hotel Accommodation' },
  { icon: FaUtensils, label: 'Daily Lunch + 2 Coffee Breaks' },
  { icon: FaChalkboardTeacher, label: 'One Week Academic Program' },
  { icon: FaBook, label: 'Classroom Materials' },
  { icon: FaCertificate, label: 'Attendance Certificate' },
  { icon: FaShip, label: 'Cruise Dinner + Welcome Dinner' },
  { icon: FaCity, label: 'Istanbul City Tour' },
  { icon: FaShuttleVan, label: 'Shuttle Hotel ↔ Venue' },
  { icon: FaShuttleVan, label: 'Airport Transportation' },
];

export const IncludedSection = () => {
  return (
    <section
      className="py-16 px-6 sm:px-12 lg:px-32 bg-white"
      role="region"
      aria-label="Bootcamp benefits"
    >
      <h2 className="text-3xl font-bold text-primary-blue text-center mb-10">
        What’s Included
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-800">
        {includedItems.map(({ icon: Icon, label }, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Icon className="text-primary-blue" aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
