import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  country: yup.string(),
  university: yup.string(),
  address: yup.string().required('adress is required'),
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

    const response = await fetch('https://sheetdb.io/api/v1/dnma43q01n233', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: dataToSend }),
    });

    if (response.ok) {
      toast.success(
        '✅ Registration successfully submitted! 📎 Please send your receipt to: info@pacorad.com',
        {
          position: 'top-center',
          autoClose: 5000,
        }
      );
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

        <input
          {...register('reference_number')}
          type="text"
          placeholder="Receipt / Cheque / Reference Number"
          className={inputClass}
        />

        {/* Add group members */}
        {!showGroup && (
          <button
            type="button"
            onClick={() => setShowGroup(true)}
            className="bg-accent-blue hover:bg-accent-blue/90 text-white font-medium px-4 py-2 rounded-xl transition-all duration-200 shadow-sm"
          >
             Add Group Members
          </button>
        )}

        {showGroup &&
          fields.map((field, index) => (
            <div
              key={field.id}
              className="border border-gray-200 p-5 rounded-2xl shadow-sm bg-white space-y-4"
            >
              <h4 className="font-semibold text-lg text-accent-blue">
                Member {index + 1}
              </h4>
              <div>
                <input
                  {...register(`group_members.${index}.name`)}
                  type="text"
                  placeholder="Name"
                  className={inputClass}
                />
                <p className="text-sm text-red-500 mt-1">
                  {errors?.group_members?.[index]?.name?.message}
                </p>
              </div>

              <div>
                <input
                  {...register(`group_members.${index}.email`)}
                  type="email"
                  placeholder="Email"
                  className={inputClass}
                />
                <p className="text-sm text-red-500 mt-1">
                  {errors?.group_members?.[index]?.email?.message}
                </p>
              </div>

              <div>
                <input
                  {...register(`group_members.${index}.phone`)}
                  type="text"
                  placeholder="Phone"
                  className={inputClass}
                />
                <p className="text-sm text-red-500 mt-1">
                  {errors?.group_members?.[index]?.phone?.message}
                </p>
              </div>

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

        {/* How did you hear about us */}
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
    </>
  );
};

export default FormBootcamp;
