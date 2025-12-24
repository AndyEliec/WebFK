
import React from 'react';
import { COLORS } from '../constants';
import { WhatsAppIcon } from './IconComponents';

const WhatsAppWidget: React.FC = () => {
    const whatsappMessage = encodeURIComponent("Hola Fillkolor, estoy interesado en sus productos.");
    const whatsappLink = `https://wa.me/5491152504838?text=${whatsappMessage}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 z-40"
            style={{ backgroundColor: COLORS.whatsapp, '--hover-bg': COLORS.whatsappHover } as React.CSSProperties}
            onMouseOver={e => e.currentTarget.style.backgroundColor = COLORS.whatsappHover}
            onMouseOut={e => e.currentTarget.style.backgroundColor = COLORS.whatsapp}
            aria-label="Contactar por WhatsApp"
        >
            <WhatsAppIcon size={32} />
        </a>
    );
};

export default WhatsAppWidget;
