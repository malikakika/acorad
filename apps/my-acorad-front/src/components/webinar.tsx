import React from 'react';
import intervenant from '../assets/intervenant.jpeg';
import intervenante from '../assets/intervenante.jpeg';

const Webinar = () => {
  const webinars = [
    {
      title: 'How to complete a systematic literature review using AI',
      link: 'https://docs.google.com/forms/d/1CmJSPJvktQY76Mr9rFOb7WtRSkrIbs4Kxxgwk5Uu_VI/edit',
      isUpcoming: true,
      description:
        'Our next webinar, titled "AI in Systematic Literature Review," is scheduled for Friday, January 31st, 2025. This engaging session will delve into the transformative role of artificial intelligence in enhancing the systematic literature review process, offering valuable insights and practical applications.',
      speaker: {
        name: 'Przemysław Tomczyk, PhD',
        bio: 'Assistant Professor at the Department Of Marketing at Kozminski University',
        photo: intervenant, 
      },
    },
    {
      title: 'Workshop on Theory-driven research model',
      isUpcoming: false,
      description:
        'On Saturday, November 16th, at 11:00 AM Morocco time, we held the workshop titled "Workshop on Theory-driven Research Model" on the Google Meet platform. Those who were interested filled out the form to receive a certificate after the training.',
      speaker: {
        name: 'Dr. Tasneem Fatima',
        bio: 'Associate Professor Faculty of Management Sciences, International Islamic University',
        photo: intervenante, 
      },
    },
  ];

  const upcomingEvents = webinars.filter((event) => event.isUpcoming);
  const pastEvents = webinars.filter((event) => !event.isUpcoming);

  return (
    <section id="webinar" className="bg-vanilla py-20">
    <div className="flex flex-wrap justify-center gap-12">
  {/* Section for Upcoming Events */}
  <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
    <h3 className="text-3xl font-semibold text-accent-blue mb-6">
      Upcoming Events
    </h3>
    <div className="space-y-6">
      {upcomingEvents.map((webinar, index) => (
        <div
          key={`upcoming-${index}`}
          className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden p-6 h-full min-h-[400px]" // Ajout de min-h
        >
          <div className="flex items-center mb-4">
            <img
              src={webinar.speaker.photo}
              alt={webinar.speaker.name}
              className="w-40 h-40 rounded-full object-cover mr-4 border-2 border-accent-blue"
            />
            <div>
              <p className="text-gray-800 font-medium">
                {webinar.speaker.name}
              </p>
              <p className="text-gray-600 text-sm">
                {webinar.speaker.bio}
              </p>
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {webinar.title}
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              {webinar.description}
            </p>
          </div>
          <div className="mt-auto">
            <a
              href={webinar.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent-blue text-white py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
            >
              Register Now
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Section for Past Events */}
  <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
    <h3 className="text-3xl font-semibold text-accent-blue mb-6">
      Past Events
    </h3>
    <div className="space-y-6">
      {pastEvents.map((webinar, index) => (
        <div
          key={`past-${index}`}
          className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden p-6 h-full min-h-[443px]" // Ajout de min-h
        >
          <div className="flex items-center mb-4">
            <img
              src={webinar.speaker.photo}
              alt={webinar.speaker.name}
              className="w-40 h-40 rounded-full object-cover mr-4 border-2 border-accent-blue"
            />
            <div>
              <p className="text-gray-800 font-medium">
                {webinar.speaker.name}
              </p>
              <p className="text-gray-600 text-sm">
                {webinar.speaker.bio}
              </p>
            </div>
          </div>
          <div className="flex-grow">
  <h4 className="text-lg font-semibold text-gray-800 mb-8">
    {webinar.title}
  </h4>
  <p className="text-gray-600 mb-4 text-sm text-justify line-clamp-4">
    {webinar.description}
  </p>
</div>

          <div className="mt-auto">
            <button
              disabled
              className="block w-full text-center bg-gray-400 text-white py-2 rounded-lg shadow cursor-not-allowed"
            >
              Registration Closed
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
 


    </section>
  );
};

export default Webinar;
