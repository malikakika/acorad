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
              To develop entrepreneurial mindsets and competencies through
              experiential learning and real-world business startup activities.
            </li>
            <li>
              To enhance participants' ability to identify business
              opportunities, understand market gaps, and address customer needs
              effectively.
            </li>
            <li>
              To equip students with practical skills such as idea generation,
              market research, operational planning, financial management, and
              fundraising for launching startups.
            </li>
            <li>
              To foster teamwork, creativity, and innovation by working
              collaboratively on venture creation projects and engaging with
              entrepreneurs and industry experts.
            </li>
            <li>
              To provide direct exposure to entrepreneurial ecosystems through
              site visits to incubation centers, startup hubs, and chamber of
              commerce offices in international settings.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-vanilla to-white p-8 rounded-3xl shadow-md border border-gray-200 h-full">
          <div className="flex items-center gap-3 mb-4">
            <FaUserGraduate
              className="text-primary-blue text-2xl"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold text-dark-purple">
              Target Audience
            </h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
            <li>
              Undergraduate and graduate business students with an interest in
              entrepreneurship and innovation.
            </li>
            <li>
              Aspiring entrepreneurs seeking to launch their own startups or
              join entrepreneurial ventures.
            </li>

            <li>
              Students interested in experiential learning models who want to
              build practical skills alongside academic knowledge.
            </li>

            <li>
              Young professionals and early-career individuals aiming to
              strengthen their entrepreneurial competencies.
            </li>

            <li>
              Participants from international backgrounds seeking global
              exposure to entrepreneurship ecosystems in Turkey, or Morocco.{' '}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
