const professeurs = [
    {
        nom:"Wane",
        prenom:"Baila",
    }
];
//Recuperer le formualire
const formProf=document.getElementById("form-prof");
const inputNom=document.querySelector("#nom");
const errorNom=inputNom.nextElementSibling
const inputPrenom=document.querySelector("#prenom");
const errorPrenom=document.querySelector(`#${inputPrenom.id}Error`);
//Soummission Formulaire
formProf.addEventListener("submit", function(event){
    event.preventDefault();
    //Gestion Error sur le nom
   
     if (inputNom.value=="") {
         errorNom.textContent="Ce champ est obligatoire"
          //application des classes error
          inputNom.classList.add("is-invalid")
          errorNom.classList.add("invalid-feedback")
         return;
     }
          inputNom.classList.remove("is-invalid")
          errorNom.classList.remove("invalid-feedback")
          inputNom.classList.add("is-valid")
          errorNom.classList.add("valid-feedback")
       //Gestion Error sur le prenom
      
     if (inputPrenom.value=="") {
         errorPrenom.textContent="Ce champ est obligatoire"
          //application des classes error
          inputPrenom.classList.add("is-invalid")
          errorPrenom.classList.add("invalid-feedback")
        
         return;
     }
     inputPrenom.classList.remove("is-invalid")
     errorPrenom.classList.remove("invalid-feedback")
     inputPrenom.classList.add("is-valid")
     errorPrenom.classList.add("valid-feedback")
   
     //Ajout dans la liste 
    addProfesseur({nom:inputNom.value,prenom:inputPrenom.value})
    formProf.reset();    
})

inputNom.addEventListener("focus",() => {
    if(inputNom.classList.contains("is-invalid") ){
      
        inputNom.classList.remove("is-invalid")
        errorNom.classList.remove("invalid-feedback")
        errorNom.textContent=""
    }

    if(inputNom.classList.contains("is-valid")){
        inputNom.classList.remove("is-valid")
        errorNom.classList.remove("valid-feedback")
    }

})


function addProfesseur(professeur){
    professeurs.push(professeur);
}