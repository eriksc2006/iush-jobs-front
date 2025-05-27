import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Itrabajo from '../assets/Backtt.jpg'; 

      
type Carrera =
  | 'Ingeniería de Sistemas'
  | 'Contaduría'
  | 'Administración de Empresas'
  | 'Derecho';

const ofertas: Record<Carrera, string[]> = {
  'Ingeniería de Sistemas': [
    'Desarrollador Frontend - TechCompany',
    'Practicante QA - StartupX',
  ],
  'Contaduría': [
    'Asistente contable - Firmax',
    'Pasante en auditoría - Contadores Unidos',
  ],
  'Administración de Empresas': [
    'Analista junior - Compañía Z',
    'Practicante en logística - Transporte S.A.',
  ],
  'Derecho': [
    'Pasante jurídico - Bufete López',
    'Asesor legal junior - JurisConsultores',
  ],
};

const Homepage = () => {
  const [selectedCareer, setSelectedCareer] = useState<Carrera>('Ingeniería de Sistemas');

  const carreras = Object.keys(ofertas) as Carrera[];

  return (
    <div className="min-h-screen bg-gray-100 p-10"
     style={{
       backgroundImage: `url(${Itrabajo})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
     }}>
     
      {/* Sección principal */}
      <div className="bg-white p-8 rounded shadow-lg max-w-5xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Bienvenido al portal de empleos</h1>
        <p className="text-gray-700 mb-6">
          Encuentra oportunidades laborales o realiza trueques de habilidades con estudiantes y egresados.
        </p>

        {/* Lista desplegable para seleccionar carrera */}
        <div className="mb-6">
          <label htmlFor="carrera-select" className="block text-lg font-semibold text-gray-700 mb-2">
            Selecciona tu carrera:
          </label>
          <select
            id="carrera-select"
            value={selectedCareer}
            onChange={(e) => setSelectedCareer(e.target.value as Carrera)}
            className="w-full max-w-md px-4 py-3 text-lg border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
          >
            {carreras.map((carrera) => (
              <option key={carrera} value={carrera}>
                {carrera}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-indigo-500 mb-3">
            Ofertas para {selectedCareer}
          </h2>
          <ul className="list-disc pl-5 text-gray-800 space-y-3">
            {ofertas[selectedCareer].map((oferta, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-indigo-600">💼</span>
                {oferta}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sección de Vacantes Destacadas */}
      <div className="bg-white p-8 mt-8 rounded shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Vacantes Destacadas</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-3">
          <li>Desarrollador Backend - SoftwareTech</li>
          <li>Asistente administrativo - Empresa S.A.</li>
          <li>Diseñador gráfico - Creativos Ltda.</li>
          <li>Analista de datos - DataCorp</li>
        </ul>
      </div>

      {/* Cómo funciona el portal */}
      <div className="bg-indigo-100 p-8 mt-8 rounded shadow-lg max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">¿Cómo funciona el portal?</h2>
        <p className="text-gray-700 mb-6">
          El portal de empleos conecta a estudiantes y egresados con empresas que buscan talento joven.
          Los usuarios pueden postularse a vacantes o intercambiar habilidades en un sistema de trueque.
        </p>
        
      </div>

      {/* Botón flotante para acceder a la página de registro */}
      <div className="fixed bottom-6 right-6 hidden">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition">
          Preguntas Frecuentes
        </button>
      </div>
    </div>
  );
};

export default Homepage;