import { NavLink } from "react-router-dom";

const MainHeader = ({ title, footer_hero }) => {
    return (
        <section className="min-h-screen flex items-center pt-20 px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            <span className="gradient-text animate-text-gradient">{title}</span>
                            <br />Introducción a los <br />
                            <span className="gradient-text animate-text-gradient">Sistemas de Cómputo</span>
                        </h1>
                        <p className="text-lg opacity-80 max-w-lg">
                            {footer_hero}
                        </p>
                        <div className="flex space-x-4">
                            <NavLink to="/topics-viewed-in-class" className="px-6 py-3 bg-matrix rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                                Ver Temas
                            </NavLink>
                            <NavLink to="/contact-us" className="px-6 py-3 border border-glass rounded-lg hover:bg-glass transition-all">
                                Contáctanos
                            </NavLink>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="tilt-effect" data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-perspective="1000">
                            <div className="glass-card rounded-2xl p-1">
                                <img src="src/assets/img/INTRO.webp"
                                    alt="Developer Coding"
                                    className="rounded-xl w-full h-auto" />
                            </div>
                        </div>
                        {/* Top left neon circle */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-neon rounded-full opacity-20 animate-pulse-slow -z-10" style={{ animationDelay: '0s' }}></div>
                        {/* Top right cyber circle */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyber rounded-full opacity-20 animate-pulse-slow -z-10" style={{ animationDelay: '2s' }}></div>
                        {/* Bottom left neon circle */}
                        <div className="absolute -bottom-7 -left-40 w-24 h-24 bg-neon rounded-full opacity-20 animate-pulse-slow -z-10" style={{ animationDelay: '1s' }}></div>
                        {/* Bottom right matrix circle */}
                        <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-matrix rounded-full opacity-20 animate-pulse-slow -z-10" style={{ animationDelay: '3s' }}></div>
                        {/* Center left glass circle */}
                        <div className="absolute top-1/2 -left-24 w-28 h-28 bg-glass rounded-full opacity-20 animate-pulse-slow -z-10" style={{ animationDelay: '1.5s' }}></div>
                        {/* Center right dark glass circle */}
                        <div className="absolute top-1/3 right-0 w-24 h-24 bg-dark-glass rounded-full opacity-20 animate-pulse-slow -z-10" style={{ animationDelay: '2.5s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHeader