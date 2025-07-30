import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// --- VERSÃO PARA PRODUÇÃO ---
// O destino do e-mail foi alterado para o e-mail de produção.
const toEmail = 'info@lordtecnologia.com.br'; 

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      // O remetente agora usa o seu domínio verificado.
      from: 'Contato Site <contato@lordtecnologia.com.br>', 
      to: [toEmail], // Enviando para o e-mail de produção.
      subject: `Nova Mensagem de Contato de ${name}`,
      replyTo: email, 
      html: `
        <h1>Nova mensagem do site Lord Tecnologia</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return NextResponse.json({ error: 'Erro ao enviar a mensagem.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json({ error: 'Ocorreu um erro inesperado.' }, { status: 500 });
  }
}
