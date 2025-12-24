
import React from 'react';
import { COLORS } from '../constants';
import { WhatsAppIcon } from './IconComponents';

const Contact: React.FC = () => {
    const whatsappMessage = encodeURIComponent("Hola Fillkolor, estoy interesado en sus productos y me gustaría solicitar más información.");
    const whatsappLink = `https://wa.me/51987654321?text=${whatsappMessage}`;

    return (
        <section className="py-16 bg-[#F2E8DA]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold italic" style={{ color: COLORS.primary }}>Contáctenos</h2>
                    <div className="w-20 h-1.5 bg-[#a10678] mx-auto mt-6 mb-6 rounded-full"></div>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl font-light italic" style={{ color: COLORS.secondary }}>
                        ¿Tiene un proyecto en mente? Nuestro equipo de expertos está listo para asesorarlo.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.dark }}>Información de Contacto</h3>
                        <div className="space-y-4">
                            <p><strong>Dirección:</strong> Martin Miguens 7809, Villa Bosch, Buenos Aires, Argentina.</p>
                            <p><strong>Teléfono:</strong> <a href="tel: (+54) 9 11 5250 4838" className="hover:underline">(+54) 9 11 5250 4838</a></p>
                            <p><strong>Email:</strong> <a href="mailto: ventas@fillkolor.com.ar" className="hover:underline">ventas@fillkolor.com.ar</a></p>
                        </div>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full mt-8 px-6 py-3 rounded-lg text-white font-bold transition-colors duration-300 shadow-md hover:shadow-lg"
                            style={{ backgroundColor: COLORS.whatsapp, '--hover-bg': COLORS.whatsappHover } as React.CSSProperties}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = COLORS.whatsappHover}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = COLORS.whatsapp}
                        >
                            <WhatsAppIcon />
                            <span className="ml-2">Contactar por WhatsApp</span>
                        </a>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium" style={{color: COLORS.dark}}>Nombre Completo</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#a10678] focus:border-[#a10678]" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium" style={{color: COLORS.dark}}>Correo Electrónico</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#a10678] focus:border-[#a10678]" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium" style={{color: COLORS.dark}}>Mensaje</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#a10678] focus:border-[#a10678]"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 rounded-lg text-white font-bold transition-colors duration-300 shadow-md hover:shadow-lg"
                            style={{ backgroundColor: COLORS.accent, '--hover-bg': COLORS.accentHover } as React.CSSProperties}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = COLORS.accentHover}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = COLORS.accent}
                        >
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
