
import React from 'react';
import { COLORS } from '../constants';
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './IconComponents';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: COLORS.dark, color: COLORS.light }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Fillkolor</h3>
                        <p className="text-xs md:text-sm" style={{ color: COLORS.secondary }}>
                            Especialistas en Tejidos Tecnicos, comprometidos con la calidad y la innovación hace mas de 15 años.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Contacto</h3>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                            <li><a href="mailto: ventas@fillkolor.com.ar" className="hover:text-white transition-colors">ventas@fillkolor.com.ar</a></li>
                            <li><a href="tel: (+54) 9 11 5250 4838" className="hover:text-white transition-colors">(+54) 9 11 5250 4838 </a></li>
                            <li>Martin Miguens 7809, Villa Bosch, Buenos Aires, Argentina.</li>
                        </ul>
                    </div>
                   {/* <div>
                        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Síguenos</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="hover:opacity-75 transition-opacity scale-90 md:scale-100"><FacebookIcon /></a>
                            <a href="#" className="hover:opacity-75 transition-opacity scale-90 md:scale-100"><InstagramIcon /></a>
                            <a href="#" className="hover:opacity-75 transition-opacity scale-90 md:scale-100"><LinkedInIcon /></a>
                        </div>
                    </div>*/}
                </div>
                <div className="mt-6 pt-6 md:mt-8 md:pt-8 border-t" style={{ borderColor: COLORS.secondary }}>
                    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm">
                        <p>&copy; {new Date().getFullYear()} Fillkolor. Todos los derechos reservados.</p>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            {/*<a href="#" className="hover:text-white transition-colors">Aviso Legal</a>*/}
                            {/*<a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
