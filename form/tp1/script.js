import * as Service from "./components/service.js";
import * as Validator from "./components/validator.js";
let professeurs = []
document.addEventListener("DOMContentLoaded", function(){
    professeurs= Service.getAllProfesseur();   
  
})

//Recuperer le formualire
const formProf=document.getElementById("form-prof");
const inputNom=document.querySelector("#nom");
const inputPrenom=document.querySelector("#prenom");
const selectGrade=document.querySelector("#grade");
const formFields=[inputNom,inputPrenom,selectGrade]

const checkboxMatieres=document.querySelectorAll("input[type=checkbox]");

checkboxMatieres.forEach((checkbox => {
    checkbox.addEventListener("change",() => {
        if (checkbox.checked) {
            checkbox.classList.remove("is-invalid")
            checkbox.classList.add("is-valid")

        }else{
            checkbox.classList.remove("is-valid")
            checkbox.classList.add("is-invalid")
      
        }
    })
}))


//Soummission Formulaire
formProf.addEventListener("submit", function(event){
    event.preventDefault();
    //Gestion Error sur le nom
    for (const field of formFields) {
        if (Validator.isEmpty(field.value)) {
            Validator.showErrorMessage(field)
           return;
       }
       Validator.showSucces(field)
    }
    const checkboxMatieresCheked= Array.from(document.querySelectorAll(".form-check-input:checked"));
    const matieresError=document.querySelector("#matieresError");  
    if (checkboxMatieresCheked.length==0) {
          matieresError.textContent="Cocher au moins une matiere"
          return;
    }
       matieresError.textContent=""
       let newProfesseur={
        nom:inputNom.value,
        prenom:inputPrenom.value,
        grade:selectGrade.value,
        matieres:checkboxMatieresCheked.map(chekbox=>chekbox.value)
       }
       professeurs.push(Service.addProfesseur(newProfesseur))  
       console.log(professeurs);
       
       formProf.reset();    
})
//





//Use Case








