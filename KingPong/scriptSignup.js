document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Obtendo os valores dos campos do formulário
  const username = document.getElementById('username').value;
  const birthday = document.getElementById('birthday').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Verifica se as senhas são iguais
  if (password !== confirmPassword) {
      alert('As senhas não são iguais. Por favor, tente novamente.');
      return; // Interrompe o fluxo caso as senhas não sejam iguais
  }

  // Salva as informações no localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('birthday', birthday);
  localStorage.setItem('password', password);

  // Exibe o dialog de sucesso
  const dialog = document.getElementById('dialog');
  dialog.showModal();

  // Fecha o dialog ao clicar no link "Voltar"
  document.getElementById('closeDialog').addEventListener('click', function() {
      dialog.close();
  });
});
