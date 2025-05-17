const toggleButton = document.querySelector(".toggle-list");
const hiddenList = document.querySelector(".hidden-list");

toggleButton.addEventListener("click", () => {
  hiddenList.classList.toggle("visible"); // Додає/прибирає клас "visible"
  
  // Змінює текст кнопки
  if (hiddenList.classList.contains("visible")) {
    toggleButton.textContent = "Сховати характеристики";
  } else {
    toggleButton.textContent = "Показати характеристики";
  }
});


  window.addEventListener("DOMContentLoaded", () => {
      document.body.classList.remove("fade-out");
  });
function fadeOut(event, url) {
      event.preventDefault(); // не переходити одразу
      document.body.classList.add("fade-out"); // плавне зникнення
      setTimeout(() => {
        window.location.href = url; // перехід після анімації
      }, 500); // має відповідати transition у CSS
    }
  window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');

      setTimeout(() => {
        preloader.style.opacity = '0';

        setTimeout(() => {
          preloader.remove();
          document.body.classList.add('loaded');
          document.body.classList.remove('lock-scroll');
        }, 500);
      }, 4000); // час тривалості гіфки
    });