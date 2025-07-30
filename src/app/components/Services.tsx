import React from 'react'
import Image from 'next/image' // Importamos o componente Image

function Services() {
  return (
    <div className="py-16 bg-gray-100" id='servicos'>

      <section className=" md:py-24 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
          
          {/* Grid 3x3 com 8 serviços + 1 logo central */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Service Card 1: Internet Dedicada */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Internet Dedicada</h3>
              <p className="text-gray-600 text-center">
                Conexão exclusiva e de alta performance para empresas, garantindo estabilidade e segurança.
              </p>
            </div>

            {/* Service Card 2: Conectividade para Condomínios */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Conectividade para Condomínios</h3>
              <p className="text-gray-600 text-center">
                Soluções de internet e rede sob medida para condomínios residenciais e comerciais.
              </p>
            </div>

            {/* Service Card 3: Infraestrutura de Rede */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Infraestrutura de Rede</h3>
              <p className="text-gray-600 text-center">
                Planejamento, implementação e manutenção de infraestruturas de rede eficientes e escaláveis.
              </p>
            </div>

            {/* Service Card 4: Redes de Fibra Óptica */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Redes de Fibra Óptica</h3>
              <p className="text-gray-600 text-center">
                Desenvolvimento e instalação de redes de fibra óptica para alta velocidade e confiabilidade.
              </p>
            </div>

            {/* === CARD CENTRAL COM A LOGO === */}
            <a href="#home" className="flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                <Image src="/assets/lord-logo.png" alt="logo lord" width={200} height={200} className="max-w-full h-auto"/>
            </a>
            
            {/* Service Card 5: Soluções em Telecomunicações */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Soluções em Telecomunicações</h3>
              <p className="text-gray-600 text-center">
                Amplo portfólio de serviços e tecnologias para atender às demandas do setor de telecomunicações.
              </p>
            </div>
            
            {/* Service Card 6: Suporte Técnico */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Suporte Técnico</h3>
              <p className="text-gray-600 text-center">
                Suporte técnico especializado para garantir o funcionamento contínuo e otimizado de suas redes.
              </p>
            </div>

            {/* === NOVOS CARDS DE SERVIÇO === */}

            {/* Service Card 7: CFTV / Sistemas de Vigilância */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">CFTV / Sistemas de Vigilância</h3>
              <p className="text-gray-600 text-center">
                Garanta a segurança do seu patrimônio com sistemas de CFTV de alta definição e monitoramento remoto.
              </p>
            </div>

            {/* Service Card 8: Projetos Personalizados */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.455-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.455l1.197.398-1.197.398a3.375 3.375 0 00-2.456 2.455z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Projetos Personalizados</h3>
              <p className="text-gray-600 text-center">
                Desenvolvemos soluções de telecom e TI sob medida para atender às suas demandas específicas.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;