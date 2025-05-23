import { useState } from "react";

// Map mainColor to Tailwind classes
const colorMap = {
    neon: {
        shadow: 'hover:shadow-neon/20',
        text: 'text-neon'
    },
    cyber: {
        shadow: 'hover:shadow-cyber/20',
        text: 'text-cyber'
    },
    matrix: {
        shadow: 'hover:shadow-matrix/20',
        text: 'text-matrix'
    }
};

const CardTopic = ({ topic }) => {
    const color = colorMap[topic.mainColor] || {};
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="tilt-effect" data-tilt data-tilt-max="5" data-tilt-glare="true">
            <div className={`glass-card rounded-xl overflow-hidden hover:shadow-lg ${color.shadow || ''} transition-all h-full`}>
                <img src={topic.imagePath}
                    alt={topic.title}
                    className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                    <p className="opacity-80 mb-4">{topic.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {topic.subitems.map((sub, idx) => (
                            <span key={idx} className="px-3 py-1 bg-glass rounded-full text-sm">{sub}</span>
                        ))}
                    </div>
                    <button onClick={() => setOpen(true)} className={`${color.text || ''} font-semibold hover:underline focus:outline-none`}>
                        Leer más →
                    </button>
                </div>
            </div>
        </div>
        {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                <div className="bg-neutral-900 glass-card rounded-2xl max-w-lg w-full p-8 relative animate-scale-up-center shadow-2xl border border-glass">
                    <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none">&times;</button>
                    <img src={topic.imagePath} alt={topic.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                    <h2 className={`text-2xl font-bold mb-4 ${color.text || ''}`}>{topic.title}</h2>
                    <p className="text-gray-100 whitespace-pre-line mb-2">{topic.longText}</p>
                </div>
            </div>
        )}
        </>
    )
}

export default CardTopic