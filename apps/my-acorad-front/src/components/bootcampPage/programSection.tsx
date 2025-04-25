
import {FaUserFriends,
FaBullseye,
FaUsers,
FaHandshake, FaChalkboardTeacher}from 'react-icons/fa';


export const ProgramSection =()=>{
    return (
    <section
    className="bg-vanilla py-16 px-6 sm:px-12 lg:px-32"
    role="region"
    aria-label="Bootcamp highlights"
  >
    <h2 className="text-3xl font-bold text-primary-blue text-center mb-10">
      Program Highlights
    </h2>
    <div className="grid gap-8 md:grid-cols-2 text-lg text-gray-700">
      {[
        {
          icon: <FaHandshake className="text-xl" aria-hidden="true" />,
          title: 'Unique Interactive Sessions',
          desc: 'Engaging activities designed to spark creativity and entrepreneurial thinking.',
        },
        {
          icon: (
            <FaChalkboardTeacher className="text-xl" aria-hidden="true" />
          ),
          title: 'Inspiring Experiential Learning',
          desc: 'Curriculum delivered by dynamic and passionate instructors.',
        },
        {
          icon: <FaUserFriends className="text-xl" aria-hidden="true" />,
          title: 'Work With Mentors',
          desc: 'Collaborate with experienced entrepreneurs and industry experts.',
        },
        {
          icon: <FaBullseye className="text-xl" aria-hidden="true" />,
          title: 'Main Aims',
          desc: (
            <ul className="list-disc list-inside">
              <li>Support postgraduate students in research analysis.</li>
              <li>Help new lecturers produce impactful academic papers.</li>
            </ul>
          ),
        },
        {
          icon: <FaUsers className="text-xl" aria-hidden="true" />,
          title: 'Target Audience',
          desc: (
            <ul className="list-disc list-inside">
              <li>
                Lecturers and postgraduate students in higher institutions.
              </li>
              <li>Aspiring researchers preparing for empirical work.</li>
            </ul>
          ),
        },
      ].map((item, idx) => (
        <div key={idx}>
          <div className="flex items-center gap-3 mb-2 text-primary-blue">
            {item.icon}
            <h3 className="font-semibold text-lg">{item.title}</h3>
          </div>
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
  </section>
  );
};