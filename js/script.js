function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo");
  let titre = document.getElementById("titre").value;
  let texte = document.getElementById("contenu").value;
  let nombre = parseInt(document.getElementById("qty").value);
  
  demo.textContent= "";

  for (let i = 0; i < nombre; i++){
    let h2 = document.createElement("h2");
    h2.textContent = titre + " " + i;

    h2.setAttribute("monId", "Id" + i);

    h2.addEventListener("mousedown", function(event) {
      console.log(event);
      console.log(event.target);
      console.log(event.target.getAttribute("monId"));

      if(event.target.style.backgroundColor == "gray"){
        event.target.style.backgroundColor = "white";
      }
      else{
        event.target.style.backgroundColor = "gray";
      }
    });

    demo.appendChild(h2);

    let aside = document.createElement("aside");
    aside.textContent = "Plus de détails à propos de: " + i;
    demo.appendChild(aside);

    h2.addEventListener("mouseenter", function () {
        aside.classList.add("show");
    });
    h2.addEventListener("mouseleave", function () {
        aside.classList.remove("show");
    });

    let p = document.createElement("p");
    p.textContent = texte + " " + i;
    demo.appendChild(p);
  
  }

}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input

  let couleur = document.getElementById("couleur").value;
  let paragraphes = document.getElementById("demo").getElementsByTagName("p");

  for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.color = couleur;
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let nouvelleClasse = document.getElementById("btnClass").value;
  let boutons = document.getElementsByTagName("button");

  for (let i = 0; i < boutons.length; i++) {
    boutons[i].className = nouvelleClasse;
  }
}