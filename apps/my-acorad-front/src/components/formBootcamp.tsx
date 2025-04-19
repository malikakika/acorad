import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationSuccessModal from './registrationSuccessModal';

const schema = yup.object().shape({
  registration_type: yup.string().required('Please select a registration type'),
  full_name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  country: yup.string(),
  university: yup.string(),
  address: yup.string().required('Address is required'),
  reference_number: yup.string(),
  how_did_you_know: yup.string(),
  group_members: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      phone: yup.string().required('Phone number is required'),
    })
  ),
});

const FormBootcamp = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [showGroup, setShowGroup] = useState(false);
  const [selectedSource, setSelectedSource] = useState('');
  const [otherSource, setOtherSource] = useState('');
  const [showPopup, setShowPopup] = useState(false);
const [finalPrice, setFinalPrice] = useState('');


  const { fields, append, remove } = useFieldArray({
    control,
    name: 'group_members',
  });

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue transition duration-200';

    const onSubmit = async (data: any) => {
        const formattedGroupMembers =
          data.group_members && data.group_members.length > 0
            ? data.group_members
                .map(
                  (member: any, i: number) =>
                    `${i + 1}) ${member.name} - ${member.email} - ${member.phone}`
                )
                .join('\n')
            : '';
      
        const dataToSend = {
          registration_type: data.registration_type,
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          country: data.country,
          university: data.university,
          address: data.address,
          reference_number: data.reference_number,
          how_did_you_know:
            selectedSource === 'Other' ? otherSource : selectedSource,
          group_members: formattedGroupMembers,
        };
      
        try {
          const response = await fetch('https://sheetdb.io/api/v1/dnma43q01n233', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: dataToSend }),
          });
      
          if (response.ok) {
            // 💰 Calcul du prix
            let total = 0;
            const type = data.registration_type;
            const groupSize = data.group_members?.length || 0;
      
            if (type === 'Early Bird Registration') {
              total = 8500;
            } else if (type === 'Regular Registration') {
              total = 10000;
            } else if (type === 'Group Registration') {
              const totalMembers = groupSize + 1;
              total = 9500 * totalMembers;
              if (totalMembers >= 3) {
                total = total * 0.95;
              }
            }
      
            setFinalPrice(`${total.toFixed(2)} MAD`);
            setShowPopup(true);
      
            toast.success('✅ Registration successfully submitted!', {
              position: 'top-center',
              autoClose: 3000,
            });
      
            reset();
            setShowGroup(false);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-accent-blue">
          Bootcamp Registration Form
        </h2>

        {/* Registration Type */}
        <div className="space-y-2">
          <p className="font-semibold">Select Registration Type *</p>
          {['Early Bird Registration', 'Regular Registration', 'Group Registration'].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="radio"
                value={type}
                {...register('registration_type')}
                onClick={() => setShowGroup(type === 'Group Registration')}
              />
              <span>{type}</span>
            </label>
          ))}
          <p className="text-sm text-red-500 mt-1">{errors.registration_type?.message}</p>
        </div>

        {/* Personal info */}
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

        <input
          {...register('phone')}
          type="text"
          placeholder="Phone Number"
          className={inputClass}
        />

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

        {/* Reference + Reference Number (side by side) */}
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

        {/* Group Members */}
        {showGroup &&
          fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-gray-200 p-5 rounded-2xl shadow-sm bg-white space-y-4"
            >
              <h4 className="font-semibold text-lg text-accent-blue">
                Member {index + 1}
              </h4>
              <input
                {...register(`group_members.${index}.name`)}
                type="text"
                placeholder="Name"
                className={inputClass}
              />
              <p className="text-sm text-red-500 mt-1">
                {errors?.group_members?.[index]?.name?.message}
              </p>

              <input
                {...register(`group_members.${index}.email`)}
                type="email"
                placeholder="Email"
                className={inputClass}
              />
              <p className="text-sm text-red-500 mt-1">
                {errors?.group_members?.[index]?.email?.message}
              </p>

              <input
                {...register(`group_members.${index}.phone`)}
                type="text"
                placeholder="Phone"
                className={inputClass}
              />
              <p className="text-sm text-red-500 mt-1">
                {errors?.group_members?.[index]?.phone?.message}
              </p>

              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 underline text-sm"
              >
                ❌ Remove this member
              </button>
            </div>
          ))}

        {showGroup && (
          <button
            type="button"
            onClick={() => append({ name: '', email: '', phone: '' })}
            className="text-blue-600 underline mt-2"
          >
            ➕ Add another member
          </button>
        )}

        {/* Source */}
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
      <RegistrationSuccessModal
  show={showPopup}
  onClose={() => setShowPopup(false)}
  total={finalPrice}
/>

    </>
  );
};

export default FormBootcamp;
