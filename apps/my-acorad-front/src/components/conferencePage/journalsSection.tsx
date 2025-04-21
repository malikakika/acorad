


import book1 from '../../assets/book1.jpg';
import book2 from '../../assets/book2.jpeg';
import book3 from '../../assets/book3.jpeg';
import book4 from '../../assets/book4.jpeg';
import book5 from '../../assets/book5.png';
const books = [
    {
      image: book1,
      title: ' International Journal of Financial Studies',
      impact: 'Impact Factor (2.1)',
    },
    {
      image: book2,
      title: 'Journal of Financial Reporting and Accounting',
      impact: 'Impact Factor (3.3)',
    },
    {
      image: book3,
      title: 'Global Finance Journal',
      impact: 'Impact Factor (5.5)',
    },
    {
      image: book4,
      title: 'International Journal of Emerging Market',
      impact: 'Impact Factor (2.48)',
    },
    {
      image: book5,
      title: 'Journal of International Financial Management and Accounting',
      impact: 'Impact Factor (1.47)',
      supporting: true,
    },
   
  ];

const JournalsSection = () => {
    return (
    <section className="py-20 px-4 sm:px-8 lg:px-20 bg-white">
<h2 className="text-2xl sm:text-3xl font-bold text-dark-purple text-center mb-4">
  Journals Indexed in the Web of Science-Core Collection
</h2>
<p className="text-sm text-gray-600 text-center mb-12">
  (More journals are coming soon...)
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {books.map((book, idx) => (
    <div
      key={idx}
      className=" rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
    >
      {book.supporting && (
        <span className="text-xs text-accent-blue font-semibold mb-2">
          Supporting Journal
        </span>
      )}
      <img
        src={book.image}
        alt={book.title}
        className="w-56 h-56 object-contain mb-4"
      />
      
      <p className="text-sm text-gray-600 mb-1">{book.impact}</p>
      <h3 className="text-sm font-semibold text-dark-purple leading-snug">
        {book.title}
      </h3>
    </div>
  ))}
</div>
</section>

);
};

export default JournalsSection;