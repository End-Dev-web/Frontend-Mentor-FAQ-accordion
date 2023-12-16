const questions = document.querySelectorAll("[question-data]");

questions.forEach((item) => {
  const btn = item.querySelector("[data-btn]");
  btn.addEventListener("click", () => {
    questions.forEach((remove) => {
      if (remove !== item) {
        remove.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});
