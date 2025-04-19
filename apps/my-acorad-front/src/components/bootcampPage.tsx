import React from 'react';
import { Link } from 'react-scroll';
import FormBootcamp from '../components/formBootcamp';
import heroImage from '../assets/bootcampHero.jpg';
import trainer from '../assets/tariqAhmed.jpeg';
import {
  FaHandshake,
  FaChalkboardTeacher,
  FaUserFriends,
  FaBullseye,
  FaUsers,
  FaPlane,
  FaHotel,
  FaUtensils,
  FaBook,
  FaCertificate,
  FaShip,
  FaCity,
  FaShuttleVan,
  FaMoneyCheckAlt,
  FaUniversity,
  FaShieldAlt,
} from 'react-icons/fa';

const includedItems = [
  { icon: FaPlane, label: 'Round Air Ticket' },
  { icon: FaHotel, label: 'Six-Day Hotel Accommodation' },
  { icon: FaUtensils, label: 'Daily Lunch + 2 Coffee Breaks' },
  { icon: FaChalkboardTeacher, label: 'One Week Academic Program' },
  { icon: FaBook, label: 'Classroom Materials' },
  { icon: FaCertificate, label: 'Attendance Certificate' },
  { icon: FaShip, label: 'Cruise Dinner + Welcome Dinner' },
  { icon: FaCity, label: 'Istanbul City Tour' },
  { icon: FaShuttleVan, label: 'Shuttle Hotel ↔ Venue' },
  { icon: FaShuttleVan, label: 'Airport Transportation' },
];

const Bootcamp = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 sm:px-10"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="region"
        aria-label="Bootcamp hero banner"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white animate-fade-in-up motion-reduce:transition-none">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Entrepreneurship and Business Start-up Bootcamp
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-6">
            21 and 22 July 2024
          </p>
          <Link
            to="bootcamp-form"
            smooth={true}
            duration={500}
            offset={-50}
            className="inline-block bg-accent-blue text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-primary-blue transition-all cursor-pointer motion-reduce:transition-none"
            role="button"
            aria-label="Register for the bootcamp"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Course Description */}
      <section
        className="py-16 px-6 sm:px-12 lg:px-32 text-center bg-white"
        role="region"
        aria-label="Bootcamp description"
      >
        <h2 className="text-3xl font-bold text-primary-blue mb-4">
          Course Description
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          This unique bootcamp provides an immersive learning experience focused
          on developing entrepreneurial mindsets and competencies. Engage with
          experts, explore real-world case studies, and boost your potential to
          launch and grow your business.
        </p>
      </section>

      {/* Program Highlights */}
      <section
        className="bg-vanilla py-16 px-6 sm:px-12 lg:px-32"
        role="region"
        aria-label="Bootcamp highlights"
      >
        <h2 className="text-3xl font-bold text-primary-blue text-center mb-10">
          Program Highlights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 text-lg text-gray-700">
          {[
            {
              icon: <FaHandshake className="text-xl" aria-hidden="true" />,
              title: 'Unique Interactive Sessions',
              desc: 'Engaging activities designed to spark creativity and entrepreneurial thinking.',
            },
            {
              icon: (
                <FaChalkboardTeacher className="text-xl" aria-hidden="true" />
              ),
              title: 'Inspiring Experiential Learning',
              desc: 'Curriculum delivered by dynamic and passionate instructors.',
            },
            {
              icon: <FaUserFriends className="text-xl" aria-hidden="true" />,
              title: 'Work With Mentors',
              desc: 'Collaborate with experienced entrepreneurs and industry experts.',
            },
            {
              icon: <FaBullseye className="text-xl" aria-hidden="true" />,
              title: 'Main Aims',
              desc: (
                <ul className="list-disc list-inside">
                  <li>Support postgraduate students in research analysis.</li>
                  <li>Help new lecturers produce impactful academic papers.</li>
                </ul>
              ),
            },
            {
              icon: <FaUsers className="text-xl" aria-hidden="true" />,
              title: 'Target Audience',
              desc: (
                <ul className="list-disc list-inside">
                  <li>
                    Lecturers and postgraduate students in higher institutions.
                  </li>
                  <li>Aspiring researchers preparing for empirical work.</li>
                </ul>
              ),
            },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-2 text-primary-blue">
                {item.icon}
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <div>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section
        className="py-16 px-6 sm:px-12 lg:px-32 bg-white"
        role="region"
        aria-label="Bootcamp benefits"
      >
        <h2 className="text-3xl font-bold text-primary-blue text-center mb-10">
          What’s Included
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-800">
          {includedItems.map(({ icon: Icon, label }, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Icon className="text-primary-blue" aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Trainer */}
      <section
        className="py-16 px-6 sm:px-12 lg:px-32 bg-gradient-to-br from-accent-blue to-dark-purple text-white"
        role="region"
        aria-label="Meet your trainer"
      >
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
          Meet Your Trainer
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center gap-10 animate-fade-in-up motion-reduce:transition-none">
          {/* Image + LinkedIn */}
          <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
            <div className="w-full h-[480px] lg:h-[560px]">
              <img
                src={trainer}
                alt="Portrait of Dr. Tariq Ahmed"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 ring-4 ring-white/10 motion-reduce:transition-none"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/tariq-ahmed-07772782/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-soft-yellow underline transition-colors duration-300"
              aria-label="View Dr. Tariq Ahmed’s LinkedIn profile"
            >
              👉 View Dr. Tariq Ahmed on LinkedIn
            </a>
          </div>

          {/* Texte bio */}
          <div className="text-lg space-y-6 leading-relaxed text-white/90">
            <h3 className="text-3xl font-bold text-white">
              Dr <span className="text-soft-yellow">Tariq Ahmed</span> (Ph.D)
            </h3>

            <p>
              <strong>Assistant Professor</strong> at Rabat Business School,
              College of Management, International University of Rabat.
            </p>

            <p>
              Dr Tariq Ahmed previously served as Associate Professor and Dean,
              Faculty of Management Sciences at BUITEMS, Quetta, Pakistan. He
              holds a Ph.D. in Entrepreneurship and Innovation from the
              University of Malaya, Malaysia.
            </p>

            <p>
              He has taught Entrepreneurship, Statistics, and Research Methods
              at both undergraduate and postgraduate levels. Over the years,
              Entrepreneurship and Strategic Management have become his true
              passion.
            </p>

            <p>
              As a trainer and consultant in entrepreneurship development, Dr
              Ahmed has designed several entrepreneurial modules and teaches at
              Rabat Business School. He works with incubation centers across
              universities globally, mentoring and training future
              entrepreneurs.
            </p>

            <p>
              He regularly conducts international bootcamps focused on
              developing entrepreneurial mindset and competencies through
              experiential learning, alongside top academics, industry leaders,
              and mentors. He has a proven track record in entrepreneurship and
              mergers.
            </p>

            <p>
              Dr Ahmed is an expert in statistical analysis, using tools like{' '}
              <strong>SPSS, SEM AMOS, and Smart PLS</strong>. He trained under
              Professor Joseph Hair and is a certified instructor in Structural
              Equation Modeling. He supervises MS and PhD students worldwide and
              has published in top-tier journals such as the{' '}
              <em>Journal of Retailing and Consumer Services</em>,{' '}
              <em>International Journal of Management Education</em>, and many
              others.
            </p>
          </div>
        </div>
      </section>

      {/* Payment & Cancellation */}
      <section
        className="bg-white py-20 px-6 sm:px-12 lg:px-32"
        role="region"
        aria-label="Payment and cancellation policy"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-blue text-center mb-12">
            Payment & Cancellation
          </h2>

          <div className="bg-gradient-to-br from-vanilla to-white p-10 rounded-3xl shadow-xl border border-gray-200 space-y-8 text-[1.05rem] text-gray-800 transition-all">
            {/* Payment Method */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center">
                <FaMoneyCheckAlt className="mr-2 text-accent-blue text-xl" />
                Payment Method
              </h3>
              <p>
                Please pay via bank transfer and confirm at{' '}
                <a
                  href="mailto:contact@acoradacademy.com"
                  aria-label="Send a payment confirmation to Acorad by email"
                >
                  contact@acoradacademy.com
                </a>
                .
              </p>
            </div>

            {/* Bank Info */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center">
                <FaUniversity className="mr-2 text-yellow-600 text-xl" />
                Bank Account
              </h3>
              <ul className="list-none space-y-1 pl-1">
                <li>
                  🏦 <strong>Bank:</strong> BMCE Bank
                </li>
                <li>
                  🧾 <strong>Account:</strong> 011330000001210006612229
                </li>
              </ul>
            </div>

            {/* Security Notice */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center">
                <FaShieldAlt className="mr-2 text-red-500 text-xl" />
                Security Notice
              </h3>
              <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg border border-red-200">
                ⚠️ Always verify account info before transferring. Never share
                your credentials. If in doubt, contact us.
              </p>
            </div>

            {/* Cancellation */}
            <div className="space-y-2 border-t pt-4">
              <h3 className="text-2xl font-semibold text-primary-blue">
                Cancellation Policy
              </h3>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>
                  ❌ 50% cancellation fee if canceled ≥ 14 days before the
                  event.
                </li>
                <li>❌ No refund if canceled less than 7 days before.</li>
                <li>✅ Participant replacements are allowed at any time.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="bg-gradient-to-b from-vanilla to-white py-20 px-4 sm:px-8"
        role="region"
        aria-label="Pricing details"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-blue text-center mb-16">
          Choose Your Plan
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: 'Early Bird',
              price: '8500 MAD',
              date: 'Until 21st June 2024',
              note: 'Save with early registration',
            },
            {
              title: 'Regular',
              price: '10000 MAD',
              date: 'Until 2nd July 2024',
              note: 'Standard fee',
            },
            {
              title: 'Group of 3',
              price: '5% OFF / member',
              date: 'Min. 3 participants',
              note: 'Ideal for colleagues or friends',
              badge: 'Best Value',
            },
          ].map(({ title, price, date, note, badge }, idx) => (
            <div
              key={idx}
              className={`relative bg-white p-10 rounded-3xl shadow-xl border-t-4      transition-all duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl`}
            >
              {badge && (
                <div
                  className={`absolute -top-4 right-4 bg-accent-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide`}
                >
                  {badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-dark-purple mb-3">
                {title}
              </h3>
              <p className="text-4xl font-extrabold text-primary-blue mb-2">
                {price}
              </p>
              <p className="text-sm text-gray-500 italic mb-6">{date}</p>
              <p className="text-base text-gray-700">{note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section
        id="bootcamp-form"
        className="py-20 px-6 sm:px-12 lg:px-32 bg-white"
        role="region"
        aria-label="Registration form"
      >
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-primary-blue mb-6 text-center">
            Bootcamp Registration Form
          </h2>
          <FormBootcamp />
        </div>
      </section>
    </div>
  );
};

export default Bootcamp;
