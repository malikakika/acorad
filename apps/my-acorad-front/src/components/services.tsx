const Services = () => {
  return (
    <section id="services" className="bg-light-gray py-20 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-blue mb-8">
          Our Services
        </h2>
        {/* Adjusting the grid layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Service 1: Training */}
          <div className="bg-gradient-to-r from-primary-blue via-accent-blue to-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Training</h3>
            <p className="text-white text-lg mb-4">
              We offer specialized academic and corporate training programs to
              enhance skills and productivity.
            </p>
          </div>

          {/* Service 2: Consulting */}
          <div className="bg-gradient-to-r from-primary-blue via-accent-blue to-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Consulting</h3>
            <p className="text-white text-lg mb-4">
              Our expert consultants provide strategic insights and solutions
              tailored to your organization's needs and challenges.
            </p>
          </div>

          {/* Service 3: Conferences */}
          <div className="bg-gradient-to-r from-primary-blue via-accent-blue to-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Conferences</h3>
            <p className="text-white text-lg mb-4">
              We organize high-impact conferences that bring together thought
              leaders to share the latest trends and innovations.
            </p>
          </div>

          {/* Service 4: Webinars */}
          <div className="bg-gradient-to-r from-primary-blue via-accent-blue to-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Webinars</h3>
            <p className="text-white text-lg mb-4">
              Our monthly webinars offer valuable insights from industry experts
              on topics related to personal and professional development.
            </p>
          </div>

          {/* Service 5: Bootcamps */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex justify-center">
            <div className="bg-gradient-to-r from-primary-blue via-accent-blue to-dark-purple p-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-white">Bootcamps</h3>
              <p className="text-white text-lg mb-4">
                Our Bootcamps are designed to provide intensive, hands-on
                training for aspiring researchers and new educators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
