import { FaBullseye, FaEye } from 'react-icons/fa';
const Vision = () => {
  return (
    <section className="mb-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-primary-blue mb-8 text-center">
        Our Mission and Vision
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <div className="mb-4 text-4xl text-primary-blue">
            <FaBullseye />
          </div>
          <h3 className="text-2xl font-medium text-dark-purple mb-4">
            Mission
          </h3>
          <p className="text-lg text-dark-purple">
            We aim to empower the personnel serving in academic disciplines and
            the corporate sector with knowledge and skills that would markedly
            boost on-the-job productivity and thereby contribute substantively
            to the goals of their organizations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <div className="mb-4 text-4xl text-primary-blue">
            <FaEye />
          </div>
          <h3 className="text-2xl font-medium text-dark-purple mb-4">Vision</h3>
          <p className="text-lg text-dark-purple">
            Create a workforce that delivers their best researchers, corporate
            leaders, and scholars and enables one to identify weaknesses and
            change them into strengths through teaching, guidance, and
            counseling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
