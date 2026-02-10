const scene = document.getElementById("scene");
const env = document.getElementById("env");
const paper = document.getElementById("paper");
const hint = env.querySelector(".hint");

function setOpen(nextState) {
  scene.classList.toggle("is-open", nextState);
  env.setAttribute("aria-expanded", String(nextState));
  hint.textContent = nextState ? "clique para fechar" : "clique para abrir";

  if (nextState) {
    window.setTimeout(() => paper.focus(), 280);
  }
}

env.addEventListener("click", () => {
  const isOpen = scene.classList.contains("is-open");
  setOpen(!isOpen);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && scene.classList.contains("is-open")) {
    setOpen(false);
    env.focus();
  }
});
