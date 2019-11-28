const language = () => {
  $("[data-localize]").localize("mylanguage", { language: "es" });
};
document.getElementById("es").addEventListener("click", language);

const original = () => {
  $("[data-localize]").localize("mylanguage", { language: "en" });
};
document.getElementById("en").addEventListener("click", original);
const languageOne = () => {
  $("[data-localize]").localize("mylanguage", { language: "es" });
};
document.getElementById("es-mobile").addEventListener("click", languageOne);

const originalOne = () => {
  $("[data-localize]").localize("mylanguage", { language: "en" });
};
document.getElementById("en-mobile").addEventListener("click", originalOne);
