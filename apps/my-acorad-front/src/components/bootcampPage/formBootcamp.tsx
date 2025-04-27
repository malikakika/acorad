import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationSuccessModal from './registrationSuccessModal';

const schema = yup.object().shape({
  registration_type: yup.string().required('Please select a registration type'),
  full_name: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^\+?[0-9\s-]{7,15}$/,
      'Phone number must be valid (digits, optional +, -, spaces)'
    ),
  country: yup.string(),
  university: yup.string(),
  address: yup.string().required('Address is required'),
  reference_number: yup.string(),
  how_did_you_know: yup.string(),
});

export const FormBootcamp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [selectedSource, setSelectedSource] = useState('');
  const [otherSource, setOtherSource] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [finalPrice, setFinalPrice] = useState('');

  const isBeforeDeadline = new Date() <= new Date('2025-05-16');

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue transition duration-200';

  const onSubmit = async (data: any) => {
    const dataToSend = {
      registration_type: data.registration_type,
      full_name: data.full_name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      university: data.university,
      address: data.address,
      reference_number: data.reference_number,
      how_did_you_know: selectedSource === 'Other' ? otherSource : selectedSource,
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/dnma43q01n233', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: dataToSend }),
      });

      if (response.ok) {
        let total = 0;
        const type = data.registration_type;

        if (type === 'Full Package') {
          total = isBeforeDeadline ? 9000 : 10000;
        } else if (type === 'Partial Package') {
          total = isBeforeDeadline ? 4000 : 5000;
        } else if (type === 'Program Package') {
          total = isBeforeDeadline ? 2500 : 3500;
        }

        setFinalPrice(`${total.toFixed(2)} MAD`);
        setShowPopup(true);

        toast.success('🎉 Registration successfully submitted!', {
          position: 'top-center',
          autoClose: 3000,
        });

        reset();
        setSelectedSource('');
        setOtherSource('');
      } else {
        toast.error('❌ Submission failed. Please try again.', {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.error('⚠️ Network error. Please try again.', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        id="bootcamp-form"
        className="py-20 px-6 sm:px-12 lg:px-32 bg-white"
        role="region"
        aria-label="Registration form"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-accent-blue">
            Bootcamp Registration Form
          </h2>

          {isBeforeDeadline && (
            <div className="text-green-800 bg-green-100 border border-green-300 rounded-lg px-4 py-3 text-center text-base font-medium shadow-sm">
              🎁 <strong>Early Bird Discount:</strong> Register before <strong>16 May 2025</strong> and get <strong>1000 MAD OFF</strong> your selected package!
            </div>
          )}

          <div className="space-y-2">
            <p className="font-semibold">Select Registration Type *</p>
            {['Full Package', 'Partial Package', 'Program Package'].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={type}
                  {...register('registration_type')}
                />
                <span>{type}</span>
              </label>
            ))}
            <p className="text-sm text-red-500 mt-1">{errors.registration_type?.message}</p>
          </div>

          <div>
            <input
              {...register('full_name')}
              type="text"
              placeholder="Full Name *"
              className={inputClass}
            />
            <p className="text-sm text-red-500 mt-1">{errors.full_name?.message}</p>
          </div>

          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="Email Address *"
              className={inputClass}
            />
            <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
          </div>

          <div>
            <input
              {...register('phone')}
              type="text"
              placeholder="Phone Number *"
              className={inputClass}
            />
            <p className="text-sm text-red-500 mt-1">{errors.phone?.message}</p>
          </div>

          <input
            {...register('country')}
            type="text"
            placeholder="Country"
            className={inputClass}
          />

          <input
            {...register('university')}
            type="text"
            placeholder="University / Institution"
            className={inputClass}
          />

          <input
            {...register('address')}
            type="text"
            placeholder="Address"
            className={inputClass}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <input
              {...register('reference_number')}
              type="text"
              placeholder="Receipt / Reference / Cheque Number"
              className={inputClass + ' flex-1'}
            />
            <input
              type="text"
              placeholder="Reference"
              className={inputClass + ' flex-1'}
            />
          </div>

          <div className="space-y-2">
            <select
              className={inputClass}
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
            >
              <option value="">-- How did you hear about Acorad? --</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="ChatGPT">ChatGPT</option>
              <option value="Other">Other</option>
            </select>

            {selectedSource === 'Other' && (
              <input
                type="text"
                placeholder="Please specify"
                value={otherSource}
                onChange={(e) => setOtherSource(e.target.value)}
                className={inputClass}
              />
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-primary-blue text-white font-bold px-6 py-3 rounded-xl transition-transform transform hover:scale-105 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <RegistrationSuccessModal
        show={showPopup}
        onClose={() => setShowPopup(false)}
        total={finalPrice}
      />
    </>
  );
};
