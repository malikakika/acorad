import styles from './conferencePage.module.css';

const keyDates = [
    {
      title: 'July 31, 2025',
      subtitle: 'Research Paper Submission Date',
      details:
        'Submit your original research paper by this date to be considered for peer review and inclusion in the proceedings.',
    },
    {
      title: 'September 5, 2025',
      subtitle: 'Early Bird Registration',
      details:
        'Take advantage of reduced registration rates by completing your conference registration early.',
    },
    {
      title: 'October 20, 2025',
      subtitle: 'Program Final Date',
      details:
        'Final schedule and program details will be announced for all attendees and speakers.',
    },
    {
      title: '13–14 November 2025',
      subtitle: 'Conference Dates',
      details:
        'Join us in Casablanca, Morocco for two days of engaging sessions, networking and innovation showcase.',
    },
  ];
const KeyDateSection = () => {
    return(
<section id="keydates"
className="py-20 px-4 sm:px-8 lg:px-32 bg-white"
>
<h2 className="text-3xl font-extrabold text-center text-dark-purple mb-12">
  Key Dates
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {keyDates.map((item) => (
    <div
      key={item.title}
      className={`group ${styles.perspective} cursor-pointer`}
    >
      <div className={`relative h-60 sm:h-64 w-full ${styles.card3d}`}>
        <div
          className={`bg-vanilla shadow-md flex flex-col items-center justify-center p-4 text-center ${styles['card-face']}`}
        >
          <h4 className="text-xl font-bold text-dark-purple mb-2">
            {item.title}
          </h4>
          <p className="text-gray-700 text-sm font-medium">
            {item.subtitle}
          </p>
        </div>
        <div
          className={`bg-accent-blue text-white shadow-md flex items-center justify-center p-4 text-sm text-center leading-relaxed ${styles['card-face']} ${styles['card-back']}`}
        >
          <p>{item.details}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</section>
    );

};

export default KeyDateSection;