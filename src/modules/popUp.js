export default () => {
  const cards = document.querySelectorAll('.main-card');
  cards.forEach((el) => el.addEventListener('click', (e) => {
      const target = e.target;
      const currentCard = target.closest('.main-card');
      const popup = document.getElementById("popup");
      const popupContent = document.getElementById("popup-content");
      popup.classList.add("visible")
      const makeClone = (e) => {
          if (e === null) {
              return;
          }
          return e.cloneNode(true);
      }
      const clone = makeClone(currentCard);
      const close = document.createElement('a');
      close.textContent = "X";
      close.setAttribute('href', "#");
      close.classList.add('close');
      clone.prepend(close);
      popupContent.appendChild(clone);

      close.addEventListener("click", () => {
          popup.classList.remove("visible");
          popupContent.textContent = "";

      })

      popupContent.addEventListener("click", () => {
          popup.classList.remove("visible");
          popupContent.textContent = "";

      });
  }))
}