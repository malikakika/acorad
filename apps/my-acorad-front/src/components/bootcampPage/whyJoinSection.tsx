import { FaBullseye, FaUserGraduate } from 'react-icons/fa';

export const WhyJoinSection = () => {
  return (
    <section
      className="bg-white py-24 px-6 sm:px-12 lg:px-32"
      role="region"
      aria-labelledby="why-join-heading"
    >
      <h2
        id="why-join-heading"
        className="text-4xl sm:text-5xl font-extrabold text-primary-blue text-center mb-16"
      >
        Why Join This Bootcamp?
      </h2>

      <div className="grid sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-vanilla to-white p-8 rounded-3xl shadow-md border border-gray-200 h-full">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-red-500 text-2xl" aria-hidden="true" />
            <h3 className="text-xl font-bold text-dark-purple">Main Aims</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>
              To assist postgraduate students in producing appropriate analysis for their research theses.
            </li>
            <li>
              To assist new lecturers in producing research papers with higher-level analysis.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-vanilla to-white p-8 rounded-3xl shadow-md border border-gray-200 h-full">
          <div className="flex items-center gap-3 mb-4">
            <FaUserGraduate className="text-primary-blue text-2xl" aria-hidden="true" />
            <h3 className="text-xl font-bold text-dark-purple">Target Audience</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>
              Lecturers and postgraduate students in institutions of higher learning.
            </li>
            <li>
              Aspiring researchers intending to embark on empirical research.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
