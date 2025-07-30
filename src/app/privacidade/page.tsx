import React from 'react';

// Este componente será a sua página de Aviso de Privacidade.
// O Next.js automaticamente cria a rota /privacidade por causa do nome da pasta.
const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 text-center">
            📝 AVISO DE PRIVACIDADE
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Última atualização: 30 de Julho de 2025
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Quem somos</h2>
              <p><strong>Controladora dos dados:</strong> Lord Tecnologia, com sede em Rua Silva Bueno 2122 sala 34.</p>
              {/* <p><strong>Encarregado de dados (DPO):</strong> [Nome/Função], e-mail para contato: [email do DPO]</p> */}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Dados que coletamos</h2>
              <p>Quando você preenche nosso formulário de contato, coletamos apenas os dados fornecidos voluntariamente, como nome e e-mail. Não realizamos o tratamento de dados sensíveis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Finalidade do tratamento</h2>
              <p>Os dados são processados exclusivamente para responder às suas solicitações e manter contato. Não utilizamos seus dados para fins de marketing ou outras finalidades sem o seu consentimento.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Base legal</h2>
              <p>Tratamos os dados com base no seu consentimento expresso ao enviar o formulário, conforme o Art. 7º da Lei Geral de Proteção de Dados (LGPD).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Compartilhamento de dados</h2>
              <p>Não compartilhamos seus dados com terceiros, exceto por obrigação legal ou judicial.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Retenção</h2>
              <p>Seus dados são mantidos em nossa base apenas pelo tempo necessário para atender à sua solicitação. Após esse período, serão eliminados de forma segura ou anonimizados.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Direitos dos titulares</h2>
              <p>Conforme o Art. 18 da LGPD, você pode a qualquer momento solicitar:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Acesso, correção ou exclusão dos seus dados;</li>
                <li>Revogação do seu consentimento;</li>
                <li>Portabilidade ou limitação do tratamento dos dados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Medidas de segurança</h2>
              <p>Adotamos práticas técnicas e administrativas para proteger seus dados contra acessos não autorizados e situações acidentais ou ilícitas.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Atualizações do Aviso</h2>
              <p>Podemos atualizar este aviso periodicamente. A versão mais recente estará sempre disponível em nosso site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">10. Legislação e foro</h2>
              <p>Este aviso é regido pela legislação brasileira, incluindo a LGPD (Lei nº 13.709/2018). Para eventuais disputas, fica eleito o foro da Comarca de São Paulo.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
