console.log("ToDo App");

const input = document.getElementById("task-input");
const btn = document.getElementById("add-btn");
const liste = document.getElementById("todo-list");

function ajouterTache() {
  const texte = input.value.trim();
  if (texte === "") {
    alert("Veuillez écrire une tâche !");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texte;

  const btnSupprimer = document.createElement("button");
  btnSupprimer.textContent = "Supprimer";
  btnSupprimer.onclick = function () {
    liste.removeChild(li);
  };

  li.appendChild(btnSupprimer);

  li.addEventListener("click", function (e) {
    if (e.target !== btnSupprimer) {
      li.classList.toggle("terminee");
    }
  });

  liste.appendChild(li);
  input.value = "";
  input.focus();
}

btn.addEventListener("click", ajouterTache);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") ajouterTache();
});