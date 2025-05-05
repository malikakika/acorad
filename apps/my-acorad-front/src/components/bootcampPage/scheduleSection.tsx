import {
  FaCalendarAlt,
  FaCoffee,
  FaUsers,
  FaHandshake,
  FaBullseye,
  FaLightbulb,
  FaChartBar,
  FaMicrophoneAlt,
  FaRocket,
  FaPlaneDeparture,
  FaCheckCircle,
  FaDoorOpen,
} from 'react-icons/fa';

const IconText = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="flex items-center gap-3 mb-1 transition duration-300 hover:scale-105">
    <span className="text-xl text-accent-blue" aria-hidden="true">
      {icon}
    </span>
    <span className="text-sm text-gray-700 leading-snug">{text}</span>
  </div>
);

export const ScheduleSection = () => {
  const schedule = [
    {
      date: '28.07.2024',
      day: 'Sunday',
      morning: [
        { icon: <FaPlaneDeparture />, text: 'Arrivals' },
        { icon: <FaDoorOpen />, text: 'Hotel Check-in & Registration' },
      ],
      midday: [
        { icon: <FaUsers />, text: 'Welcome Dinner (Networking Evening)' },
      ],
    },
    {
      date: '29.07.2024',
      day: 'Monday',
      morning: [
        { icon: <FaMicrophoneAlt />, text: 'Opening Day' },
        { icon: <FaUsers />, text: 'Welcome Speech' },
        { icon: <FaBullseye />, text: 'What’s BLL?' },
        { icon: <FaHandshake />, text: 'Get to Know Each Other' },
        { icon: <FaCoffee />, text: 'Coffee Break' },
      ],
      midday: [
        { icon: <FaChartBar />, text: 'Program Overview' },
        { icon: <FaUsers />, text: 'Expectations & Contributions' },
        { icon: <FaLightbulb />, text: 'Why Entrepreneurship Matters?' },
      ],
    },
    {
      date: '30.07.2024',
      day: 'Tuesday',
      morning: [
        { icon: <FaBullseye />, text: 'Understanding Entrepreneurship' },
        { icon: <FaUsers />, text: 'Who’s an Entrepreneur? (Values)' },
        { icon: <FaCoffee />, text: 'Coffee Break' },
      ],
      midday: [
        {
          icon: <FaLightbulb />,
          text: 'Types of Entrepreneurship (Social, Sport, Disability)',
        },
        { icon: <FaCheckCircle />, text: 'Feedback Time' },
      ],
    },
    {
      date: '31.07.2024',
      day: 'Wednesday',
      morning: [
        {
          icon: <FaLightbulb />,
          text: 'Idea Generation - Where to Begin? (Needs & Problems)',
        },
        { icon: <FaCoffee />, text: 'Coffee Break' },
      ],
      midday: [
        {
          icon: <FaChartBar />,
          text: 'Idea Creation (Mind Mapping, Brainstorming)',
        },
        { icon: <FaCheckCircle />, text: 'Feedback Time' },
      ],
    },
    {
      date: '01.08.2024',
      day: 'Thursday',
      morning: [
        {
          icon: <FaRocket />,
          text: 'Business Development - Developing Your Business Idea',
        },
        { icon: <FaCoffee />, text: 'Coffee Break' },
      ],
      midday: [
        { icon: <FaUsers />, text: 'Where to Get Resources? (Money & People)' },
        { icon: <FaBullseye />, text: 'Fundraising (Crowdfunding etc.)' },
        { icon: <FaCheckCircle />, text: 'Feedback Time' },
      ],
    },
    {
      date: '02.08.2024',
      day: 'Friday',
      morning: [
        {
          icon: <FaMicrophoneAlt />,
          text: 'Pitching & Closing - Elevator Pitch Preparation',
        },
        { icon: <FaCoffee />, text: 'Coffee Break' },
      ],
      midday: [
        { icon: <FaChartBar />, text: 'Evaluation & Follow-Up for the Future' },
        { icon: <FaCheckCircle />, text: 'Feedback Time' },
        { icon: <FaPlaneDeparture />, text: 'Departures' },
      ],
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-vanilla via-white to-[#fefefe] py-24 px-4 sm:px-6 lg:px-32 animate-fade-in"
      role="region"
      aria-labelledby="schedule-heading"
    >
      <h2
        id="schedule-heading"
        className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-primary-blue flex items-center justify-center gap-4"
      >
        <FaCalendarAlt className="text-4xl text-accent-blue animate-pulse" />{' '}
        Bootcamp Weekly Schedule
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-2">
        Discover each day’s key activities, sessions, and interactive
        highlights.
      </p>
      <p className="text-center text-sm italic text-gray-500 mb-16">
        Tentative schedule — subject to slight changes
      </p>

      <div className="w-full overflow-x-auto rounded-xl shadow-2xl border border-gray-300">
        <table className="min-w-[768px] w-full bg-white text-left text-sm">
          <thead className="bg-primary-blue text-white">
            <tr>
              <th className="px-4 sm:px-6 py-4 font-semibold">Date</th>
              <th className="px-4 sm:px-6 py-4 font-semibold">Day</th>
              <th className="px-4 sm:px-6 py-4 font-semibold">
                Morning Session
              </th>
              <th className="px-4 sm:px-6 py-4 font-semibold">
                Midday Session
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, idx) => (
              <tr
                key={idx}
                className={
                  idx % 2 === 0
                    ? 'bg-white transition-all duration-300 hover:bg-blue-50/40'
                    : 'bg-blue-50/30 transition-all duration-300 hover:bg-blue-100/40'
                }
              >
                <td className="px-4 sm:px-6 py-4 font-semibold text-primary-blue whitespace-nowrap">
                  {row.date}
                </td>
                <td className="px-4 sm:px-6 py-4 font-semibold text-dark-purple whitespace-nowrap">
                  {row.day}
                </td>
                <td className="px-4 sm:px-6 py-4">
                  {row.morning.map((item, i) => (
                    <IconText key={i} icon={item.icon} text={item.text} />
                  ))}
                </td>
                <td className="px-4 sm:px-6 py-4">
                  {row.midday.map((item, i) => (
                    <IconText key={i} icon={item.icon} text={item.text} />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
