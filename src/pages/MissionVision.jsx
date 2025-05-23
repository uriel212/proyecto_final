import { useState } from "react";
import MainHeader from "../components/MainHeader";

// FlipCard component: uses the entire card as a toggle to flip between front (image + title)
// and back (text content only).
const FlipCard = ({ image, title, children }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(prev => !prev);

  return (
    <div className="w-full md:w-1/2 h-[500px]" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-700 cursor-pointer"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d"
        }}
        onClick={toggleFlip}
      >
        {/* Front Side: image with title at bottom */}
        <div
          className="absolute inset-0 rounded-xl glass-card overflow-hidden hover:shadow-lg hover:shadow-neon/40 transition-all"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            className="hover:blur-sm w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto px-4 text-center flex justify-center">
            <span className="bg-glass font-bold text-2xl text-cyber px-3 py-1 rounded">
              {title}
            </span>
          </div>
        </div>

        {/* Back Side: text content only */}
        <div
          className="absolute inset-0 bg-neutral-900/80 rounded-xl glass-card hover:shadow-lg hover:shadow-neon/20 p-8 overflow-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="flex flex-col items-center justify-center overflow-auto">
            <h2 className='text-2xl font-bold mb-4 text-cyber flex-shrink-0'>{title}</h2>
            <div className="text-gray-100 whitespace-pre-line">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionVision = () => {
  const title = "Proyecto Final";
  const footer_hero =
    "Ingeniería en Sistemas | Vespertina | Sección A";

  const mission =
    "Formar, en niveles de excelencia académica y de acuerdo con las necesidades y demandas de la sociedad, profesionales, investigadores, técnicos y docentescientíficamente competentes, éticamente responsables y socialmente abiertos al cambio progresista, mediante el desarrollo integrado de la docencia, la investigación y el servicio a la comunidad, a fin que ésta tenga la oportunidad de participar de los beneficios de la ciencia, la tecnología y la cultura. Asimismo, que sus graduados sean capaces de conservar, acrecentar y difundir la cultura universal, afirmando los valores propios e inmersos en el proceso productivo del país, y que contribuyan con espíritu crítico a la solución de los problemas nacionales.";

  const vision =
    "Ser una institución de educación superior altamente competitiva, líder en su género, innovadora y creadora de conocimientos científicos y tecnológicos, en la que sus educandos alcancen una formación integral, armónica y potencien sus aptitudes y capacidades, en un ambiente de libertad y aceptación de los supremos valores del cristianismo. Y que sus egresados, sean capaces de asumir los desafíos del mundo contemporáneo y de una sociedad cambiante, comprometidos con el desarrollo económico, social, político y cultural del país, en permanente interacción con el entorno nacional, con renovada vocación de servicio y espíritu de solidaridad.";

  return (
    <>
      <MainHeader title={title} footer_hero={footer_hero} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <FlipCard
            image="/img/MISION2V.webp" // replace with your mission image
            title="Misión"
          >
            {mission}
          </FlipCard>
          <FlipCard
            image="/img/VISION2V.webp" // replace with your vision image
            title="Visión"
          >
            {vision}
          </FlipCard>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
