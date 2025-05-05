const OurValue = () => {
  return (
    <section className="mb-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-primary-blue mb-8 text-center">
        Our Values
      </h2>

      <div className="flex flex-col sm:flex-row justify-center space-y-12 sm:space-y-0 sm:space-x-12">
        <div className="flex flex-col items-center text-center max-w-md p-10 bg-vanilla rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer">
          <div className="text-dark-purple text-5xl mb-4">
            <i className="fas fa-gavel"></i>
          </div>
          <h3 className="text-2xl font-medium text-dark-purple mb-4">
            Ethics and Integrity
          </h3>
          <p className="text-dark-purple">
            We adhere to the highest ethical standards, ensuring transparency,
            honesty, and fairness in every interaction. Our unwavering
            commitment to integrity places our clients' needs above all,
            fostering trust and respect in all we do.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-md p-10 bg-vanilla rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer">
          <div className="text-dark-purple text-5xl mb-4">
            <i className="fas fa-star"></i>
          </div>
          <h3 className="text-2xl font-medium text-dark-purple mb-4">
            Excellence Through Responsibility
          </h3>
          <p className="text-dark-purple">
            We strive relentlessly to deliver exceptional quality in our
            services, from consulting to workshops. By being objective and
            transaction-oriented, we ensure impactful results while maintaining
            accountability in every step of the process.
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-md p-10 bg-vanilla rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer">
          <div className="text-dark-purple text-5xl mb-4">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="text-2xl font-medium text-dark-purple mb-4">
            Empowerment with Purpose
          </h3>
          <p className="text-dark-purple">
            We are committed to empowering individuals and organizations with
            the resources, skills, and knowledge they need to succeed. Our
            ethical foundation drives us to create meaningful growth and lasting
            impact for all our stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
