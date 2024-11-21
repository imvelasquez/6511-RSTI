const checkoutBtn = document.getElementById("header-shopping-btn");
const logoImg = document.getElementById("logo");

function handleCheckout() {
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}

// Call the function to activate the checkout button event listener
handleCheckout();

logoImg.addEventListener("click", () => {
  window.location.href = "index.html";
});
