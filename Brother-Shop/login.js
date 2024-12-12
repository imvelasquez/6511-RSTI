document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginContainer = document.getElementById("login-container");
  const registerContainer = document.getElementById("register-container");
  const homeContainer = document.getElementById("home-container");
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");
  const userAvatar = document.getElementById("user-avatar");
  const emailInput = document.getElementById("email");

  let isLoggedIn = false; // Definindo se o usuário está logado

  // Alternar entre Login e Cadastro
  showRegister.addEventListener("click", () => {
    loginContainer.classList.add("hidden");
    registerContainer.classList.remove("hidden");
  });

  showLogin.addEventListener("click", () => {
    registerContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
  });

  // Evento de Login
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Simulando um login (substitua com lógica real, como API)
    const email = emailInput.value;

    if (email) {
      isLoggedIn = true;

      // Salvar os dados do usuário no localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userAvatar", "https://via.placeholder.com/40"); // Substitua pela URL real da foto do usuário

      // Após o login bem-sucedido, redirecionar para a página inicial (index.html)
      window.location.href = "index.html"; // Altere para o caminho correto do seu arquivo index.html
    }
  });

  // Evento de Cadastro
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Simulando um cadastro (substitua com lógica real, como API)
    const regEmail = document.getElementById("reg-email").value;

    if (regEmail) {
      alert("Cadastro realizado com sucesso!");
      // Após o cadastro, mostrar o formulário de login novamente
      registerContainer.classList.add("hidden");
      loginContainer.classList.remove("hidden");
    }
  });
});
