import { useState } from "react"
import MainHeader from "../components/MainHeader"

const MissionVision = () => {
  const title = "Proyecto Final"
  const footer_hero = "Introducción a los Sistemas de Cómputo | Ingeniería en Sistemas | Sección A"
  const dynamicContent = [
    {
      cards: [
        {
          title: "React"
        },
        {
          title: "Tailwind CSS"
        },
        {
          title: "HTML"
        }
      ]
    },
    {
      buttons: [
        {
          title: "Get started"
        },
        {
          title: "Learn more"
        }
      ]
    }
  ]
  const mission = "Formar, en niveles de excelencia académica y de acuerdo con las necesidades y demandas de la sociedad, profesionales, investigadores, técnicos y docentescientíficamente competentes, éticamente responsables y socialmente abiertos al cambio progresista, mediante el desarrollo integrado de la docencia, la investigación y el servicio a la comunidad, a fin que ésta tenga la oportunidad de participar de los beneficios de la ciencia, la tecnología y la cultura. n/ Asimismo, que sus graduados sean capaces de conservar, acrecentar y difundir la cultura universal, afirmando los valores propios e inmersos en el proceso productivo del país, y que contribuyan con espíritu crítico a la solución de los problemas nacionales."
  const vision = "Ser una institución de educación superior altamente competitiva, líder en su género, innovadora y creadora de conocimientos científicos y tecnológicos, en la que sus educandos alcancen una formación integral, armónica y potencien sus aptitudes y capacidades, en un ambiente de libertad y aceptación de los supremos valores del cristianismo. Y que sus egresados, sean capaces de asumir los desafíos del mundo contemporáneo y de una sociedad cambiante, comprometidos con el desarrollo económico, social, político y cultural del país, en permanente interacción con el entorno nacional, con renovada vocación de servicio y espíritu de solidaridad."
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <MainHeader title={title} footer_hero={footer_hero} dynamicContent={dynamicContent} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Mission Card */}
          <div
            className={`bg-white rounded-xl shadow-lg p-8 w-full md:w-1/2 h-full md:h-[350px] flex flex-col justify-between transform transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setAnimate(true)}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Misión</h2>
            <p className="text-gray-700">
              {mission}
            </p>
          </div>
          {/* Vision Card */}
          <div
            className={`bg-white rounded-xl shadow-lg p-8 w-full md:w-1/2 h-full md:h-[350px] flex flex-col justify-between transform transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
            onMouseEnter={() => setAnimate(true)}
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">Visión</h2>
            <p className="text-gray-700">
              {vision}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MissionVision