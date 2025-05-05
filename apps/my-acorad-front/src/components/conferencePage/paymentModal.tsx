import React from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
  total: string;
}

const PaymentModal: React.FC<Props> = ({ show, onClose, total }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full space-y-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-dark-purple">🎉 Registration Submitted!</h2>
        <p className="text-gray-700">💰 Amount to Pay:</p>
        <p className="text-xl font-bold text-accent-blue">{total}</p>
        <p className="text-sm text-gray-600">
          Please send your <strong>payment proof</strong> to:
          <br />
          <a
            href={`mailto:contact@acoradacademy.com?subject=Conference Payment&body=Hello,%0A%0AI have completed my registration.%0A%0ATotal: ${total}%0A%0APlease find my payment proof attached.%0A%0AThank you!`}
            className="text-accent-blue underline"
          >
            contact@acoradacademy.com
          </a>
        </p>
        <button
          onClick={onClose}
          className="bg-accent-blue text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
