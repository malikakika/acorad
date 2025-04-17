import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string(),
  country: yup.string(),
  university: yup.string(),
  address: yup.string(),
  group_members: yup.string(),
  reference_number: yup.string(),
  how_did_you_know: yup.string()
});

const FormBootcamp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any) => {
    const response = await fetch('https://sheetdb.io/api/v1/dnma43q01n233', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })
    });

    if (response.ok) {
      toast.success('✅ Inscription envoyée avec succès ! 📎 Veuillez envoyer votre reçu à : info@pacorad.com', {
        position: 'top-center',
        autoClose: 5000,
      });
      reset();
    } else {
      toast.error('❌ Échec de l’envoi. Veuillez réessayer.', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('full_name')} type="text" placeholder="Full Name *" className="w-full p-3 border rounded" />
        <p className="text-red-500 text-sm">{errors.full_name?.message}</p>

        <input {...register('email')} type="email" placeholder="Email Address *" className="w-full p-3 border rounded" />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <input {...register('phone')} type="text" placeholder="Phone Number" className="w-full p-3 border rounded" />
        <input {...register('country')} type="text" placeholder="Country" className="w-full p-3 border rounded" />
        <input {...register('university')} type="text" placeholder="University" className="w-full p-3 border rounded" />
        <input {...register('address')} type="text" placeholder="Street Address" className="w-full p-3 border rounded" />
        <textarea {...register('group_members')} placeholder="If group of 3: Names, Emails, Phones" className="w-full p-3 border rounded"></textarea>
        <input {...register('reference_number')} type="text" placeholder="Receipt / Reference / Cheque Number" className="w-full p-3 border rounded" />
        <input {...register('how_did_you_know')} type="text" placeholder="How did you know about Acorad?" className="w-full p-3 border rounded" />

        <button type="submit" className="bg-primary-blue text-white font-bold px-6 py-3 rounded hover:bg-dark-purple transition-transform transform hover:scale-105">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormBootcamp;
