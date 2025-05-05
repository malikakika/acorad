// import trainer from '../../assets/tariqAhmed.jpeg';

//  export const TrainerSection =() =>{ return(<section
//         className="py-16 px-6 sm:px-12 lg:px-32 bg-gradient-to-br from-accent-blue to-dark-purple text-white"
//         role="region"
//         aria-label="Meet your trainer"
//       >
//         <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
//           Meet Your Trainer
//         </h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-10 animate-fade-in-up motion-reduce:transition-none">
//           <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
//             <div className="w-full h-[480px] lg:h-[560px]">
//               <img
//                 src={trainer}
//                 alt="Portrait of Dr. Tariq Ahmed"
//                 className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 ring-4 ring-white/10 motion-reduce:transition-none"
//               />
//             </div>
//             <a
//               href="https://www.linkedin.com/in/tariq-ahmed-07772782/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm font-medium text-white hover:text-soft-yellow underline transition-colors duration-300"
//               aria-label="View Dr. Tariq Ahmed’s LinkedIn profile"
//             >
//               👉 View Dr. Tariq Ahmed on LinkedIn
//             </a>
//           </div>

//           <div className="text-lg space-y-6 leading-relaxed text-white/90">
//             <h3 className="text-3xl font-bold text-white">
//               Dr <span className="text-soft-yellow">Tariq Ahmed</span> (Ph.D)
//             </h3>

//             <p>
//               <strong>Assistant Professor</strong> at Rabat Business School,
//               College of Management, International University of Rabat.
//             </p>

//             <p>
//               Dr Tariq Ahmed previously served as Associate Professor and Dean,
//               Faculty of Management Sciences at BUITEMS, Quetta, Pakistan. He
//               holds a Ph.D. in Entrepreneurship and Innovation from the
//               University of Malaya, Malaysia.
//             </p>

//             <p>
//               He has taught Entrepreneurship, Statistics, and Research Methods
//               at both undergraduate and postgraduate levels. Over the years,
//               Entrepreneurship and Strategic Management have become his true
//               passion.
//             </p>

//             <p>
//               As a trainer and consultant in entrepreneurship development, Dr
//               Ahmed has designed several entrepreneurial modules and teaches at
//               Rabat Business School. He works with incubation centers across
//               universities globally, mentoring and training future
//               entrepreneurs.
//             </p>

//             <p>
//               He regularly conducts international bootcamps focused on
//               developing entrepreneurial mindset and competencies through
//               experiential learning, alongside top academics, industry leaders,
//               and mentors. He has a proven track record in entrepreneurship and
//               mergers.
//             </p>

//             <p>
//               Dr Ahmed is an expert in statistical analysis, using tools like{' '}
//               <strong>SPSS, SEM AMOS, and Smart PLS</strong>. He trained under
//               Professor Joseph Hair and is a certified instructor in Structural
//               Equation Modeling. He supervises MS and PhD students worldwide and
//               has published in top-tier journals such as the{' '}
//               <em>Journal of Retailing and Consumer Services</em>,{' '}
//               <em>International Journal of Management Education</em>, and many
//               others.
//             </p>
//           </div>
//         </div>
//       </section>);
//  }



import {
  FaChalkboardTeacher,
  FaUserTie,
  FaHandHoldingUsd,
  FaRocket,
} from 'react-icons/fa';

export const TrainerSection = () => {
  return (
    <section
      className="py-24 px-6 sm:px-12 lg:px-32 bg-gradient-to-br from-accent-blue to-dark-purple text-white text-center"
      role="region"
      aria-label="Coming soon: Trainers and Mentors"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 animate-fade-in-up">
        Trainers, Mentors, Financers & Entrepreneurs
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10 animate-fade-in-up delay-100">
        <div className="flex flex-col items-center space-y-3">
          <FaChalkboardTeacher className="text-yellow-300 text-5xl drop-shadow-glow animate-bounce" />
          <span className="text-white/90 font-semibold">Trainers</span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <FaUserTie className="text-soft-pink text-5xl drop-shadow-glow animate-bounce delay-200" />
          <span className="text-white/90 font-semibold">Mentors</span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <FaHandHoldingUsd className="text-green-400 text-5xl drop-shadow-glow animate-bounce delay-300" />
          <span className="text-white/90 font-semibold">Financers</span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <FaRocket className="text-orange-300 text-5xl drop-shadow-glow animate-bounce delay-500" />
          <span className="text-white/90 font-semibold">Entrepreneurs</span>
        </div>
      </div>

      <p className="text-xl sm:text-2xl font-medium text-white/80">
        🚀 Coming Soon. Stay Tuned!
      </p>
    </section>
  );
};
