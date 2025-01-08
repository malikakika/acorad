
const Webinar = () => {
  const webinars = [
    {
      title: 'Webinaire 1: How to complete a systematic literature review using AI ',
      image: '/src/assets/images/webinar1.jpeg',
      link: 'https://forms.gle/VKPsseCC9KQBMxuN6'
    },
    {
      title: 'Webinaire 2: L’Importance de la Transformation Digitale',
      image: '/src/assets/images/webinar2.jpg',
      link: 'https://forms.gle/sampleLink2'
    },
    {
      title: 'Webinaire 3: Comment réussir ses Entretiens',
      image: '/src/assets/images/webinar3.jpg',
      link: 'https://forms.gle/sampleLink3'
    }
  ];

  return (
    <section id="webinars" className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8 text-primary-blue">Nos Webinaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-semibold mt-4 text-primary-blue">{webinar.title}</h3>
              <a href={webinar.link} target="_blank" rel="noopener noreferrer" className="bg-accent-blue text-light-gray py-2 px-6 rounded-lg mt-4 inline-block hover:bg-accent-green transition duration-300">
                S'inscrire
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Webinar;
