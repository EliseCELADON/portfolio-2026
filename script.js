

document.addEventListener("DOMContentLoaded", function() {
   const btn = document.getElementById("lang-btn");
   const titre = document.getElementById("titre");
   const metier = document.getElementById("metier");
   const description = document.getElementById("description");
   let en = false;

   // Texte par défaut en français
   titre.textContent = "Bienvenue sur mon Portfolio 2026";
   metier.textContent = "Créatice & Graphiste";
   description.textContent = "Voici une sélection de mes projets récents et de mes réalisations professionnelles.";

   btn.addEventListener("click", function() {
      if (!en) {
         titre.textContent = "Welcome to my Portfolio 2026";
         metier.textContent = "Creator & Graphic Designer";
         description.textContent = "Here is a selection of my recent projects and professional achievements.";
         btn.textContent = "FR";
         en = true;
      } else {
         titre.textContent = "Bienvenue sur mon Portfolio 2026";
         metier.textContent = "Créatice & Graphiste";
         description.textContent = "Voici une sélection de mes projets récents et de mes réalisations professionnelles.";
         btn.textContent = "EN";
         en = false;
      }
   });
});
