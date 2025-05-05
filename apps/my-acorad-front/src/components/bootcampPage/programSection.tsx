import {
  FaHandshake,
  FaChalkboardTeacher,
  FaUserFriends,
} from 'react-icons/fa';
import interactiveImg from '../../assets/interactive.png';
import experientialImg from '../../assets/experiential.png';
import mentorshipImg from '../../assets/mentorship.png';

const highlights = [
  {
    image: interactiveImg,
    icon: <FaHandshake className="text-white text-3xl" />,
    title: 'Interactive Sessions',
    desc: 'Experience dynamic group-based activities that ignite creativity and entrepreneurial thinking. No boring lectures — just energy, collaboration, and action!',
    bg: 'bg-accent-blue',
  },
  {
    image: experientialImg,
    icon: <FaChalkboardTeacher className="text-white text-3xl" />,
    title: 'Experiential Learning',
    desc: 'Learn by doing. Dive into real-world case studies, simulations, and projects led by passionate educators with deep industry expertise.',
    bg: 'bg-yellow-500',
  },
  {
    image: mentorshipImg,
    icon: <FaUserFriends className="text-white text-3xl" />,
    title: 'Mentorship Access',
    desc: 'Work hand-in-hand with accomplished mentors, entrepreneurs, and researchers. Get feedback, ask questions, and grow through meaningful exchange.',
    bg: 'bg-green-600',
  },
];

export const ProgramSection = () => {
  return (
    <section
      className="bg-vanilla py-24 px-6 sm:px-12 lg:px-32"
      role="region"
      aria-labelledby="program-highlights-heading"
    >
      <h2
        id="program-highlights-heading"
        className="text-4xl sm:text-5xl font-extrabold text-primary-blue text-center mb-16"
      >
        Program Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transition hover:shadow-xl hover:scale-[1.02] flex flex-col relative"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />
              <div
                className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white ${item.bg}`}
              >
                {item.icon}
              </div>
            </div>

            <div className="pt-16 pb-6 px-6 flex flex-col items-center text-center flex-grow">
              <h3 className="text-lg font-bold text-dark-purple mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
