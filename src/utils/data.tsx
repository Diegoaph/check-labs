import type{ Test } from '../types';

 export const labTests: Test[] = [
   { name: 'Eritrocitos', range: { min: 4.8, max: 5.0, unit: 'millones / μL' } },
   {
     name: 'Hemoglobina (Mujer)',
     range: { min: 13.5, max: 14.5, unit: 'g / dL', gender: 'female' }
   },
   { name: 'Hemoglobina (Hombre)', range: { min: 14, max: 15, unit: 'g / dL', gender: 'male' } },
   { name: 'Hematocrito (Mujer)', range: { min: 39, max: 44, unit: '%', gender: 'female' } },
   { name: 'Hematocrito (Hombre)', range: { min: 42, max: 45, unit: '%', gender: 'male' } },
   { name: 'HCM', range: { min: 28, max: 32, unit: 'pg' } },
   { name: 'CHCM', range: { min: 32, max: 36, unit: 'g / dL' } },
   { name: '25 (OH) Vitamina D3', range: { min: 50, max: 100, unit: 'ng / mL' } },
   { name: 'Linfocitos (absoluto)', range: { min: 2, max: 3, unit: 'miles / μL' } },
   { name: 'Leucocitos', range: { min: 5, max: 7.5, unit: 'miles / μL' } },
   { name: 'ALT', range: { min: 12, max: 25, unit: 'U / L' } },
   { name: 'Eosinófilos', range: { min: 0, max: 2, unit: '%' } },
   { name: 'AST', range: { min: 15, max: 25, unit: 'u / L' } },
   { name: 'Albúmina', range: { min: 4.3, max: 4.8, unit: 'g / dL' } },
   { name: 'Eosinófilos (absoluto)', range: { min: 0, max: 0.2, unit: 'miles / μL' } },
   { name: 'Linfocitos', range: { min: 30, max: 40, unit: '%' } },
   { name: 'ApoB', range: { min: 40, max: 100, unit: 'mg / dL' } },
   { name: 'ADE (RDW)', range: { min: 12.5, max: 13.5, unit: '%' } },
   { name: 'Anticuerpos anti-peroxidasa', range: { min: 0, max: 34, unit: 'UI / mL' } },
   { name: 'Anticuerpos anti-tiroglobulina', range: { min: 0, max: 40, unit: 'UI / mL' } },
   { name: 'Neutrófilos (absoluto)', range: { min: 2.5, max: 5, unit: 'miles / μL' } },
   { name: 'Bilirrubina directa (conjugada)', range: { min: 0.1, max: 0.2, unit: 'mg / dL' } },
   { name: 'Bilirrubina total', range: { min: 0.5, max: 0.8, unit: 'mg / dL' } },
   { name: 'Ácido úrico (Mujer)', range: { min: 3, max: 4, unit: 'mg / dL', gender: 'female' } },
   { name: 'Ácido úrico (Hombre)', range: { min: 4, max: 5, unit: 'mg / dL', gender: 'male' } },
   { name: 'Monocitos (absoluto)', range: { min: 0.4, max: 0.6, unit: 'miles / μL' } },
   { name: 'Neutrófilos', range: { min: 60, max: 65, unit: '%' } },
   { name: 'ApoA1 (Mujer)', range: { min: 115, max: 205, unit: 'mg / dL', gender: 'female' } },
   { name: 'ApoA1 (Hombre)', range: { min: 120, max: 180, unit: 'mg / dL', gender: 'male' } },
   { name: 'VCM', range: { min: 90, max: 95, unit: 'fL' } },
   { name: 'ANAS', range: { min: 0, max: 1, unit: ':40' } },
   { name: 'Volumen plaquetario medio', range: { min: 9.5, max: 10, unit: '' } },
   { name: 'Basófilos', range: { min: 0, max: 1, unit: '%' } },
   { name: 'Bicarbonato', range: { min: 23, max: 27, unit: 'mEq / L' } },
   { name: 'Bilirrubina indirecta (no conjugada)', range: { min: 0.4, max: 0.8, unit: 'mg / dL' } },
   { name: 'Basófilos (absoluto)', range: { min: 0, max: 0.095, unit: 'miles / μL' } },
   { name: 'Plaquetas', range: { min: 200, max: 250, unit: 'miles / μL' } },
   { name: 'Monocitos', range: { min: 4, max: 5, unit: '%' } },
   { name: 'Brecha aniónica', range: { min: 8, max: 14, unit: 'mEq / L' } },
   { name: 'BUN', range: { min: 11, max: 15, unit: 'mL / dL' } },
   { name: 'Calcio sérico', range: { min: 9.4, max: 9.8, unit: 'mg / dL' } },
   {
     name: 'Cap. de fijación del hierro (TIBC)',
     range: { min: 300, max: 350, unit: 'μg / L' }
   },
   { name: 'Ceruloplasmina', range: { min: 20, max: 35, unit: 'mg / dL' } },
   { name: 'Cloro sérico', range: { min: 100, max: 105, unit: 'mEq / L' } },
   {
     name: 'T3L/T4L',
     type: 'ratio',
     range: { min: 0.33, max: Number.POSITIVE_INFINITY, unit: '' },
     inputs: [
       { name: 'T3L', unit: 'pg / mL' },
       { name: 'T4L', unit: 'ng / dL' }
     ]
   },
   {
     name: 'Cobre/Zinc',
     type: 'ratio',
     range: { min: 0.8, max: 1.2, unit: '' },
     inputs: [
       { name: 'Cobre', unit: 'μg / dL' },
       { name: 'Zinc', unit: 'mcr / dL' }
     ]
   },
   {
     name: 'Colesterol/HDL',
     type: 'ratio',
     range: { min: 0, max: 3.3, unit: '' },
     inputs: [
       { name: 'Colesterol', unit: 'mg / dL' },
       { name: 'HDL', unit: 'mg / dL' }
     ]
   },
   {
     name: 'T3T/T3R',
     type: 'ratio',
     range: { min: 6, max: Number.POSITIVE_INFINITY, unit: '' },
     inputs: [
       { name: 'T3T', unit: 'ng / dL' },
       { name: 'T3R', unit: 'ng / dL' }
     ]
   },
   {
     type: 'ratio',
     name: 'ApoB/ApoA1',
     range: { min: 0, max: 0.8, unit: '' },
     inputs: [
       { name: 'ApoB', unit: 'mg/dL' },
       { name: 'ApoA1', unit: 'mg/dL' }
     ]
   },
   {
     type: 'ratio',
     name: 'Albúmina/globulina',
     range: { min: 1.5, max: 2, unit: '' },
     inputs: [
       { name: 'Albúmina', unit: '' },
       { name: 'globulina', unit: '' }
     ]
   }
 ];
