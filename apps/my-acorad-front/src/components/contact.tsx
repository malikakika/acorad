
const Contact = () => {
  const handleContactClick = () => {
    const mailtoLink = "mailto:ton-email@example.com";
    window.location.href = mailtoLink; 
  };

  return (
    <section id="contact" className="bg-primary-blue text-light-gray py-20 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Contactez-nous</h2>
        <p className="text-lg mb-8">Pour toute question ou demande.</p>
        
        <button 
          onClick={handleContactClick} 
          className="bg-accent-green text-light-gray py-3 px-8 rounded-lg transition duration-300 hover:bg-accent-blue transform hover:scale-105"
        >
          Contactez-nous
        </button>
        
      
      </div>
    </section>
  );
};

export default Contact;
