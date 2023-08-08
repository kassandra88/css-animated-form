const labels = document.querySelectorAll(".form_control label");
const ANIMATION_DELAY = 50;

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, idx) =>
        `<span style='transition-delay:${
          idx * ANIMATION_DELAY
        }ms'>${letter}</span>`
    )
    .join("");
});
