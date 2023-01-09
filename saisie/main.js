// function message() {
//     let genre = prompt("Quel est le genre de votre tamagochi ?");
//     genre = genre
//       .toLowerCase()
//       .replace(/[éèëê]/g, "e")
//       .replace(/[àâä]/g, "a");

//       if (genre != "male" && genre != "femelle") {
//         alert(genre);
//           message();
//         }
//   }
//   message();
function traitement(texte) {
  return texte.toLowerCase().replace(/[àâä]/g, "a").replace(/[éèëê]/g, "e");
}

let btnSexe = document.querySelector('.someclass');
btnSexe.addEventListener('click', (e) => {
  let reponse = prompt("quel est le genre de votre tamagochi ?");
  reponse = traitement(reponse);
  while (reponse != "male" || reponse != "femelle") {
    reponse = prompt('rentrez un genre valide');
  }
})