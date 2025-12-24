
import React from 'react';
import { COLORS } from '../constants';

const About: React.FC = () => {
    return (
        <section className="bg-[#F2E8DA] min-h-screen">
            <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-12 md:py-20">
                <div className="w-full max-w-screen-xl mx-auto">
                    {/* Encabezado de la Sección */}
                    <div className="text-center mb-16 md:mb-24 px-4">
                        <h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 italic tracking-tight" 
                            style={{ color: COLORS.primary }}
                        >
                            Nuestra Historia
                        </h2>
                        <div className="w-24 h-1.5 bg-[#a10678] mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-gray-600 font-light italic max-w-3xl mx-auto leading-relaxed">
                            Tejiendo Tradición e Innovación desde hace más de 15 años
                        </p>
                    </div>

                    {/* Contenedor de Bloques Fluido */}
                    <div className="space-y-20 md:space-y-32">
                        
                        {/* Bloque 1: Pasión e Historia */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute -inset-2 md:-inset-4 bg-[#f9ebf7] rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500 opacity-70"></div>
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <img 
                                        src="https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/maquina_01.jpeg" 
                                        alt="Pasión por los textiles" 
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 
                                    className="text-3xl lg:text-4xl font-bold italic" 
                                    style={{ color: COLORS.secondary }}
                                >
                                    Pasión por los Textiles
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                                        Fillkolor nació de una pasión familiar por las telas de alta calidad. Desde nuestros comienzos, hemos crecido hasta convertirnos en un referente en el sector de tejidos técnicos, especialmente para la industria del PRFV.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Nuestra evolución ha estado marcada por la búsqueda incesante de la perfección técnica. No solo vendemos telas, proveemos la base estructural para aplicaciones industriales de alto rendimiento.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bloque 2: Misión y Valores */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-20">
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute -inset-2 md:-inset-4 bg-[#f9ebf7] rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500 opacity-70"></div>
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <img 
                                        src="https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Portada_rollos.jpeg" 
                                        alt="Nuestra Misión" 
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 aspect-[4/3]"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 space-y-8">
                                <h3 
                                    className="text-3xl lg:text-4xl font-bold italic" 
                                    style={{ color: COLORS.secondary }}
                                >
                                    Nuestra Misión y Valores
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Nuestra misión es proveer soluciones textiles que inspiren confianza. Nos proyectamos al futuro apoyándonos en tres pilares:
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start group">
                                        <div 
                                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white mr-4 mt-1 shrink-0 shadow-lg group-hover:rotate-6 transition-transform" 
                                            style={{ backgroundColor: COLORS.accent }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg">Calidad Inquebrantable</h4>
                                            <p className="text-gray-600 text-sm">Control exhaustivo en cada fase del proceso de tejeduría.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start group">
                                        <div 
                                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white mr-4 mt-1 shrink-0 shadow-lg group-hover:rotate-6 transition-transform" 
                                            style={{ backgroundColor: COLORS.accent }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg">Innovación Técnica</h4>
                                            <p className="text-gray-600 text-sm">Desarrollo constante de nuevos ligamentos y aplicaciones.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start group">
                                        <div 
                                            className="w-8 h-8 rounded-xl flex items-center justify-center text-white mr-4 mt-1 shrink-0 shadow-lg group-hover:rotate-6 transition-transform" 
                                            style={{ backgroundColor: COLORS.accent }}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg">Sostenibilidad Ética</h4>
                                            <p className="text-gray-600 text-sm">Prácticas responsables y compromiso con el medio ambiente.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
