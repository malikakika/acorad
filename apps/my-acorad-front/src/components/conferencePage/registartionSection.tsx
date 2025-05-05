import React, { useState } from 'react';
import PaymentModal from './paymentModal';

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: '',
    galaDinner: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [amountToPay, setAmountToPay] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
        setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const getPrice = () => {
    const isEarlyBird = new Date() <= new Date('2025-09-05');
    let amount = '';

    switch (formData.category) {
      case 'International Presenter':
        amount = isEarlyBird ? '100 USD' : '150 USD';
        break;
      case 'Local Presenter':
        amount = isEarlyBird ? '1000 DH' : '1500 DH';
        break;
      case 'PhD Student (Local)':
        amount = isEarlyBird ? '700 DH' : '900 DH';
        break;
      case 'PhD Student (International)':
        amount = isEarlyBird ? '70 USD' : '90 USD';
        break;
      case 'Observer':
        amount = '200 DH';
        break;
      default:
        amount = 'N/A';
    }

    if (formData.galaDinner) {
      amount += isEarlyBird ? ' + 300 DH / 30 USD (Gala)' : ' + 400 DH / 40 USD (Gala)';
    }

    return amount;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const total = getPrice();
    setAmountToPay(total);
    setShowModal(true);

    try {
      await fetch('https://sheetdb.io/api/v1/2qouh2n2091hi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData }),
      });

      setFormData({ firstName: '', lastName: '', email: '', category: '', galaDinner: false });
    } catch (err) {
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <section
    id="conference-form"
    className="py-20 px-6 sm:px-12 lg:px-32 bg-white"
    role="region"
    aria-label="Registration form"
  >      <h2 className="text-2xl sm:text-3xl font-bold text-dark-purple text-center mb-12">
        Registration Fee Details
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        <div className="text-sm text-gray-700 space-y-6">
          <p>
            All conference participants must pay the registration fee. For each paper,
            at least one author must attend and pay. Delegates can choose any of the
            options given below.
          </p>

          <div className="bg-vanilla p-4 rounded shadow">
            <h4 className="font-semibold text-dark-purple mb-2">Deadlines</h4>
            <ul className="space-y-1">
              <li><strong>Early Bird:</strong> September 5, 2025</li>
              <li><strong>Regular:</strong> October 1, 2025</li>
            </ul>
          </div>

          <table className="w-full text-left text-xs sm:text-sm border mt-4">
            <thead className="bg-accent-blue text-white">
              <tr>
                <th className="p-2">Category</th>
                <th className="p-2">Early Bird</th>
                <th className="p-2">Regular</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              <tr><td className="p-2">International Presenter</td><td className="p-2">100 USD</td><td className="p-2">150 USD</td></tr>
              <tr><td className="p-2">Presenter (Local)</td><td className="p-2">1000 DH</td><td className="p-2">1500 DH</td></tr>
              <tr><td className="p-2">PhD Students (Local)</td><td className="p-2">700 DH</td><td className="p-2">900 DH</td></tr>
              <tr><td className="p-2">PhD Students (International)</td><td className="p-2">70 USD</td><td className="p-2">90 USD</td></tr>
              <tr><td className="p-2">Observer</td><td className="p-2">200 DH</td><td className="p-2">200 DH</td></tr>
              <tr><td className="p-2">GALA DINNER</td><td className="p-2">300 DH / 30 USD</td><td className="p-2">400 DH / 40 USD</td></tr>
            </tbody>
          </table>

          <div className="bg-vanilla p-4 rounded shadow">
            <h4 className="font-semibold text-dark-purple mb-2">Bank Details</h4>
            <p><strong>Bank:</strong> BMCE Bank</p>
            <p><strong>Account Title:</strong> Academy of Educational Research and Development PLT</p>
            <p><strong>Account :</strong>  011330000001210006612229</p>
          </div>

          <div className="bg-vanilla p-4 rounded shadow">
            <h4 className="font-semibold text-dark-purple mb-2">Registration Includes</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Admission to scientific sessions</li>
              <li>Exhibition and poster viewing</li>
              <li>All conference materials</li>
              <li>Tea / Coffee and Lunch</li>
              <li>Certificate of Attendance</li>
              <li>City Tour</li>
            </ul>
          </div>

          <div className="bg-red-50 text-red-800 p-4 rounded shadow border border-red-200">
            <h4 className="font-semibold mb-2">Notice & Cancellation Policy</h4>
            <p className="text-sm mb-2">Extra paper fee applies only to payments made by the deadline.</p>
            <p className="text-sm">Registration fees are non-refundable in case of non-attendance.</p>
          </div>
        </div>


        <div className="bg-vanilla p-6 sm:p-8 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-dark-purple mb-4">Register Now</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Participant Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              >
                <option value="">Select Category</option>
                <option>International Presenter</option>
                <option>Local Presenter</option>
                <option>PhD Student (Local)</option>
                <option>PhD Student (International)</option>
                <option>Observer</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="galaDinner"
                checked={formData.galaDinner}
                onChange={handleChange}
              />
              <label className="text-sm">I want to attend the Gala Dinner</label>
            </div>
            <button
              type="submit"
              className="bg-accent-blue hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
        <PaymentModal
        show={showModal}
        onClose={() => setShowModal(false)}
        total={amountToPay}
      />
      </div>
    </section>
  );
};

export default RegistrationSection;
