import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <p>© {new Date().getFullYear()} Lord Tecnologia by Senitte. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          
          {/* Link para Privacidade abrindo em nova guia */}
          <Link 
            href="/privacidade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 hover:underline"
          >
            Aviso de Privacidade
          </Link>
          
          {/* Link para Termos abrindo em nova guia */}
          <Link 
            href="/termos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 hover:underline"
          >
            Termos de Uso
          </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
