import React from 'react'

function Footer() {
  return (
     <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>© {new Date().getFullYear()} Lord Tecnologia by Senitte. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Termos</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer