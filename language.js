const language = () => {
  $("[data-localize]").localize("mylanguage", { language: "es" });
};
document.getElementById("es").addEventListener("click", language);

const original = () => {
  $("[data-localize]").localize("mylanguage", { language: "en" });
};
document.getElementById("en").addEventListener("click", original);
