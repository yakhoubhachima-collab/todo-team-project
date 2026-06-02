// ==========================================
//   ToDo List — script.js
//   Étudiant C: Nouradine Abdramane Yacoub — JavaScript
//   TP2 DAWM — ENASTIC 2025-2026
// ==========================================

console.log("ToDo App");

// ── 1. Sélection des éléments HTML ──────────
const input  = document.getElementById("task-input");
const btn    = document.getElementById("add-btn");
const liste  = document.getElementById("todo-list");

// ── 2. Création d'une tâche ─────────────────
function ajouterTache() {
  const texte = input.value.trim();

  // Ne rien faire si le champ est vide
  if (texte === "") {
    alert("Veuillez écrire une tâche !");
    return;
  }

  // Créer l'élément <li>
  const li = document.createElement("li");
  li.textContent = texte;

  // Créer le bouton Supprimer
  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.onclick = function () {
    supprimerTache(li);
  };

  // Ajouter le bouton dans le <li>
  li.appendChild(btnSupprimer);

  // Cliquer sur le texte = marquer comme terminée
  li.addEventListener("click", function (e) {
    // Ne pas déclencher si on clique sur le bouton Supprimer
    if (e.target !== btnSupprimer) {
      marquerTerminee(li);
    }
  });

  // Ajouter le <li> dans la liste <ul>
  liste.appendChild(li);

  // Vider le champ de saisie
  input.value = "";
  input.focus();
}

// ── 3. Suppression d'une tâche ──────────────
function supprimerTache(li) {
  liste.removeChild(li);
}

// ── 4. Marquer une tâche comme terminée ─────
function marquerTerminee(li) {
  li.classList.toggle("terminee");
}

// ── 5. Événements ───────────────────────────

// Clic sur le bouton Ajouter
btn.addEventListener("click", ajouterTache);

// Appuyer sur Entrée dans le champ texte
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    ajouterTache();
  }
});