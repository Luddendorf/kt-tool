function showModalCard(card) {
  const modal = document.querySelector(".modal");
  const modalCard = document.querySelector(".modal__overlay");
  const modalCloseBtn = document.querySelector(".modal-close");

  modalCard.append(card);

  modal.classList.add("modal-open");
  modalCard.classList.add("modal__overlay-open");

  document.body.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains("modal-close")
    ) {
      modal.classList.remove("modal-open");
      modalCard.classList.remove("modal__overlay-open");
      card.remove();
    }
  });
}

export default showModalCard;
