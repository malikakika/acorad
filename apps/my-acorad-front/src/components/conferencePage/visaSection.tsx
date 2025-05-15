const VisaInvitationSection = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@acoradacademy.com&su=Visa%20Invitation%20Request&body=Hello,%0A%0AI would like to request a visa invitation letter for the ICDAMI-2025 conference.%0A%0AHere is my information:%0A%0AFull Name: %0APhone Number: %0AEmail: %0AAre you a (Presenter / Observer / Committee Member / Student)?: %0A%0AIf you want to  submit a paper:%0APaper Title: %0APayment Date: %0A%0AInstitution: %0ACountry: %0ANationality: %0ADate of Birth: %0APassport Number: %0AExpiration Date: %0A%0AThank you!`;
  
    return (
      <section className="py-16 px-6 sm:px-12 lg:px-32 bg-vanilla text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-purple mb-6">
            Need a Visa Invitation Letter?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            If you need a visa invitation to attend ICDAMI-2025, please click the button below. A pre-filled email will open in Gmail. Kindly complete all fields before sending.
          </p>
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-accent-blue/90 transition duration-200"
          >
            Request Visa Letter via Gmail
          </a>
        </div>
      </section>
    );
  };
  
  export default VisaInvitationSection;
  