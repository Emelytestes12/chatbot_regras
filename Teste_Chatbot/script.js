const chatBox = document.getElementById('chat-box');

// Mostra mensagem inicial assim que a página carrega
window.addEventListener('DOMContentLoaded', () => {
  appendMessage("Boas-vindas ao Chatbot! Para começar, digite: horário, matrícula, documentos ou professor, para obter informações sobre o assunto desejado.");
});

function sendMessage() {
  const inputField = document.getElementById('user-input');
  const userText = inputField.value.trim();
  if (!userText) return;

  // Adiciona mensagem do usuário
  appendMessage(userText, 'user-message');

  // Processa resposta do bot
  const botResponse = getBotResponse(userText.toLowerCase());
  appendMessage(botResponse, 'bot-message');

  inputField.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendMessage(text, className) {
  const msg = document.createElement('div');
  msg.className = `message ${className}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
}

function getBotResponse(input) {
  if(input.includes('horário')) {
    return 'O horário de aulas é de segunda a sexta, das 7h às 17h.';
  } else if(input.includes('matrícula')) {
    return 'As matrículas podem ser feitas no site da escola ou presencialmente.';
  } else if(input.includes('documentos')) {
    return 'Para matrícula, leve RG, CPF e comprovante de residência.';
  } else if(input.includes('professor')) {
    return 'Nossos professores são altamente qualificados e especializados em suas áreas.';
  } else {
    return 'Desculpe, não entendi. Pode reformular a pergunta?';
  }
}
