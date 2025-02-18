let professeurs =[]
document.addEventListener("DOMContentLoaded", function(){
    loadData();
    desactiveClass()
})



//Recuperer le formualire
const formProf=document.getElementById("form-prof");
const inputNom=document.querySelector("#nom");
const inputPrenom=document.querySelector("#prenom");
const formFields=[inputNom,inputPrenom]
//Soummission Formulaire
formProf.addEventListener("submit", function(event){
    event.preventDefault();
    //Gestion Error sur le nom
    for (const field of formFields) {
        if (isEmpty(field.value)) {
            showErrorMessage(field)
           return;
       }
       showSucces(field)
    }
     //Ajout dans la liste 
    addProfesseur({nom:inputNom.value,prenom:inputPrenom.value})
    formProf.reset();    
})
//




//Gestion des fonctions de validation
function isEmpty(data){
  return data==""
}

//Gestion des fonctions Errors
function showErrorMessage(field,smsError="Ce champ est obligatoire"){
  
     const errorField=field.nextElementSibling
     errorField.textContent=smsError
    //application des classes error
    field.classList.add("is-invalid")
    errorField.classList.add("invalid-feedback")
}

function showSucces(field){
    const errorField=field.nextElementSibling
    //application des classes error
    field.classList.remove("is-invalid")
    errorField.classList.remove("invalid-feedback")
    field.classList.add("is-valid")
    errorField.classList.add("valid-feedback")
}

const allInputs=document.getElementsByClassName("form-control");
function desactiveClass(){
    for (const input of allInputs) {
        input.addEventListener("focus",() => {
            const inputError=input.nextElementSibling
            if(input.classList.contains("is-invalid") ){
                input.classList.remove("is-invalid")
                inputError.classList.remove("invalid-feedback")
                inputError.textContent=""
            }
            if(input.classList.contains("is-valid")){
                input.classList.remove("is-valid")
                inputError.classList.remove("valid-feedback")
            }
        
        }) 
    }
    
}


//Use Case
function addProfesseur(professeur){
    professeurs.push(professeur);
    localStorage.setItem("professeur",JSON.stringify(professeur));

}
function loadData(){
    professeurs=localStorage.key("professeurs")==null ? JSON.parse(localStorage.getItem("professeurs")):[]
}




