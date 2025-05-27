import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; 
import Swal from 'sweetalert2';
import logoIush from '../assets/IUSH.jpg';

export default function Signin() {
  const navigate = useNavigate();

  const funcAutentication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    
    const email = target.email.value.trim();
    const password = target.password.value.trim();

    if (!email || !password) {
      alert('Por favor, complete todos los campos');
      return;
    }

    try {
      const response = await api.post('/auth/login', { email, password });
      if (response.status === 200) {
        // Aquí puedes manejar la respuesta del backend, como guardar el token
        console.log('Login successful:', response.data);
        navigate('/homepage');
      }
    } catch (error) {
      console.error('Error durante el login:', error);
      Swal.fire({
      title: "Credenciales Incorrectas",
      text: "Verifica tu correo y/o contraseña.",
      icon: "error",
      imageUrl: "https://bit.ly/43gT3l7",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image"
});

    }
  };
  
  const navigateToForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className='w-full h-screen flex'>
      <div className='relative w-1/2 h-full'>
        <img 
          className='absolute inset-0 w-full h-full object-cover'
          src="https://www.iush.edu.co/Uploads/header/admisiones/principal.jpg"
          alt="Background"
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute top-10 left-10'>
          <img 
            className='h-16'
            src={logoIush}
            alt="IUSH Logo" 
          />
        </div>
      </div>

      <div className='w-1/2 h-full bg-gray-900 flex items-center justify-center px-16'>
        <div className='max-w-md w-full'>
          <section className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white mb-2">
                <span className="block text-indigo-500">Portal de Empleos IUSH</span>
                <span className="block text-white">Iniciar Sesión</span>
              </h1>
              <p className="text-gray-400 text-lg">Comienza nuestra aventura juntos</p>
            </div>

            <form className="space-y-4" onSubmit={funcAutentication}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 transition-colors duration-100"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 transition-colors duration-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200"
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="text-center text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-indigo-500"
                onClick={navigateToForgotPassword} 
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
