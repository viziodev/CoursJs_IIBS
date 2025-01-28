const professeurs = [
    {
        nom:"Wane",
        prenom:"Baila",
    }
];
//Recuperer le formualire
const formProf=document.getElementById("form-prof");
//Activer evenement 
formProf.addEventListener("submit", function(event){
    event.preventDefault();
    const nomProf=document.querySelector("#nom").value;
    const prenomProf=document.querySelector("#prenom").value;
     addProfesseur({nom:nomProf,prenom:prenomProf})
      console.log(professeurs);
      formProf.reset(); 
    
     
})

function addProfesseur(professeur){
    professeurs.push(professeur);
}