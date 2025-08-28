const checkbox = document.getElementById('chk');
const ball = document.querySelector('.ball');
const profileImg = document.getElementById('profile-img'); // pega a foto principal

checkbox.addEventListener('change', () => {
  ball.style.transform = checkbox.checked ? 'translateX(32px)' : 'translateX(0)';
  document.body.classList.toggle('dark-mode', checkbox.checked);

  // troca a foto no modo dark/light
  if (checkbox.checked) {
    profileImg.src = "assets/profile-dark.png"; // imagem para dark mode
  } else {
    profileImg.src = "assets/profile-light1.png"; // imagem para light mode
  }
});
// Adiciona/remover a classe .hovered ao tocar/clicar no mobile
function enableTouchHover(selector, hoverClass = "hovered") {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener("touchstart", function(e) {
      // Remove hover de outros elementos iguais (opcional)
      document.querySelectorAll(selector).forEach(other => {
        if (other !== el) other.classList.remove(hoverClass);
      });
      el.classList.add(hoverClass);
    });
    // Remove o hover ao tocar fora (opcional)
    el.addEventListener("touchend", function(e) {
      setTimeout(() => {
        el.classList.remove(hoverClass);
      }, 400); // tempo para ver o efeito
    });
  });
}

// Exemplo de uso para elementos que devem ter hover no mobile
document.addEventListener("DOMContentLoaded", function() {
  enableTouchHover(".hover-design");
  enableTouchHover(".hover-code");
  enableTouchHover(".hover-create");
  enableTouchHover(".hover-learn");
  // Adicione outros seletores que usam hover se necessário
});