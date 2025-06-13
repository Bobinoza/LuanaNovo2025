document.addEventListener('DOMContentLoaded', () => {

  // Seleciona todos os botões de agendamento (desktop e mobile)
  const ctaButtons = document.querySelectorAll('.cta-button');

  // Mensagem padrão para agendamento
  const message = "Oi, Luana! Quero agendar minha mentoria Empreendendo na Vida Real 💬";

  // Adiciona o evento de clique a cada botão
  ctaButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Previne o comportamento padrão do link para dar tempo de copiar
      event.preventDefault();

      // Tenta copiar a mensagem para a área de transferência
      navigator.clipboard.writeText(message)
        .then(() => {
          // Mostra um alerta amigável se a cópia funcionar
          alert('Mensagem copiada! 😉\n\nAgora é só colar na conversa do Instagram para agendar.');
        })
        .catch(err => {
          // Se a cópia falhar, informa o usuário (raro em navegadores modernos)
          console.error('Erro ao copiar texto: ', err);
          alert('Não foi possível copiar a mensagem. Por favor, escreva manualmente no Instagram.');
        })
        .finally(() => {
          // Abre o link do Instagram em uma nova aba
          window.open(button.href, '_blank');
        });
    });
  });
});