const Contact = () => {
  const handleContactClick = () => {
    const mailtoLink = 'mailto:contact@acoradacademy.com';
    window.location.href = mailtoLink;
  };
  return (
    <section
      id="contact"
      className="bg-primary-blue text-light-gray py-20 animate-fade-in"
    >
      <div className="container mx-auto text-center px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">
          Not sure where to begin?
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8">
          Get a free consultation with one of our experts at Acorad and start
          your journey to success!
        </p>
        <button
          onClick={handleContactClick}
          className="bg-vanilla text-dark-purple font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105"
        >
          Contact us
        </button>
      </div>
    </section>
  );
};

export default Contact;
