const OurTeam = () => {
    const ourTeam = [
        { carnet: "9960-25-5579", name: "Uriel Ortíz", image: "/src/assets/img/URIEL.jpeg", github: "https://github.com/uriel212" },
        { carnet: "", name: "Josue", image: "/src/assets/img/JOSUE.jpeg", github: "" },
        { carnet: "", name: "Jorge", image: "/src/assets/img/JORGE.jpeg", github: "" },
        { carnet: "", name: "Dilan", image: "/src/assets/img/DILAN.jpeg", github: "" }
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
                            <a href={member.github || "#"} target="_blank" className="space-y-4">
                                <img src={member.image || "https://randomuser.me/api/portraits/lego/1.jpg"} className="object-cover grayscale-25 mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" />
                                <h3 className="font-medium text-white text-2xl text-center">
                                    {member.name}
                                </h3>
                                <p className="text-gray-400 text-center">
                                    {member.carnet}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam