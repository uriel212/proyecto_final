import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col">
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
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="w-full text-center py-4 bg-slate-900 text-gray-300 text-sm mt-8 border-t border-slate-800 opacity-90 z-10 relative">
                © {new Date().getFullYear()} Proyecto Final - Introducción a los Sistemas de Cómputo.
            </footer>
        </div>
    )
}

export default Layout