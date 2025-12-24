import React, { useState, useEffect } from 'react';
import { Section } from '../types';
import { COLORS } from '../constants';
import { MenuIcon, CloseIcon } from './IconComponents';

interface HeaderProps {
    activeSection: Section;
    setActiveSection: (section: Section) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const navItems: { id: Section; label: string }[] = [
        { id: 'home', label: 'Inicio' },
        { id: 'products', label: 'Catálogo' },
        { id: 'services', label: 'Servicios' },
        { id: 'about', label: 'Nosotros' },
        { id: 'contact', label: 'Contacto' },
    ];

    const handleNavClick = (section: Section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <h1 
                                className="text-2xl font-bold cursor-pointer" 
                                style={{ color: COLORS.primary }}
                                onClick={() => handleNavClick('home')}
                            >
                                Fillkolor
                            </h1>
                        </div>
                        <nav className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavClick(item.id)}
                                        className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                                        style={{
                                            backgroundColor: activeSection === item.id ? COLORS.accent : 'transparent',
                                            color: activeSection === item.id ? 'white' : COLORS.dark
                                        }}
                                        onMouseOver={e => { if(activeSection !== item.id) e.currentTarget.style.color = COLORS.accent; }}
                                        onMouseOut={e => { if(activeSection !== item.id) e.currentTarget.style.color = COLORS.dark; }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </nav>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                aria-label="Abrir menú principal"
                            >
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60" onClick={() => setIsMenuOpen(false)}></div>
                
                {/* Panel */}
                <div className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-5 border-b">
                        <h2 className="text-xl font-bold" style={{ color: COLORS.primary }}>Menú</h2>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2" aria-label="Cerrar menú">
                            <CloseIcon />
                        </button>
                    </div>
                    <nav className="mt-6">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleNavClick(item.id)}
                                        className="w-full text-left px-5 py-4 text-lg font-medium transition-colors duration-200"
                                        style={{
                                            backgroundColor: activeSection === item.id ? COLORS.accent : 'transparent',
                                            color: activeSection === item.id ? 'white' : COLORS.dark,
                                        }}
                                        onMouseOver={e => { if (activeSection !== item.id) { e.currentTarget.style.backgroundColor = COLORS.light; }}}
                                        onMouseOut={e => { if (activeSection !== item.id) { e.currentTarget.style.backgroundColor = 'transparent'; }}}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
