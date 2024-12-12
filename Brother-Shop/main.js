document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");

  // Add horizontal scrolling functionality
  let isDragging = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  carousel.addEventListener("mouseup", () => {
    isDragging = false;
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Optional: Snap to items on scroll end
  carousel.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".carousel-item");
    const itemWidth = items[0].offsetWidth + 10; // Include margin or gap
    const scrollPosition = Math.round(carousel.scrollLeft / itemWidth);
    carousel.scrollLeft = scrollPosition * itemWidth;
  });
});
function toggleMenu() {
  const menu = document.getElementById("menu-hamburguer");
  const button = document.querySelector(".hamburguer-btn");

  menu.classList.toggle("open"); // Alterna a classe do menu
  button.classList.toggle("open"); // Alterna a animação do botão
}
document.addEventListener("DOMContentLoaded", () => {
  // Verificar se o usuário está logado
  const userEmail = localStorage.getItem("userEmail");
  const userAvatarUrl = localStorage.getItem("userAvatar");

  if (userEmail && userAvatarUrl) {
    // Exibir o avatar e o e-mail na página inicial
    const avatarContainer = document.getElementById("user-avatar-container");
    const avatarImage = document.createElement("img");
    const userName = document.createElement("span");

    avatarImage.src = userAvatarUrl;
    avatarImage.alt = "Avatar do Usuário";
    avatarImage.classList.add("avatar-image");

    userName.textContent = userEmail;
    userName.classList.add("user-name");

    avatarContainer.appendChild(avatarImage);
    avatarContainer.appendChild(userName);
  }
});
