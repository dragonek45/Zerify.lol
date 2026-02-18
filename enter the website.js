// Ukrycie elementów od razu
const elements = document.querySelectorAll("body > *");
elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(120px)";
});

// Po załadowaniu strony uruchamiamy animację
window.addEventListener("load", () => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease"; // ustawiamy transition dopiero teraz
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 350); // opóźnienie między elementami
  });
});
