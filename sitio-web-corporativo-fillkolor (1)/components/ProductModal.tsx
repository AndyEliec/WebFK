
import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { COLORS } from '../constants';
import { CloseIcon, PlusIcon, MinusIcon, ResetIcon, ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const allImages = [product.highResImageUrl, ...(product.additionalImages || [])];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [imgLoaded, setImgLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);
    
    const MIN_SCALE = 1;
    const MAX_SCALE = 4;
    
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (allImages.length > 1) {
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalStyle;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, currentImageIndex, allImages.length]);

    useEffect(() => {
        handleReset();
        setImgLoaded(false);
    }, [currentImageIndex]);

    const handleZoom = (direction: 'in' | 'out') => {
        setScale(prevScale => {
            const newScale = direction === 'in' ? prevScale * 1.2 : prevScale / 1.2;
            const clampedScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
            if (clampedScale === MIN_SCALE) resetPosition();
            return clampedScale;
        });
    };
    
    const resetPosition = () => setPosition({ x: 0, y: 0 });
    const handleReset = () => {
        setScale(MIN_SCALE);
        resetPosition();
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale === MIN_SCALE) return;
        setIsDragging(true);
        setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
    };

    const handleMouseUpOrLeave = () => setIsDragging(false);

    const handleWheel = (e: React.WheelEvent) => {
        if (e.deltaY !== 0) {
            e.stopPropagation();
            handleZoom(e.deltaY < 0 ? 'in' : 'out');
        }
    };

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center z-[100] p-0 md:p-2 lg:p-4 transition-all duration-500 bg-transparent" 
            onClick={onClose}
        >
            {/* Capa de cierre transparente */}
            <div className="absolute inset-0 bg-transparent" onClick={onClose} />

            <div 
                className="relative bg-white md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.25)] w-full h-full md:h-[95vh] max-w-7xl flex flex-col md:flex-row overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-500" 
                onClick={(e) => e.stopPropagation()}
            >
                
                {/* Sección de Imagen */}
                <div 
                    className="relative group bg-gray-100 flex items-center justify-center overflow-hidden min-h-[60vh] md:min-h-0 flex-grow md:border-r border-gray-100"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    onWheel={handleWheel}
                >
                    <button 
                        onClick={onClose} 
                        className="absolute top-6 right-6 z-50 p-2.5 bg-white/90 backdrop-blur-sm shadow-xl rounded-full md:hidden text-gray-800"
                    >
                        <CloseIcon />
                    </button>

                    {allImages.length > 1 && scale === MIN_SCALE && (
                        <>
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-3 md:left-6 z-20 p-2.5 md:p-4 bg-white/60 md:bg-white/30 hover:bg-white/90 text-[#6f1457] rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transform -translate-x-0 md:-translate-x-2 md:group-hover:translate-x-0"
                            >
                                <ChevronLeftIcon size={window.innerWidth < 768 ? 20 : 24} />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-3 md:right-6 z-20 p-2.5 md:p-4 bg-white/60 md:bg-white/30 hover:bg-white/90 text-[#6f1457] rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-x-0 md:translate-x-2 md:group-hover:translate-x-0"
                            >
                                <ChevronRightIcon size={window.innerWidth < 768 ? 20 : 24} />
                            </button>
                        </>
                    )}

                    <div className={`relative w-full h-full flex items-center justify-center ${scale > 1 ? 'cursor-move' : 'cursor-default'}`}>
                        <img
                            ref={imageRef}
                            src={allImages[currentImageIndex]}
                            alt={product.name}
                            onLoad={() => setImgLoaded(true)}
                            className={`w-full h-full object-cover transition-all duration-700 ease-out select-none ${imgLoaded ? 'opacity-100' : 'opacity-0 scale-105'}`}
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                                transformOrigin: 'center center'
                            }}
                        />
                    </div>
                    
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3.5 space-x-5 shadow-2xl z-10 border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                       <button onClick={() => handleZoom('out')} className="p-1 hover:text-[#a10678] hover:scale-125 transition-all"><MinusIcon /></button>
                       <span className="text-xs font-black w-14 text-center text-gray-600 tracking-tighter border-x border-gray-200">{Math.round(scale * 100)}%</span>
                       <button onClick={() => handleZoom('in')} className="p-1 hover:text-[#a10678] hover:scale-125 transition-all"><PlusIcon /></button>
                       <div className="w-[1px] h-5 bg-gray-200 mx-1"></div>
                       <button onClick={handleReset} className="p-1 hover:text-[#a10678] hover:scale-125 transition-all"><ResetIcon /></button>
                    </div>
                </div>

                {/* Sección de Ficha Técnica */}
                <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 bg-white flex flex-col h-full overflow-hidden transition-all duration-300">
                    <div className="p-4 md:p-8 pb-1.5 md:pb-6 shrink-0 border-b border-gray-50 md:border-none">
                        <div className="flex justify-between items-start">
                            <div className="space-y-0.5 md:space-y-1">
                                <div className="flex items-center space-x-2">
                                    <span className="h-[2px] w-4 md:w-6 bg-[#a10678] rounded-full"></span>
                                    <span className="text-[9px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3528d] leading-none">Ficha Técnica</span>
                                </div>
                                <h2 className="text-xl md:text-2xl font-black italic text-gray-900 leading-tight tracking-tight" style={{ color: COLORS.dark }}>{product.name}</h2>
                            </div>
                            <button onClick={onClose} className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-all text-gray-300 hover:text-gray-900">
                                <CloseIcon />
                            </button>
                        </div>
                    </div>

                    <div className="flex-grow overflow-y-auto px-5 md:px-8 custom-modal-scrollbar">
                        <div className="space-y-0 pb-6">
                            <div className="grid grid-cols-1">
                                <div className="py-2 md:py-5 border-b border-gray-100 group">
                                    <span className="text-[10px] md:text-[8px] font-bold text-[#a10678] uppercase tracking-[0.2em] block mb-0.5 md:mb-1.5 opacity-60">Fibras y Composición</span>
                                    <p className="text-base md:text-lg font-bold text-gray-800 leading-tight tracking-tight">{product.composition}</p>
                                </div>
                                
                                <div className="grid grid-cols-2 border-b border-gray-100">
                                    <div className="py-2 md:py-5 border-r border-gray-100 group">
                                        <span className="text-[10px] md:text-[8px] font-bold text-[#a10678] uppercase tracking-[0.2em] block mb-0.5 md:mb-1.5 opacity-60">Ancho Mínimo</span>
                                        <p className="text-base md:text-lg font-bold text-gray-800 tracking-tight">{product.minWidth}</p>
                                    </div>
                                    <div className="py-2 md:py-5 pl-4 group">
                                        <span className="text-[10px] md:text-[8px] font-bold text-[#a10678] uppercase tracking-[0.2em] block mb-0.5 md:mb-1.5 opacity-60">Ancho Máximo</span>
                                        <p className="text-base md:text-lg font-bold text-gray-800 tracking-tight">{product.width}</p>
                                    </div>
                                </div>

                                <div className="py-2 md:py-5 border-b border-gray-100 group">
                                    <span className="text-[10px] md:text-[8px] font-bold text-[#a10678] uppercase tracking-[0.2em] block mb-0.5 md:mb-1.5 opacity-60">Referencia de Producto</span>
                                    <p className="text-base md:text-lg font-bold text-gray-800 tracking-tight">{product.referenceNumber}</p>
                                </div>
                            </div>

                            {allImages.length > 1 && (
                                <div className="pt-4 md:pt-6">
                                    <h4 className="text-[9px] md:text-[8px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 md:mb-4 flex items-center">
                                        <span className="mr-2">Ángulos de Detalle</span>
                                        <span className="flex-grow h-[1px] bg-gray-50"></span>
                                    </h4>
                                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                                        {allImages.map((img, idx) => (
                                            <button 
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-500 transform ${currentImageIndex === idx ? 'border-[#a10678] scale-105 shadow-md' : 'border-gray-100 opacity-40 hover:opacity-100 hover:scale-105'}`}
                                            >
                                                <img src={img} className="w-full h-full object-cover" alt={`Vista ${idx + 1}`} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="p-4 md:p-8 pt-2 md:pt-6 border-t border-gray-50 shrink-0 bg-white">
                        <button
                            className="w-full py-3.5 md:py-4 rounded-xl text-white font-black text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-xl hover:shadow-[#a10678]/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-2 md:space-x-3 group"
                            style={{ 
                                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
                            }}
                        >
                            <svg className="w-4 h-4 md:w-4 md:h-4 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>Consultar</span>
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-modal-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-modal-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-modal-scrollbar::-webkit-scrollbar-thumb { background: #f1f1f1; border-radius: 20px; }
                @media (max-width: 768px) {
                    .custom-modal-scrollbar { scrollbar-width: thin; scrollbar-color: #f1f1f1 transparent; }
                }
            `}</style>
        </div>
    );
};

export default ProductModal;
