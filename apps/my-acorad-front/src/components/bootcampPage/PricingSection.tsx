import {
  FaPlaneDeparture,
  FaHotel,
  FaChalkboardTeacher,
  FaUtensils,
  FaShuttleVan,
  FaExclamationTriangle,
  FaCheckCircle,
} from 'react-icons/fa';

export const PricingSection = () => {
  const packages = [
    {
      title: 'Full Package',
      price: '10,000 MAD',
      highlight: 'Includes all services',
      features: [
        { icon: <FaPlaneDeparture />, text: 'Round-trip airfare included' },
        { icon: <FaHotel />, text: 'Accommodation included' },
        { icon: <FaChalkboardTeacher />, text: 'All bootcamp sessions, workshops, and activities' },
        { icon: <FaUtensils />, text: 'Meals (as per program)' },
        { icon: <FaShuttleVan />, text: 'Transportation for official visits and tours' },
      ],
      note: 'Everything is fully handled for you — just show up and enjoy the experience!',
      noticeColor: 'bg-green-100 border-green-400 text-green-800',
      iconNotice: <FaCheckCircle className="text-green-600 text-2xl" />,
      color: 'from-green-50 to-white',
      border: 'border-green-400',
    },
    {
      title: 'Partial Package',
      price: '8,500 MAD',
      highlight: 'Airfare not included',
      features: [
        { icon: <FaPlaneDeparture className="text-red-500" />, text: 'Round-trip airfare NOT included' },
        { icon: <FaHotel />, text: 'Accommodation included' },
        { icon: <FaChalkboardTeacher />, text: 'All bootcamp sessions, workshops, and activities' },
        { icon: <FaUtensils />, text: 'Meals included' },
        { icon: <FaShuttleVan />, text: 'Transportation included' },
      ],
      note: 'Participants must independently book and purchase their own flight tickets.',
      noticeColor: 'bg-yellow-100 border-yellow-400 text-yellow-800',
      iconNotice: <FaExclamationTriangle className="text-yellow-500 text-2xl" />,
      color: 'from-yellow-50 to-white',
      border: 'border-yellow-400',
    },
    {
      title: 'Program Package',
      price: '7,500 MAD',
      highlight: 'Only core program services',
      features: [
        { icon: <FaPlaneDeparture className="text-red-500" />, text: 'Round-trip airfare NOT included' },
        { icon: <FaHotel className="text-red-500" />, text: 'Accommodation NOT included' },
        { icon: <FaChalkboardTeacher />, text: 'Bootcamp sessions, workshops, and activities' },
        { icon: <FaUtensils />, text: 'Meals included' },
        { icon: <FaShuttleVan />, text: 'Local transportation included' },
      ],
      note: 'Participants must arrange and pay for both their flight tickets and hotel bookings.',
      noticeColor: 'bg-red-100 border-red-400 text-red-800',
      iconNotice: <FaExclamationTriangle className="text-red-500 text-2xl" />,
      color: 'from-red-50 to-white',
      border: 'border-red-400',
    },
  ];

  return (
    <section
      className="py-24 px-6 sm:px-12 lg:px-32 bg-gradient-to-b from-vanilla to-white"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <h2
        id="pricing-heading"
        className="text-4xl sm:text-5xl font-extrabold text-primary-blue text-center mb-16 tracking-tight"
      >
        Bootcamp Participation Packages
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {packages.map((pack, idx) => (
          <article
            key={idx}
            className={`relative flex flex-col justify-between h-full p-10 rounded-3xl shadow-xl border-t-4 border ${pack.border} bg-gradient-to-br ${pack.color} transition transform hover:scale-[1.02] hover:shadow-2xl focus-within:ring-4 focus-within:ring-offset-2 focus-within:ring-primary-blue`}
            tabIndex={0}
            aria-labelledby={`package-title-${idx}`}
          >
            <div>
              <h3
                id={`package-title-${idx}`}
                className="text-2xl font-bold text-dark-purple mb-2"
              >
                {pack.title}
              </h3>
              <p className="text-xl font-extrabold text-primary-blue mb-4">
                {pack.price}
              </p>
              <p className="text-base text-gray-600 italic mb-6">
                {pack.highlight}
              </p>

              <ul className="space-y-4 text-gray-800 text-lg font-medium mb-6">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-xl mt-1">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {pack.note && (
              <div className={`p-4 border-l-4 rounded-lg text-sm flex gap-3 items-start ${pack.noticeColor}`}>
                <div>{pack.iconNotice}</div>
                <p className="text-base leading-snug">{pack.note}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};