import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="max-w-auto mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-2xl">Portal de Empleos</Link>
        </div>
        <div className="hidden md:flex space-x-6" id='hidden_navbar'>
          <Link to="/homepage" className="text-white hover:text-indigo-200">Inicio</Link>
          <Link to="/about" className="text-white hover:text-indigo-200">Sobre Nosotros</Link>
          <Link to="/contact" className="text-white hover:text-indigo-200">Contacto</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={() => document.getElementById('hidden_navbar')?.classList.toggle('hidden')}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar el formulario, por ejemplo a un servidor o a un servicio de correo.
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
  };

  return (
    



    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Contáctanos</h1>
        <p className="text-gray-700 mb-6">
          Si tienes alguna pregunta, comentario o sugerencia, ¡no dudes en contactarnos! Estaremos felices de
          ayudarte.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-800 py-2 px-3 transition-colors duration-150"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-800 py-2 px-3 transition-colors duration-150"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-800 py-2 px-3 transition-colors duration-150"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-200"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
