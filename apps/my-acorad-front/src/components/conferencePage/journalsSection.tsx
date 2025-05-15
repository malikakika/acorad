import book1 from '../../assets/book1.jpg';
import book2 from '../../assets/book2.jpeg';
import book3 from '../../assets/book3.jpeg';
import book4 from '../../assets/book4.jpeg';
import book5 from '../../assets/book5.png';

const books = [
  {
    image: book1,
    title: 'International Journal of Financial Studies',
    impact: 'Impact Factor: 2.1',
  },
  {
    image: book2,
    title: 'Journal of Financial Reporting and Accounting',
    impact: 'Impact Factor: 3.3',
  },
  {
    image: book3,
    title: 'Global Finance Journal',
    impact: 'Impact Factor: 5.5',
  },
  {
    image: book4,
    title: 'International Journal of Emerging Market',
    impact: 'Impact Factor: 2.48',
  },
  {
    image: book5,
    title: 'Journal of International Financial Management and Accounting',
    impact: 'Impact Factor: 1.47',
    supporting: true,
  },
];

const JournalsSection = () => {
  return (
    <section
      className="py-24 px-4 sm:px-10 lg:px-20 bg-white"
      id="indexed-journals"
      aria-labelledby="journals-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2
            id="journals-heading"
            className="text-3xl sm:text-4xl font-bold text-dark-purple mb-3"
          >
            Journals Indexed in the Web of Science Core Collection
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            More indexed journals will be announced soon.
          </p>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          role="list"
        >
          {books.map((book, idx) => (
            <article
              key={idx}
              className="rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition hover:scale-[1.02] bg-white p-6 text-center flex flex-col items-center"
              role="listitem"
              aria-labelledby={`journal-title-${idx}`}
            >
              {book.supporting && (
                <span className="text-xs font-semibold text-accent-blue mb-2 tracking-wide uppercase">
                  Supporting Journal
                </span>
              )}

              <img
                src={book.image}
                alt={`Cover of ${book.title}`}
                className="w-48 h-48 object-contain mb-4"
                loading="lazy"
              />

              <p className="text-sm text-gray-600 font-medium mb-1">
                {book.impact}
              </p>

              <h3
                id={`journal-title-${idx}`}
                className="text-base font-semibold text-dark-purple leading-snug"
              >
                {book.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalsSection;
