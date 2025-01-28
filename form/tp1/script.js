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
    const inputNom=document.querySelector("#nom");
    const errorNom=document.querySelector(`#${inputNom.id}Error`)
    errorNom.textContent="Ce champ est obligatoire"
    
    const inputPrenom=document.querySelector("#prenom");

     addProfesseur({nom:inputNom.value,prenom:inputPrenom.value})
      
      formProf.reset(); 
    
     
})

function addProfesseur(professeur){
    professeurs.push(professeur);
}