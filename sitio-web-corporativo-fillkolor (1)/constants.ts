
import { Product, Category } from './types';

export const COLORS = {
  primary: '#6f1457',
  secondary: '#a3528d',
  accent: '#a10678',
  accentHover: '#7d0954',
  light: '#f9ebf7',
  dark: '#4e1337',
  whatsapp: '#25D366',
  whatsappHover: '#128C7E',
  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  }
};

export const CATEGORIES: Category[] = [
    { id: 'algodon', name: 'Algodón Premium' },
    { id: 'mezclas', name: 'Mezclas Sintéticas' },
    { id: 'tejidos', name: 'Tejidos Especiales' },
    { id: 'estampados', name: 'Estampados de Temporada' },
    { id: 'Jersey', name: 'Jersey' },
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Faldon Colchonero',
        category: 'Jersey',
        composition: '100% Poliester',
        width: '0.30m',
        minWidth: '0.28m',
        recommendedUse: '',
        referenceNumber: 'Faldon Colchonero',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Faldon_Colchonero_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Faldon_Colchonero_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Faldon_Colchonero_02.jpeg`]
    },
    {
        id: 2,
        name: 'Jersey 22',
        category: 'algodon',
        composition: '100% Poliester',
        width: '1.50m',
        minWidth: '1.42m',
        recommendedUse: '',
        referenceNumber: 'Jersey 22',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Jersey_22_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Jersey_22_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Jersey_22_02.jpeg`]
    },
    {
        id: 3,
        name: 'Gasa Reforzada',
        category: 'Gasa',
        composition: '100% Poliéster',
        width: '1.80m',
        minWidth: '1.71m',
        recommendedUse: '',
        referenceNumber: 'Gasa Reforzada',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Gasa_Reforzada_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Gasa_Reforzada_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Gasa_Reforzada_02.jpeg`]
    },
    {
        id: 4,
        name: 'Red 577',
        category: 'Red',
        composition: '100% Poliéster',
        width: '1.55m',
        minWidth: '1.47m',
        recommendedUse: '',
        referenceNumber: 'Red 577',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Red_577_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Red_577_01.jpeg` ,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Red_577_02.jpeg`]
    },

    {
        id: 5,
        name: 'Jersey Polipes',
        category: 'algodon',
        composition: '100% Poliéster',
        width: '1.60m',
        minWidth: '1.52m',
        recommendedUse: '',
        referenceNumber: 'Jersey Polipes',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Jersey_Polipes_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Jersey_Polipes_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Jersey_Polipes_02.jpeg`]
    },
    {
        id: 6,
        name: 'Refuerzo p/ Interior Fuerza',
        category: 'Jersey',
        composition: '100% Poliester',
        width: '1.60m',
        minWidth: '1.52m',
        recommendedUse: '',
        referenceNumber: 'Refuerzo p/ Interior Fuerza 1',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Refuerzo_Interior_Fuerza_1_01.jpeg `,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Refuerzo_Interior_Fuerza_1_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Refuerzo_Interior_Fuerza_1_02.jpeg`]
    },
    {
        id: 7,
        name: 'Refuerzo p/ Interior Fuerza',
        category: 'Algodón',
        composition: '100% Poliester',
        width: '1.60m',
        minWidth: '1.52m',
        recommendedUse: '',
        referenceNumber: 'Refuerzo p/ Interior Fuerza 2',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Refuerzo_Interior_Fuerza_2_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Refuerzo_Interior_Fuerza_2_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Refuerzo_Interior_Fuerza_2_02.jpeg`]
    },
    {
        id: 8,
        name: 'Red 332',
        category: 'Red',
        composition: '100% Algodón',
        width: '1.60m',
        minWidth: '1.52m',
        recommendedUse: '',
        referenceNumber: 'Red 332',
        imageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Red_332_01.jpeg`,
        highResImageUrl: `https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Red_332_01.jpeg`,
        additionalImages: [`https://raw.githubusercontent.com/AndyEliec/WebFK/refs/heads/main/Imagenes/Red_332_02.jpeg`]
    }
];
