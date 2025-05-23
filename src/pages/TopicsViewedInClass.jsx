import CardTopic from "../components/CardTopic";

const TopicsViewedInClass = () => {
  const topics = [
    {
      title: "Principios de la Computadora",
      description: "Conceptos fundamentales y principios que rigen el funcionamiento de una computadora.",
      longText: "Los principios de la computadora abarcan los fundamentos teóricos y prácticos que permiten el diseño, construcción y operación de los sistemas de cómputo. Incluyen la lógica binaria, el procesamiento de datos, la arquitectura básica, el ciclo de instrucción y la interacción entre hardware y software. Estos principios son esenciales para comprender cómo las computadoras ejecutan instrucciones, almacenan información y resuelven problemas complejos, sentando las bases para el desarrollo de tecnologías informáticas avanzadas.",
      mainColor: "neon",
      imagePath: "/img/principioscompu.webp",
      subitems: ["Lógica binaria", "Procesamiento", "Ciclo de instrucción"]
    },
    {
      title: "Software y Hardware",
      description: "Definición y diferencias entre software y hardware.",
      longText: "El software comprende todos los programas, aplicaciones y sistemas operativos que permiten a los usuarios interactuar con la computadora y realizar tareas específicas. El hardware, por otro lado, está formado por los componentes físicos como la CPU, memoria, discos duros, periféricos y tarjetas de red. La interacción entre software y hardware es fundamental: el software da instrucciones y el hardware las ejecuta. Sin hardware, el software no puede funcionar, y sin software, el hardware es inútil. Ambos evolucionan constantemente para ofrecer mayor rendimiento, eficiencia y nuevas capacidades.",
      mainColor: "cyber",
      imagePath: "/img/softwarehardware.webp",
      subitems: ["Componentes físicos", "Programas", "Interacción"]
    },
    {
      title: "Sistemas operativos y virtualización",
      description: "Gestión de recursos y tecnologías de virtualización en sistemas operativos.",
      longText: "Un sistema operativo es el software esencial que administra los recursos de hardware y proporciona servicios a los programas de aplicación. Entre sus funciones principales están la gestión de memoria, el control de procesos, la administración de archivos y la seguridad del sistema. La virtualización permite ejecutar múltiples sistemas operativos en una sola máquina física, optimizando el uso de recursos y facilitando la administración de entornos complejos. Esta tecnología es clave en la computación moderna, permitiendo la creación de máquinas virtuales, entornos de prueba y soluciones de nube escalables.",
      mainColor: "matrix",
      imagePath: "/img/sistemasoperativos.webp",
      subitems: ["Gestión de recursos", "Máquinas virtuales", "Seguridad"]
    },
    {
      title: "Bases de Datos",
      description: "Conceptos y tipos de lenguajes para la gestión de bases de datos.",
      longText: "Las bases de datos son sistemas organizados para almacenar, gestionar y recuperar información de manera eficiente. Utilizan diferentes lenguajes: DDL (Data Definition Language) para definir la estructura, DML (Data Manipulation Language) para manipular los datos, DCL (Data Control Language) para controlar el acceso y TCL (Transaction Control Language) para gestionar transacciones. Las bases de datos pueden ser relacionales, NoSQL, distribuidas, entre otras, y son fundamentales en aplicaciones empresariales, científicas y cotidianas, permitiendo la integridad, seguridad y disponibilidad de la información.",
      mainColor: "neon",
      imagePath: "/img/basesdedatos.webp",
      subitems: ["DDL", "DML", "DCL", "TCL"]
    },
    {
      title: "Aspectos básicos del networking",
      description: "Fundamentos de redes y comunicación de datos.",
      longText: "El networking abarca los principios y tecnologías que permiten la interconexión de computadoras y dispositivos para compartir información y recursos. Incluye conceptos como protocolos de comunicación, topologías de red, dispositivos de interconexión (switches, routers, hubs) y medios de transmisión. El conocimiento de estos aspectos es esencial para diseñar, implementar y mantener redes eficientes y seguras, que soporten el crecimiento y la demanda de servicios digitales en organizaciones y hogares.",
      mainColor: "cyber",
      imagePath: "/img/networking.webp",
      subitems: ["Protocolos", "Topologías", "Dispositivos"]
    },
    {
      title: "Capa modelo OSI",
      description: "Descripción de las capas del modelo OSI y su función en la comunicación de redes.",
      longText: "El modelo OSI (Open Systems Interconnection) es un marco conceptual que divide la comunicación de red en siete capas: física, de enlace de datos, de red, de transporte, de sesión, de presentación y de aplicación. Cada capa tiene funciones específicas y se comunica con las capas adyacentes para garantizar la transmisión eficiente y segura de datos. Comprender el modelo OSI es fundamental para diagnosticar problemas de red, diseñar infraestructuras y entender cómo interactúan los diferentes protocolos y dispositivos en una red moderna.",
      mainColor: "matrix",
      imagePath: "/img/OSI.webp",
      subitems: ["Física", "Red", "Transporte", "Aplicación"]
    },
    {
      title: "Direccionamiento IP",
      description: "Conceptos y tipos de direcciones IP en redes.",
      longText: "El direccionamiento IP es el sistema que permite identificar de manera única a cada dispositivo conectado a una red. Existen dos versiones principales: IPv4 e IPv6. Las direcciones IP pueden ser públicas o privadas, estáticas o dinámicas, y son esenciales para el enrutamiento de datos en Internet y redes locales. El correcto diseño y asignación de direcciones IP es crucial para la seguridad, escalabilidad y funcionamiento eficiente de cualquier red informática.",
      mainColor: "neon",
      imagePath: "/img/ipv4.webp",
      subitems: ["IPv4", "IPv6", "Públicas", "Privadas"]
    },
    {
      title: "Tipos de red",
      description: "Clasificación y características de los diferentes tipos de redes.",
      longText: "Las redes pueden clasificarse según su alcance y propósito: LAN (Local Area Network), MAN (Metropolitan Area Network), WAN (Wide Area Network), PAN (Personal Area Network), entre otras. Cada tipo de red tiene características, ventajas y limitaciones específicas, que determinan su uso en entornos domésticos, empresariales o globales. Comprender los tipos de red es esencial para seleccionar la infraestructura adecuada y garantizar la conectividad y el rendimiento requeridos.",
      mainColor: "cyber",
      imagePath: "/img/networking.webp",
      subitems: ["LAN", "WAN", "MAN", "PAN"]
    },
    {
      title: "Páginas web",
      description: "Estructura y funcionamiento de las páginas web.",
      longText: "Una página web es un documento digital accesible a través de Internet, compuesto por código HTML, CSS y, en muchos casos, JavaScript. Las páginas web pueden ser estáticas o dinámicas, y forman parte de sitios web más grandes. Su desarrollo implica el diseño de la interfaz, la organización del contenido y la optimización para diferentes dispositivos y navegadores. Las páginas web son la base de la presencia digital de empresas, organizaciones y personas en la actualidad.",
      mainColor: "matrix",
      imagePath: "/img/paginasweb.webp",
      subitems: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Desarrollo web",
      description: "Proceso de creación y mantenimiento de sitios y aplicaciones web.",
      longText: "El desarrollo web abarca todas las actividades relacionadas con la creación de sitios y aplicaciones accesibles a través de navegadores. Incluye el diseño de la interfaz de usuario, la programación del lado del cliente y del servidor, la gestión de bases de datos y la implementación de medidas de seguridad. El desarrollo web moderno utiliza frameworks, herramientas y metodologías ágiles para crear experiencias interactivas, seguras y escalables, adaptadas a las necesidades de los usuarios y las tendencias tecnológicas.",
      mainColor: "neon",
      imagePath: "/img/desarrolloweb.webp",
      subitems: ["Frontend", "Backend", "Fullstack"]
    },
    {
      title: "Resolución de problemas por medio de computadoras",
      description: "Uso de la computación para analizar y resolver problemas complejos.",
      longText: "La resolución de problemas mediante computadoras implica el análisis, modelado y solución de situaciones complejas utilizando herramientas informáticas. Este proceso incluye la identificación del problema, el diseño de algoritmos, la implementación de soluciones y la evaluación de resultados. Las computadoras permiten automatizar tareas, procesar grandes volúmenes de datos y encontrar soluciones óptimas en campos como la ciencia, la ingeniería, la economía y la vida cotidiana.",
      mainColor: "cyber",
      imagePath: "/img/resoluciondeproblemas.webp",
      subitems: ["Algoritmos", "Modelado", "Automatización"]
    },
    {
      title: "Pseudocódigo",
      description: "Representación estructurada de algoritmos mediante lenguaje informal.",
      longText: "El pseudocódigo es una herramienta utilizada para describir algoritmos de manera clara y comprensible, sin depender de la sintaxis de un lenguaje de programación específico. Permite estructurar las soluciones antes de codificarlas, facilitando la comunicación entre desarrolladores y el análisis lógico de los pasos a seguir. El uso de pseudocódigo es fundamental en la enseñanza de la programación y en la planificación de proyectos de software complejos.",
      mainColor: "matrix",
      imagePath: "/img/pseudocodigo.webp",
      subitems: ["Algoritmos", "Estructura", "Lógica"]
    }
  ];
  return (
    <section id="work" className="py-20 px-8">
      <div className="container mx-auto">
        <h1 className="mt-16 text-5xl mb-6 md:text-6xl font-bold leading-tight text-center">
          <span className="gradient-text animate-text-gradient">Temas Vistos en Clase</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, idx) => (
            <CardTopic key={idx} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopicsViewedInClass;