import React from 'react';
import { COLORS } from '../constants';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
    return (
        <section className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-white">
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{
                    backgroundImage: `url(https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Portada_rollos.jpeg)`,
                }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 text-center p-4">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
                    Tejiendo el Futuro de la Industria Textil
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 font-light" style={{ color: COLORS.light }}>
                    Innovación, calidad y sostenibilidad en cada fibra. Descubra por qué las mejores marcas nos eligen.
                </p>
                <button
                    onClick={onCTAClick}
                    className="px-8 py-3 rounded-full text-lg font-bold text-white transition-transform duration-300 transform hover:scale-105 shadow-lg"
                    style={{ backgroundColor: COLORS.accent, '--hover-bg': COLORS.accentHover } as React.CSSProperties}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = COLORS.accentHover}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = COLORS.accent}
                >
                    Ver Nuestro Catálogo
                </button>
            </div>
        </section>
    );
};

export default Hero;