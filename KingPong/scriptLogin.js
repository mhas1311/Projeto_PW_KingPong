document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtendo os valores dos campos do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtendo as informações do localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Verificando se o username e password correspondem ao que está salvo
    if (username === storedUsername && password === storedPassword) {
        // Exibe o nome de usuário no canto superior da tela
        const userDisplay = document.getElementById('user-display');
        userDisplay.textContent = `Bem-vindo, ${storedUsername}!`;
        userDisplay.style.display = 'block';

        // Opcional: Redirecionar para a página home após um tempo
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 2000); // Aguarda 2 segundos antes de redirecionar
    } else {
        document.getElementById('error-message').style.display = 'block'; // Mostra uma mensagem de erro
    }
});