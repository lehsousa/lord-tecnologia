import React from 'react'

function About() {
  return (
    <div className="py-16" id="sobre">
      <section className="md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-12 ">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-sm font-semibold text-[#030030] uppercase mb-2">SOBRE NÓS</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800 mb-6">
                Conectando o Futuro: Soluções Completas em Telecomunicações.
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Somos especialistas na área de telecomunicações, dedicados a fornecer internet de alta qualidade e soluções de infraestrutura robustas. Nossa missão é conectar pessoas e empresas com o que há de mais moderno em redes de fibra óptica, garantindo comunicação eficiente e segura.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Oferecemos internet dedicada para clientes corporativos, assegurando estabilidade e velocidade para suas operações críticas. Além disso, atendemos condomínios com soluções personalizadas, levando conectividade de ponta para todos os moradores. Nossa expertise abrange desde o planejamento e implementação de infraestrutura de rede até a manutenção e otimização contínua.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Com um foco incansável na inovação, estamos sempre explorando novas tecnologias para aprimorar nossos serviços e expandir nossa capacidade. Acreditamos que uma infraestrutura de rede sólida é a base para o sucesso no mundo digital de hoje.
              </p>
              <a href="#contato" className="bg-[#023cfa] text-white hover:bg-[#030030] px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Saiba Mais
              </a>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center md:justify-end relative">
              {/* Abstract shapes - simplified with Tailwind classes */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="/assets/data center.jpg"
                alt=""
                className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover relative z-10"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/400x300/6366F1/FFFFFF?text=Imagem+Nao+Encontrada';
                }}

              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About