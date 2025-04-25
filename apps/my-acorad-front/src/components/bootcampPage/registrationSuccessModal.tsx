import React from 'react';
import { FaCheckCircle, FaEnvelopeOpenText, FaTimes } from 'react-icons/fa';

interface Props {
  show: boolean;
  onClose: () => void;
  total: string;
}

const RegistrationSuccessModal: React.FC<Props> = ({
  show,
  onClose,
  total,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl max-w-md w-[90%] text-center space-y-6 animate-fade-in">
        <div className="text-green-500 text-5xl flex justify-center">
          <FaCheckCircle />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-primary-blue">
          🎉 Registration Complete!
        </h3>
        <p className="text-lg text-gray-700">Thank you for your submission.</p>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-base font-medium text-dark-purple">
            💰 Total to pay:
          </p>
          <p className="text-xl font-extrabold text-accent-blue">{total}</p>
        </div>

        <p className="text-sm text-gray-600">
          Please send your <strong>payment proof</strong> and receipt to us by
          clicking below:
        </p>
        <div className="flex justify-between items-center mt-6 gap-x-6">

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=contact@acoradacademy.com&su=Bootcamp%20Payment%20Proof&body=Hello,%0A%0AI have completed my registration to the Bootcamp.%0A%0ATotal paid: ${total}%0A%0APlease find my payment proof attached.%0A%0ABest regards,%0A[Your Name]`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-accent-blue text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-accent-blue/90 transition duration-200"
        >
          <FaEnvelopeOpenText className="text-lg" />
          Send Documents
        </a>

        <button
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
        >
          <FaTimes className="text-base" />
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccessModal;
