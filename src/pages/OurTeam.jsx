const OurTeam = () => {
    const ourTeam = [
        { carnet: "9960-25-5579", name: "Uriel Ortíz", image: "/img/URIEL.jpeg", github: "https://github.com/uriel212" },
        { carnet: "9960-25-8919", name: "Josué Ruano", image: "/img/JOSUE.jpeg"},
        { carnet: "9960-25-8264", name: "Jorge Mejía", image: "/img/JORGE.jpeg"},
        { carnet: "9960-25-13674", name: "Dilan Girón", image: "/img/DILAN.jpeg"}
    ]
    return (
        <section className="pt-16">
            <div className="max-w-7xl mx-auto  space-y-16">
                <h1 className="mt-16 text-5xl md:text-6xl font-bold leading-tight text-center">
                    <span className="gradient-text animate-text-gradient">Nuestro Equipo</span>
                </h1>

                <div className="grid md:grid-cols-4 gap-16">
                    {ourTeam.map((member, idx) => (
                        <div className="space-y-4" key={idx}>
                            {member.github ? (
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="space-y-4">
                                    <img src={member.image || "https://randomuser.me/api/portraits/lego/1.jpg"} className="object-cover grayscale-25 mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" />
                                    <h3 className="font-medium text-white text-2xl text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-400 text-center">
                                        {member.carnet}
                                    </p>
                                </a>
                            ) : (
                                <a href="#" className="space-y-4">
                                    <img src={member.image || "https://randomuser.me/api/portraits/lego/1.jpg"} className="object-cover grayscale-25 mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" />
                                    <h3 className="font-medium text-white text-2xl text-center">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-400 text-center">
                                        {member.carnet}
                                    </p>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam