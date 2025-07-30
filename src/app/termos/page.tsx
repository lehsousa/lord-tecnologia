import React from 'react';

// Este componente será a sua página de Termos de Uso.
// A rota /termos será criada automaticamente pelo Next.js.
const TermsOfUsePage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 text-center">
            📜 TERMOS DE USO
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Última atualização: 30 de Julho de 2025
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Objeto</h2>
              <p>Estes Termos regulamentam o uso do site operado pela Lord Tecnologia, disponível em https://lord-tecnologia., incluindo o uso do formulário de contato.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Aceite</h2>
              <p>Ao acessar nosso site e nos contatar através do formulário, você declara que leu, compreendeu e concorda integralmente com estes Termos de Uso e com nosso Aviso de Privacidade.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Uso do serviço</h2>
              <p>Você se compromete a fornecer informações verdadeiras e precisas no formulário de contato e a não utilizar o site para fins ilícitos ou que violem direitos de terceiros. Reservamo-nos o direito de negar ou encerrar o acesso ao serviço em caso de uso indevido.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Propriedade intelectual</h2>
              <p>Todo o conteúdo presente no site, incluindo textos, imagens, logotipos e design, é de propriedade da Lord Tecnologia e protegido por leis de direitos autorais. A reprodução, cópia ou distribuição de qualquer conteúdo sem autorização prévia é estritamente proibida.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Limitação de responsabilidade</h2>
              <p>O site é fornecido "como está", sem garantias de qualquer tipo. Na máxima extensão permitida pela lei, não nos responsabilizamos por quaisquer danos diretos ou indiretos decorrentes do uso ou da incapacidade de uso do site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Alterações nos Termos</h2>
              <p>Podemos revisar e alterar estes Termos a qualquer momento. A nova versão entrará em vigor na data de sua publicação no site. Recomendamos a revisão periódica destes Termos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Legislação aplicável</h2>
              <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de [Sua Cidade - Ex: São Paulo] para dirimir quaisquer controvérsias.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
