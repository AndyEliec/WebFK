
import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, COLORS } from '../constants';
import ProductModal from './ProductModal';

const ProductGallery: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-x-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-bold italic" style={{ color: COLORS.primary }}>
                    Nuestro Catálogo
                </h2>
                <div className="w-20 h-1.5 bg-[#a10678] mx-auto mt-6 mb-6 rounded-full"></div>
                <p className="text-lg md:text-xl max-w-2xl mx-auto font-light italic" style={{ color: COLORS.secondary }}>
                    Texturas de alta fidelidad y tejidos técnicos para los estándares industriales más exigentes.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8">
                {PRODUCTS.map((product) => (
                    <div
                        key={product.id}
                        className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 bg-white text-[#6f1457] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-xl">
                                    Ver Detalle
                                </span>
                            </div>
                        </div>
                        <div className="p-5 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-lg mb-1 leading-tight" style={{ color: COLORS.dark }}>{product.name}</h3>
                            </div>
                            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-[10px] font-mono font-bold" style={{ color: COLORS.secondary }}>{product.referenceNumber}</span>
                                <div className="flex -space-x-1">
                                    <div className="w-4 h-4 rounded-full border border-white bg-[#6f1457] shadow-sm"></div>
                                    {product.additionalImages && product.additionalImages.length > 0 && (
                                         <div className="w-4 h-4 rounded-full border border-white bg-[#a3528d] flex items-center justify-center text-[8px] text-white shadow-sm">+{product.additionalImages.length}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default ProductGallery;
