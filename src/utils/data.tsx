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
   { name: 'VCM', range: { min: 90, max: 95, unit: 'fL' } },
   { name: 'ADE (RDW)', range: { min: 12.5, max: 13.5, unit: '%' } },
   { name: 'Leucocitos', range: { min: 5, max: 7.5, unit: 'miles / μL' } },
   { name: 'Neutrófilos', range: { min: 60, max: 65, unit: '%' } },
   { name: 'Linfocitos', range: { min: 30, max: 40, unit: '%' } },
   { name: 'Monocitos', range: { min: 4, max: 5, unit: '%' } },
   { name: 'Eosinófilos', range: { min: 0, max: 2, unit: '%' } },
   { name: 'Basófilos', range: { min: 0, max: 1, unit: '%' } },
   { name: 'Neutrófilos (absoluto)', range: { min: 2.5, max: 5, unit: 'miles / μL' } },
   { name: 'Linfocitos (absoluto)', range: { min: 2, max: 3, unit: 'miles / μL' } },
   { name: 'Monocitos (absoluto)', range: { min: 0.4, max: 0.6, unit: 'miles / μL' } },
   { name: 'Eosinófilos (absoluto)', range: { min: 0, max: 0.2, unit: 'miles / μL' } },
   { name: 'Basófilos (absoluto)', range: { min: 0, max: 0.095, unit: 'miles / μL' } },
   { name: 'Plaquetas', range: { min: 200, max: 250, unit: 'miles / μL' } },

   { name: 'Volumen plaquetario medio', range: { min: 9.5, max: 10, unit: '' } },

   { name: '25 (OH) Vitamina D3', range: { min: 50, max: 100, unit: 'ng / mL' } },
   { name: 'Ácido úrico (Mujer)', range: { min: 3, max: 4, unit: 'mg / dL', gender: 'female' } },
   { name: 'Ácido úrico (Hombre)', range: { min: 4, max: 5, unit: 'mg / dL', gender: 'male' } },
   { name: 'Albúmina', range: { min: 4.3, max: 4.8, unit: 'g / dL' } },
   {
     type: 'ratio',
     name: 'Albúmina/globulina',
     range: { min: 1.5, max: 2, unit: '' },
     inputs: [
       { name: 'Albúmina', unit: '' },
       { name: 'globulina', unit: '' }
     ]
   },

   { name: 'ALT', range: { min: 12, max: 25, unit: 'U / L' } },
   { name: 'ANAS', range: { min: 0, max: 1.4, unit: 'ver bibliografía' } },
   { name: 'Anticuerpos anti-peroxidasa', range: { min: 0, max: 34, unit: 'UI / mL' } },
   { name: 'Anticuerpos anti-tiroglobulina', range: { min: 0, max: 40, unit: 'UI / mL' } },
   { name: 'ApoA1 (Mujer)', range: { min: 115, max: 205, unit: 'mg / dL', gender: 'female' } },
   { name: 'ApoA1 (Hombre)', range: { min: 120, max: 180, unit: 'mg / dL', gender: 'male' } },
   { name: 'ApoB', range: { min: 40, max: 100, unit: 'mg / dL' } },
   {
     type: 'ratio',
     name: 'ApoB/ApoA1',
     range: { min: 0, max: 0.8, unit: '' },
     inputs: [
       { name: 'ApoB', unit: 'mg/dL' },
       { name: 'ApoA1', unit: 'mg/dL' }
     ]
   },
   { name: 'AST', range: { min: 15, max: 25, unit: 'u / L' } },
   { name: 'Bicarbonato', range: { min: 23, max: 27, unit: 'mEq / L' } },

   { name: 'Bilirrubina directa (conjugada)', range: { min: 0.1, max: 0.2, unit: 'mg / dL' } },
   { name: 'Bilirrubina indirecta (no conjugada)', range: { min: 0.4, max: 0.8, unit: 'mg / dL' } },
   { name: 'Bilirrubina total', range: { min: 0.5, max: 0.8, unit: 'mg / dL' } },

   { name: 'Brecha aniónica', range: { min: 8, max: 14, unit: 'mEq / L' } },
   { name: 'BUN (nitrogeno ureico en sangre)', range: { min: 11, max: 15, unit: 'mL / dL' } },
   { name: 'Calcio sérico', range: { min: 9.4, max: 9.8, unit: 'mg / dL' } },
   {
     name: 'Cap. de fijación del hierro (TIBC)',
     range: { min: 300, max: 350, unit: 'μg / L' }
   },
   { name: 'Ceruloplasmina', range: { min: 20, max: 35, unit: 'mg / dL' } },
   { name: 'Cloro sérico', range: { min: 100, max: 105, unit: 'mEq / L' } },
   { name: 'Colesterol total', range: { min: 180, max: 200, unit: 'mg / dL' } },
   {
     name: 'Colesterol/HDL',
     type: 'ratio',
     range: { min: 0, max: 3.3, unit: '' },
     inputs: [
       { name: 'Colesterol', unit: 'mg / dL' },
       { name: 'HDL', unit: 'mg / dL' }
     ]
   },
   { name: 'cortisol sérico (8am en ayunas)', range: { min: 11, max: 15, unit: 'ug / dL' } },
   {
     name: 'Creatinina (Mujer)',
     range: { min: 0.65, max: 0.9, unit: 'mg / dL', gender: 'female' }
   },
   { name: 'Creatinina (Hombre)', range: { min: 0.85, max: 1.1, unit: 'mg / dL', gender: 'male' } },
   { name: 'Creatinkinasa', range: { min: 60, max: 80, unit: 'mg / dL' } },
   { name: 'Cobre sérico', range: { min: 81, max: 130, unit: 'μg / dL' } },
   {
     name: 'Cobre/Zinc',
     type: 'ratio',
     range: { min: 0.8, max: 1.2, unit: '' },
     inputs: [
       { name: 'Cobre', unit: 'μg / dL' },
       { name: 'Zinc', unit: 'mcr / dL' }
     ]
   },
   { name: 'Fibrinógeno', range: { min: 175, max: 300, unit: 'mg / dL' } },
   {
     name: 'Ferritina (Mujer pre-menopausia)',
     range: { min: 10, max: 80, unit: 'ng / mL', gender: 'female' }
   },
   {
     name: 'Ferritina (Mujer post-menopausia)',
     range: { min: 20, max: 120, unit: 'ng / mL', gender: 'female' }
   },
   { name: 'Ferritina (Hombre)', range: { min: 35, max: 120, unit: 'ng / mL', gender: 'male' } },
   { name: 'folato sérico', range: { min: 8, max: Number.POSITIVE_INFINITY, unit: 'ng / mL' } },
   { name: 'Fosfatasa alcalina', range: { min: 50, max: 75, unit: 'u/L' } },
   { name: 'Fósforo sérico', range: { min: 3.8, max: 4.1, unit: 'mg/dL' } },
   { name: 'GGT', range: { min: 15, max: 30, unit: 'u/L' } },
   { name: 'Globulina sérica', range: { min: 2.2, max: 2.4, unit: 'gm/dL' } },
   { name: 'Glicemia en ayuno', range: { min: 80, max: 87, unit: 'mg/dL' } },
   {
     name: 'Glicemia postpandrial(30,60,120 minutos)',
     range: { min: 80, max: 110, unit: 'mg/dL' }
   },
   { name: 'HbA1C (hemoglobina glicosilada)', range: { min: 0, max: 5.3, unit: '%' } },
   { name: 'HDL colesterol', range: { min: 50, max: 70, unit: 'mg/dL' } },
   { name: 'HDL colesterol', range: { min: 50, max: 70, unit: 'mg/dL' } },
   { name: 'Hierro sérico', range: { min: 80, max: 99, unit: 'μg / dL' } },
   { name: 'Homocisteína plasmática', range: { min: 4, max: 7, unit: 'μmol / L' } },
   { name: 'Insulina en ayuno', range: { min: 2, max: 5, unit: 'mUI / dL' } },
   {
     name: 'Insulina postpandrial (30,60,120 minutos)',
     range: { min: 0, max: 25, unit: 'mUI / dL' }
   },
   {
     name: 'Inmuno globulina A sérica',
     range: { min: 100, max: 150, unit: 'mg / dL' }
   },
   {
     name: 'Inmuno globulina E sérica',
     range: { min: 20, max: 50, unit: 'mg / dL' }
   },
   {
     name: 'Inmuno globulina G sérica',
     range: { min: 1000, max: 1200, unit: 'mg / dL' }
   },
   {
     name: 'Inmuno globulina M sérica',
     range: { min: 70, max: 100, unit: 'mg / dL' }
   },
   {
     name: 'Lactato desidrogenasa (LDH)',
     range: { min: 145, max: 160, unit: 'U/L' }
   },
   { name: 'LDL colesterol', range: { min: 90, max: 115, unit: 'mg/dL' } },
   { name: 'Lipoporoteína A', range: { min: 0, max: 30, unit: 'mg/dL' } },
   { name: 'Magnesio sérico', range: { min: 2, max: 2.6, unit: 'mg/dL' } },
   { name: 'Metahemoglobina', range: { min: 0, max: 1, unit: '%' } },
   { name: 'Metilmalonato en orina', range: { min: 0.7, max: 2.3, unit: 'μg /mg creatinina' } },
   { name: 'Metilmalonato en suero', range: { min: 0, max: 270, unit: 'nmol/L ' } },
   { name: 'Potasio sérico', range: { min: 4.4, max: 4.8, unit: 'mEq/L' } },
   { name: 'PCR-US (ultrasensible)', range: { min: 0, max: 1, unit: 'mg/dL' } },
   { name: 'Proteina sérica', range: { min: 7, max: 7.3, unit: 'g/dL' } },
   { name: 'Saturación de transferrina', range: { min: 30, max: 33, unit: '%' } },
   { name: 'Proteina sérica', range: { min: 7, max: 7.3, unit: 'g/dL' } },
   { name: 'Sodio sérico', range: { min: 138, max: 142, unit: 'mEq/L' } },
   { name: 'TSH', range: { min: 0.45, max: 2, unit: 'μUi/mL' } },
   { name: 'T4 libre', range: { min: 1.3, max: 1.8, unit: 'ng/dL' } },
   { name: 'T4 libre', range: { min: 1.3, max: 1.8, unit: 'ng/dL' } },
   { name: 'T4 Total', range: { min: 77.2, max: 154.4, unit: 'nmol/L' } },
   { name: 'T3 libre', range: { min: 3.3, max: 4.5, unit: 'pg-mL' } },
   { name: 'T3 reversa', range: { min: 11, max: 18, unit: 'ng/dL' } },
   { name: 'T3 Total', range: { min: 120, max: 181, unit: 'ng/dL' } },

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
     name: 'T3T/T3R',
     type: 'ratio',
     range: { min: 6, max: Number.POSITIVE_INFINITY, unit: '' },
     inputs: [
       { name: 'T3T', unit: 'ng / dL' },
       { name: 'T3R', unit: 'ng / dL' }
     ]
   },
   { name: 'Triglicéridos', range: { min: 50, max: 75, unit: 'mg/dL' } },
   {
     name: 'Triglicéridos/HDL',
     type: 'ratio',
     range: { min: 0, max: 2, unit: '' },
     inputs: [
       { name: 'Triglicéridos', unit: '' },
       { name: 'HDL', unit: '' }
     ]
   },
   { name: 'VSG (Mujer)', range: { min: 0, max: 10, unit: 'mm/h', gender: 'female' } },
   { name: 'VSG (Hombre)', range: { min: 0, max: 5, unit: 'mm/h', gender: 'male' } },
   {
     name: 'Vitamina B12',
     range: { min: 500, max: Number.POSITIVE_INFINITY, unit: 'pg/mL' }
   },
   {
     name: 'Yoduria (tras carga de 50mg de yodoral)',
     range: { min: 0, max: 45000, unit: 'mcr/24h'}
   },
   {
     name: 'Zinc plasmático',
     range: { min: 90, max: 150, unit: 'mcr/dL'}
   }
 ];
