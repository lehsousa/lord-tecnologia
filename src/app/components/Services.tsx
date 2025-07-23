import React from 'react'

function Services() {
  return (
    <div className="py-16 bg-gray-100" id='servicos'>

     <section className=" md:py-24 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
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


            {/* Service Card 2: Atendimento a Condomínios */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-[#023cfa] mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1m-1 4h1"></path></svg>
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


            {/* Service Card 6: Suporte Técnico Especializado */}
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
          </div>
        </div>
      </section>
    </div>

  )
}

export default Services