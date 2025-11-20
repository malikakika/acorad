import { FaTruck, FaLeaf, FaCalendarCheck } from 'react-icons/fa';

const EventFeaturesSection = () => {
  return (
    <section>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <FaTruck className="text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          <p className="text-2xl font-semibold">Livraison partout au Maroc</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <FaLeaf className="text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          <p className="text-2xl font-semibold">Régimes spéciaux disponibles</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <FaCalendarCheck className="text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
          <p className="text-2xl font-semibold">
            Commande en ligne pour tout événement
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventFeaturesSection;
