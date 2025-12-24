import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Section } from './types';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>('home');

    const renderSection = () => {
        switch (activeSection) {
            case 'home':
                return <Hero onCTAClick={() => setActiveSection('products')} />;
            case 'products':
                return <ProductGallery />;
            case 'services':
                return <Services />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return <Hero onCTAClick={() => setActiveSection('products')} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans bg-[#F2E8DA] text-[#a3528d]">
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            <main className="flex-grow pt-20">
                {renderSection()}
            </main>
            <WhatsAppWidget />
            <Footer />
        </div>
    );
};

export default App;