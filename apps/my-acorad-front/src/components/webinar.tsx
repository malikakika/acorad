const Webinar = () => {
    const webinars = [
      {
        title: 'How to complete a systematic literature review using AI',
        image: '/src/assets/images/webinar1.png',
        link: 'https://docs.google.com/forms/d/1CmJSPJvktQY76Mr9rFOb7WtRSkrIbs4Kxxgwk5Uu_VI/edit',
        isUpcoming: true,
        description: 'Our next webinar, titled "AI in Systematic Literature Review," is scheduled for Friday, January 31st, 2025. This engaging session will delve into the transformative role of artificial intelligence in enhancing the systematic literature review process, offering valuable insights and practical applications.'
      },
      {
        title: 'Workshop on Theory-driven research model',
        image: '/src/assets/images/webpasse.png',
        isUpcoming: false,
        description: 'On Saturday, November 16th, at 11:00 AM Morocco time, we held the workshop titled "Workshop on Theory-driven Research Model" on the Google Meet platform. Those who were interested filled out the form to receive a certificate after the training.'
      },
    ];
  
    const upcomingEvents = webinars.filter(event => event.isUpcoming);
    const pastEvents = webinars.filter(event => !event.isUpcoming);
  
    return (
      <section id="event" className="bg-light-gray py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-primary-blue">Our Events</h2>
  
          {/* Events: Upcoming & Past */}
          <div className="flex flex-wrap justify-center  space-x-6">
            
            {/* Upcoming Events */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
              <h3 className="text-3xl font-semibold text-primary-blue mb-4">Upcoming Events</h3>
              <div className="flex space-x-6 overflow-x-auto">
                {upcomingEvents.map((webinar, index) => (
                  <div key={index} className="relative rounded-lg shadow-lg bg-white group overflow-hidden transition-all duration-500 transform hover:scale-105 border-transparent">
                    <div className="relative w-full h-96">
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="absolute top-0 left-0 w-full h-full object-cover" 
                      />
                    </div>
  
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-soft-yellow bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-10 text-accent-blue p-6 z-10">
                      <p className="text-sm mb-4 font-bold text-center" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                        {webinar.description}
                      </p>
                      <a
                        href={webinar.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-accent-blue text-soft-yellow rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                      >
                        S'inscrire
                      </a>
                    </div>
  
                    <h2 className="p-2 text-lg font-semibold text-gray-800 break-words text-center">
                      {webinar.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Past Events */}
            <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
              <h3 className="text-3xl font-semibold text-primary-blue mb-4">Past Events </h3>
              <div className="flex space-x-6 overflow-x-auto">
                {pastEvents.map((webinar, index) => (
                  <div key={index} className="relative rounded-lg shadow-lg bg-white group overflow-hidden transition-all duration-500 transform hover:scale-105 border-transparent">
                    <div className="relative w-full h-96"> {/* Ajustez la hauteur ici aussi */}
                      <img
                        src={webinar.image}
                        alt={webinar.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
  
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-soft-yellow bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-10 text-accent-blue p-6 z-10">
                      <p className="text-sm mb-4 font-bold text-center" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                        {webinar.description}
                      </p>
                    </div>
  
                    <h2 className="p-6 text-lg font-semibold text-gray-800 break-words text-center">
                      {webinar.title}
                    </h2>
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
  