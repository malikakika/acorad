export const PricingSection =()=>{
return(
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
);
};