import React from 'react';
import FormBootcamp from '../components/formBootcamp';
import heroImage from '../assets/bootcampHero.jpg';
import trainer from '../assets/tariqAhmed.jpeg';
import { Link } from 'react-scroll';
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

const Bootcamp = () => {
  return (
    <div>
      <section
        className="relative h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-6 sm:px-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white">
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
            className="inline-block bg-accent-blue text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-primary-blue transition-all cursor-pointer"
          >
            Register Now
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-32 text-center bg-white">
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

      <section className="bg-vanilla py-16 px-6 sm:px-12 lg:px-32">
        <h2 className="text-3xl font-bold text-primary-blue text-center mb-10">
          Program Highlights
        </h2>
        <div className="grid gap-8 md:grid-cols-2 text-lg text-gray-700">
          <div>
            <div className="flex items-center gap-3 mb-2 text-primary-blue">
              <FaHandshake className="text-xl" />
              <h3 className="font-semibold text-lg">
                Unique Interactive Sessions
              </h3>
            </div>
            <p>
              Engaging activities designed to spark creativity and
              entrepreneurial thinking.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 text-primary-blue">
              <FaChalkboardTeacher className="text-xl" />
              <h3 className="font-semibold text-lg">
                Inspiring Experiential Learning
              </h3>
            </div>
            <p>Curriculum delivered by dynamic and passionate instructors.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 text-primary-blue">
              <FaUserFriends className="text-xl" />
              <h3 className="font-semibold text-lg">Work With Mentors</h3>
            </div>
            <p>
              Collaborate with experienced entrepreneurs and industry experts.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 text-primary-blue">
              <FaBullseye className="text-xl" />
              <h3 className="font-semibold text-lg">Main Aims</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>Support postgraduate students in research analysis.</li>
              <li>Help new lecturers produce impactful academic papers.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 text-primary-blue">
              <FaUsers className="text-xl" />
              <h3 className="font-semibold text-lg">Target Audience</h3>
            </div>
            <ul className="list-disc list-inside">
              <li>
                Lecturers and postgraduate students in higher institutions.
              </li>
              <li>Aspiring researchers preparing for empirical work.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-32 bg-white">
        <h2 className="text-3xl font-bold text-primary-blue text-center mb-10">
          What’s Included
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-800">
          <ul className="space-y-3">
            <li>
              <FaPlane className="inline mr-2 text-primary-blue" /> Round Air
              Ticket
            </li>
            <li>
              <FaHotel className="inline mr-2 text-primary-blue" /> Six-Day
              Hotel Accommodation
            </li>
            <li>
              <FaUtensils className="inline mr-2 text-primary-blue" /> Daily
              Lunch + 2 Coffee Breaks
            </li>
            <li>
              <FaChalkboardTeacher className="inline mr-2 text-primary-blue" />{' '}
              One Week Academic Program
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <FaBook className="inline mr-2 text-primary-blue" /> Classroom
              Materials
            </li>
            <li>
              <FaCertificate className="inline mr-2 text-primary-blue" />{' '}
              Attendance Certificate
            </li>
            <li>
              <FaShip className="inline mr-2 text-primary-blue" /> Cruise Dinner
              + Welcome Dinner
            </li>
            <li>
              <FaCity className="inline mr-2 text-primary-blue" /> Istanbul City
              Tour
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <FaShuttleVan className="inline mr-2 text-primary-blue" /> Shuttle
              Hotel ↔ Venue
            </li>
            <li>
              <FaShuttleVan className="inline mr-2 text-primary-blue" /> Airport
              Transportation
            </li>
          </ul>
        </div>
      </section>
      <section className="py-16 px-6 sm:px-12 lg:px-32 bg-accent-blue text-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Your Trainer
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-start gap-10">
          <div className="w-full h-[480px] lg:h-[560px]">
            <img
              src={trainer}
              alt="Dr Tariq Ahmed"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="text-lg space-y-5">
            <h3 className="text-2xl font-semibold">Tariq Ahmed (Ph.D)</h3>
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

      <section className="bg-white py-20 px-6 sm:px-12 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-blue text-center mb-10">
            Payment & Cancellation
          </h2>
          <div className="bg-vanilla p-8 rounded-xl shadow-md border border-gray-200 space-y-6 text-lg text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center mb-3">
                <FaMoneyCheckAlt className="mr-2" /> Payment Method
              </h3>
              <p>
                Payment must be completed upon registration by international or
                national bank transfer. Please send confirmation of payment to{' '}
                <a
                  href="mailto:acorad.academy@gmail.com"
                  className="text-blue-600 underline"
                >
                  acorad.academy@gmail.com
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center mb-3">
                <FaUniversity className="mr-2" /> Bank Account Details
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Bank Name:</strong> BMCE Bank
                </li>
                <li>
                  <strong>Account Number:</strong> 011330000001210006612229
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue flex items-center mb-3">
                <FaShieldAlt className="mr-2" /> Security Notice
              </h3>
              <p className="text-sm text-gray-600">
                Always double-check the account details before making a
                transfer. Do not share your banking credentials. For any
                questions, contact us directly.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-blue mb-3">
                Cancellation Policy
              </h3>
              <p>
                ❌ A 50% cancellation fee applies if cancelled 14+ days prior to
                the event.
                <br />
                ❌ No refunds for cancellations less than 7 days before the
                event.
                <br />✅ Substitutions are welcome at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-vanilla to-white ">
        <h2 className="text-4xl font-bold text-primary-blue text-center mb-14">
          Pricing
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-2">Early Bird</h3>
            <p className="text-3xl font-extrabold mb-2">8500DH</p>
            <p className="text-sm text-gray-500 mb-4 italic">
              Until 21st June 2024
            </p>
            <p className="text-base text-gray-700">
              Save with early registration
            </p>
          </div>
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-2">Regular</h3>
            <p className="text-3xl font-extrabold mb-2">10000DH</p>
            <p className="text-sm text-gray-500 mb-4 italic">
              Until 2nd July 2024
            </p>
            <p className="text-base text-gray-700">Standard fee</p>
          </div>
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border-t-4 border-green-500 hover:shadow-2xl transition-all duration-300">
            <span className="absolute -top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
              Best Value
            </span>
            <h3 className="text-2xl font-semibold mb-2">Group of 3</h3>
            <p className="text-3xl font-extrabold mb-2">5% OFF / member</p>
            <p className="text-sm text-gray-500 mb-4 italic">
              Min. 3 participants
            </p>
            <p className="text-base text-gray-700">
              Ideal for colleagues or friends
            </p>
          </div>
        </div>
      </section>

      <section
        id="bootcamp-form"
        className="py-20 px-6 sm:px-12 lg:px-32 bg-white"
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
