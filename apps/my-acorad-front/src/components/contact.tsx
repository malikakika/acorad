
const Contact = () => {
  const handleContactClick = () => {
    const mailtoLink = "mailto:contact@acorad.com";
    window.location.href = mailtoLink; 
  };

  return (
    <section id="contact" className="bg-primary-blue text-light-gray py-20 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Contact us</h2>
        <p className="text-lg mb-8">For your questions and requests</p>
        
        <button 
          onClick={handleContactClick} 
          className="bg-soft-yellow text-dark-purple py-3 px-8 rounded-lg transition duration-300 hover:bg-dark-purple hover:text-soft-yellow transform hover:scale-105"
        >
          Contact us
        </button>
        
      
      </div>
    </section>
  );
};

export default Contact;
