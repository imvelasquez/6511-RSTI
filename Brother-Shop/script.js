const hamburger = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");
const userAvatar = document.getElementById("user-avatar");

// Função para abrir/fechar o menu
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("active");
});

// Função para exibir a foto do usuário
if (localStorage.getItem("userAvatar")) {
  userAvatar.style.backgroundImage = `url(${localStorage.getItem(
    "userAvatar"
  )})`;
}
