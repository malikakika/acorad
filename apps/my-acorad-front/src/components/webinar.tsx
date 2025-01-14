import React from 'react';

const Webinar = () => {
  const webinars = [
    {
      title: 'How to complete a systematic literature review using AI',
      link: 'https://docs.google.com/forms/d/1CmJSPJvktQY76Mr9rFOb7WtRSkrIbs4Kxxgwk5Uu_VI/edit',
      isUpcoming: true,
      description:
        'Our next webinar, titled "AI in Systematic Literature Review," is scheduled for Friday, January 31st, 2025. This engaging session will delve into the transformative role of artificial intelligence in enhancing the systematic literature review process, offering valuable insights and practical applications.',
      speaker: {
        name: 'Przemysław Tomczyk, PHD',
        bio: 'Assistant Professor, at the Department Of Marketing at Kozminski University',
        photo: '/src/assets/images/intervenant.jpeg',
      },
    },
    {
      title: 'Workshop on Theory-driven research model',
      isUpcoming: false,
      description:
        'On Saturday, November 16th, at 11:00 AM Morocco time, we held the workshop titled "Workshop on Theory-driven Research Model" on the Google Meet platform. Those who were interested filled out the form to receive a certificate after the training.',
      speaker: {
        name: 'Dr. Tasneem Fatima',
        bio: 'Associate Professor Faculty of Management SciencesInternational Islamic University',
        photo: '/src/assets/images/intervenante.jpeg',
      },
    },
  ];

  const upcomingEvents = webinars.filter((event) => event.isUpcoming);
  const pastEvents = webinars.filter((event) => !event.isUpcoming);

  return (
    <section id="webianire" className="bg-vanilla py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-accent-blue">
          Our Online Events
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
            <h3 className="text-3xl font-semibold text-accent-blue mb-6">
              Upcoming Events
            </h3>
            <div className="space-y-6 flex-grow">
              {upcomingEvents.map((webinar, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group h-full p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={webinar.speaker.photo}
                      alt={webinar.speaker.name}
                      className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-accent-blue"
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
                  <a
                    href={webinar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-accent-blue text-white py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
            <h3 className="text-3xl font-semibold text-accent-blue mb-6">
              Past Events
            </h3>
            <div className="space-y-6 flex-grow">
              {pastEvents.map((webinar, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group h-full p-6"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={webinar.speaker.photo}
                      alt={webinar.speaker.name}
                      className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-accent-blue"
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
                  <button
                    disabled
                    className="block w-full text-center bg-gray-400 text-white py-2 rounded-lg shadow cursor-not-allowed"
                  >
                    Registration Closed
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
