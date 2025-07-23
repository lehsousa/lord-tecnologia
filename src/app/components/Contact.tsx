"use client";

import React, { useState, useRef } from 'react';

interface AppProps {}

const Contact: React.FC<AppProps> = () => {
 
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);



  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const message = messageInputRef.current?.value;
    const phoneNumber = '5511949181152'; // Seu número com o código do país (Brasil +55)

    const whatsappMessage = `Nome: ${name || ''}\nEmail: ${email || ''}\nMensagem: ${message || ''}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className='py-16 bg-white' id='contato'>

     <section  className="py-16 md:py-24 ">
        <div className="container mx-auto px-4 max-w-6xl"> {/* Increased max-width for two columns */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column: Contact Form */}
            <div className="md:w-1/2 p-6 bg-gray-50 rounded-xl shadow-inner">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Envie-nos uma Mensagem</h3>
              <form className="space-y-4" onSubmit={handleSubmit}> {/* Adicionado o onSubmit */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                  <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Seu Nome" ref={nameInputRef} /> {/* Adicionado ref */}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="seu.email@exemplo.com" ref={emailInputRef} /> {/* Adicionado ref */}
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                  <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Sua mensagem..." ref={messageInputRef}></textarea> {/* Adicionado ref */}
                </div>
                <button type="submit" className="bg-[#023cfa] text-white hover:bg-[#030030] font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Right Column: Contact Details + Map */}
            <div className="md:w-1/2 p-6 bg-gray-50 rounded-xl shadow-inner flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nossos Detalhes</h3>
                <div className="text-lg leading-relaxed text-gray-700 text-center space-y-4 mb-8">
                  <p className="font-semibold">Email: <a href="mailto:contato@seusite.com" className="text-[#023cfa] hover:underline">info@lordtecnologia.com.br</a></p>
                  <p className="font-semibold">Telefone: <a href="tel:+5511987654321" className="text-[#023cfa] hover:underline">+55 (11) 94755-4873</a></p>
                  <p className="font-semibold">
                    Endereço: <a
                      href="https://www.google.com/maps/search/?api=1&query=Rua%20Silva%20Bueno%202122%20sala%2034"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#023cfa] hover:underline"
                    >
                      Rua Silva Bueno 2122 sala 34
                    </a>
                  </p>
                </div>
              </div>
              {/* Google Map Embed */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md w-full" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7440000000005!2d-46.6083379844781!3d-23.57864798468305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b4c0b0c201%3A0x6d9a8c1e4b0c201!2sRua%20Silva%20Bueno%2C%202122%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004208-002!5e0!3m2!1spt-BR!2sbr!4v1678912345678!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}

                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Rua Silva Bueno 2122 sala 34"
                ></iframe>
                {/* Note: For a live production environment, you might need a Google Maps API key
                  and a more specific embed URL or the Google Maps JavaScript API for full functionality.
                  The current URL is a general embed for the address. */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact