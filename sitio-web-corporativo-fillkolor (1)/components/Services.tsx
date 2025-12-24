
import React from 'react';
import { COLORS } from '../constants';

const Services: React.FC = () => {
    return (
        <div className="py-16 bg-[#F2E8DA]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold italic" style={{ color: COLORS.primary }}>Nuestros Servicios</h2>
                    <div className="w-20 h-1.5 bg-[#a10678] mx-auto mt-6 mb-6 rounded-full"></div>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl font-light italic" style={{ color: COLORS.secondary }}>
                        Control total sobre el proceso productivo para garantizar la máxima calidad en cada metro de tela.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Contenedor de Imagen con altura vertical incrementada */}
                    <div className="relative group h-full min-h-[450px] md:min-h-[600px]">
                        <div className="absolute -inset-2 md:-inset-4 bg-[#f9ebf7] rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500 opacity-70"></div>
                        <div className="overflow-hidden rounded-2xl shadow-2xl h-full">
                            <img 
                                src="https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/maquina_02.jpeg" 
                                alt="Planta de Tejeduría" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 flex flex-col justify-center">
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-bold italic mb-6" style={{ color: COLORS.dark }}>Planta de Tejeduría de Vanguardia</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                Nuestra planta de tejeduría está equipada con telares de última generación que nos permiten una producción versátil y de alta precisión para todo tipo de requerimientos técnicos.
                            </p>
                        </div>
                        
                        <ul className="space-y-6">
                            <li className="flex items-start group">
                                <div 
                                    className="w-8 h-8 rounded-xl flex items-center justify-center text-white mr-4 mt-1 shrink-0 shadow-lg group-hover:rotate-6 transition-transform" 
                                    style={{ backgroundColor: COLORS.accent }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-lg">Capacidad de Producción Flexible</h4>
                                    <p className="text-gray-600 text-sm">Adaptamos nuestra producción a las necesidades de pequeños y grandes volúmenes con tiempos de entrega optimizados.</p>
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
                                    <h4 className="font-bold text-gray-800 text-lg">Control de Calidad Riguroso</h4>
                                    <p className="text-gray-600 text-sm">Inspección electrónica y manual en cada etapa del proceso, garantizando la uniformidad y resistencia del tejido.</p>
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
                                    <h4 className="font-bold text-gray-800 text-lg">Laboratorio de Color Propio</h4>
                                    <p className="text-gray-600 text-sm">Desarrollo de tonos exclusivos y acabados especiales para proyectos de alta costura o aplicaciones industriales específicas.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
