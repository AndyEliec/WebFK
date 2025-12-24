
export interface Product {
    id: number;
    name: string;
    category: string;
    composition: string;
    width: string;
    minWidth: string; // Nuevo campo para ancho mínimo
    recommendedUse: string;
    referenceNumber: string;
    imageUrl: string;
    highResImageUrl: string;
    additionalImages?: string[]; // New field for extra photos
}

export interface Category {
    id: string;
    name: string;
}

export type Section = 'home' | 'products' | 'services' | 'about' | 'contact';
