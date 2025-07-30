"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus({ success: true, message: 'Sua mensagem foi enviada com sucesso! Logo retornaremos seu contato.' });
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmissionStatus({ success: false, message: result.error || 'Ocorreu um erro ao enviar a mensagem.' });
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setSubmissionStatus({ success: false, message: 'Não foi possível conectar ao servidor. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='py-16 bg-white' id='contato'>
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 p-6 bg-gray-50 rounded-xl shadow-inner">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Envie-nos uma Mensagem</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                  <input type="text" id="name" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Seu Nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                  <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="seu.email@exemplo.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                  <textarea id="message" name="message" rows={5} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Sua mensagem..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#023cfa] text-white hover:bg-[#030030] font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
                {submissionStatus && (
                  <p className={`mt-4 text-center text-sm font-semibold ${submissionStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                    {submissionStatus.message}
                  </p>
                )}
              </form>
            </div>
            <div className="md:w-1/2 p-6 bg-gray-50 rounded-xl shadow-inner flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Nossos Detalhes</h3>
                <div className="text-lg leading-relaxed text-gray-700 text-center space-y-4 mb-8">
                  <p className="font-semibold">Email: <a href="mailto:info@lordtecnologia.com.br" className="text-[#023cfa] hover:underline">info@lordtecnologia.com.br</a></p>
                  <p className="font-semibold">Telefone: <a href="tel:+5511947554873" className="text-[#023cfa] hover:underline">+55 (11) 94755-4873</a></p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
