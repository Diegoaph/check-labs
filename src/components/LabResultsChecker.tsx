import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import styles from '../styles/LabResultsChecker.module.css';
import type { Test } from '../types';
import { labTests } from '../utils/data';
import icon from '../../public/blood_icon.png';
type TestResult = number | { [key: string]: number };
const sign: string = 'Desarrollo web: Dev.DiegoPacheco@Gmail.com'
export default function LabResultsChecker() {
  const [results, setResults] = useState<{ [key: string]: TestResult }>({});
  const [patientName, setPatientName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPatientName(event.target.value);
  };

  const handleInputChange = (testName: string, value: string, inputIndex?: number) => {
    if (inputIndex !== undefined) {
      setResults((prev) => ({
        ...prev,
        [testName]: {
          ...(prev[testName] as { [key: string]: number }),
          [inputIndex]: Number.parseFloat(value) || 0
        }
      }));
    } else {
      setResults((prev) => ({ ...prev, [testName]: Number.parseFloat(value) || 0 }));
    }
  };

  const resetValues = () => {
    setResults({});
    setPatientName('');
    // Limpia los valores de los inputs
    const inputs = document.querySelectorAll<HTMLInputElement>(`.${styles.input}`);
    inputs.forEach((input) => (input.value = ''));
  };

  const getResultColor = (test: Test, result: TestResult): string => {
    if (test.type === 'ratio' && typeof result === 'object') {
      const ratio = result['0'] / result['1'];
      if (ratio < test.range.min) return styles.resultLow;
      if (ratio > test.range.max) return styles.resultHigh;
      return styles.resultNormal;
    } else if (typeof result === 'number') {
      if (result < test.range.min) return styles.resultLow;
      if (result > test.range.max) return styles.resultHigh;
      return styles.resultNormal;
    }
    return '';
  };

  const getResultText = (test: Test, result: TestResult): string => {
    if (test.type === 'ratio' && typeof result === 'object') {
      const ratio = result['0'] / result['1'];
      if (ratio < test.range.min) return 'Bajo';
      if (ratio > test.range.max) return 'Alto';
      return 'Normal';
    } else if (typeof result === 'number') {
      if (result < test.range.min) return 'Bajo';
      if (result > test.range.max) return 'Alto';
      return 'Normal';
    }
    return '';
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Resumen de Resultados de Laboratorio', 20, 20);

    doc.setFontSize(12);
    let yPosition = 40;
    const lineHeight = 10;

    labTests.forEach((test) => {
      const result = results[test.name];
      if (result !== undefined) {
        const resultText = getResultText(test, result);
        const resultValue =
          typeof result === 'number'
            ? `${result} ${test.range.unit}`
            : `${result['0']} / ${result['1']}`;

        doc.text(`${test.name}: ${resultText} (${resultValue})`, 20, yPosition);
        yPosition += lineHeight;

        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
      }
    });

    const currentDate = new Date().toLocaleDateString();

    doc.text(
      `${patientName} - ${currentDate}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 15,
      { align: 'center' }
    );
    doc.text(
      `${sign}`,
      doc.internal.pageSize.getWidth() / 2,
      doc.internal.pageSize.getHeight() - 10
    );

    doc.save('resumen_laboratorio.pdf');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.title}>Laboratorio de Análisis Clínicos </h1>{' '}
          <img
            className={styles.icon}
            src={icon}
            alt='blood_icon'
          />
        </div>
        <div className={styles.headerWrapper}>
          <input
            type='text'
            placeholder='Nombre del paciente'
            className={`${styles.input} ${styles.nameInput}`}
            value={patientName}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.headerInputWrapper}>
          <button
            onClick={generatePDF}
            className={styles.generateButton}>
            Generar Resumen PDF
          </button>
          <button
            onClick={resetValues}
            className={styles.resetButton}>
            Reiniciar Valores
          </button>
        </div>
        <div className={styles.card}>
          {labTests.map((test) => (
            <section
              key={test.name}
              className={styles.listItem}>
              <div className={styles.testName}>
                {test.name}
                {results[test.name] && (
                  <div
                    className={`${styles.resultBadge} ${getResultColor(test, results[test.name])}`}>
                    {getResultText(test, results[test.name])}
                  </div>
                )}
              </div>
              <div className={styles.testRange}>
                Rango: {test.range.min} -{' '}
                {test.range.max === Number.POSITIVE_INFINITY ? '∞' : test.range.max}{' '}
                {test.range.unit}
              </div>
              <div className={styles.inputWrapper}>
                {test.type === 'ratio' && test.inputs ? (
                  <>
                    {test.inputs.map((input, index) => (
                      <div
                        className={styles.inputWrapper}
                        key={input.name}>
                        <label className={styles.testRange}>{input.name}</label>
                        <input
                          type='number'
                          className={styles.input}
                          placeholder={input.name}
                          onChange={(e) => handleInputChange(test.name, e.target.value, index)}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <input
                    type='number'
                    className={styles.input}
                    placeholder='Valor'
                    onChange={(e) => handleInputChange(test.name, e.target.value)}
                  />
                )}
              </div>
            </section>
          ))}
        </div>
        <div className={styles.headerWrapper}>
          <button
            onClick={generatePDF}
            className={styles.generateButton}>
            Generar Resumen PDF
          </button>
          <button
            onClick={resetValues}
            className={styles.resetButton}>
            Reiniciar Valores
          </button>
        </div>
      </div>
      <footer className={styles.footer}>
        <small
          className={styles.sign}
          title='Haz clic para contratar servicios de desarrollo web'
          onClick={() => {
            window.alert(
              '¿Necesitas un sitio web profesional? ¡Contrata nuestros servicios de desarrollo web!, para mas informacion escribenos a Dev.DiegoPacheco@Gmail.com'
            );
            // window.location.href = 'mailto:dev.diegopachecp@gmail.com';
          }}>
          {sign}
        </small>
      </footer>
    </div>
  );
}
