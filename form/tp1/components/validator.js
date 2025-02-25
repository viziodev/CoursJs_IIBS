

//Gestion des fonctions de validation
export function isEmpty(data){
    return data==""
  }
  
  //Gestion des fonctions Errors
  export function showErrorMessage(field,smsError="Ce champ est obligatoire"){
    
       const errorField=field.nextElementSibling
       errorField.textContent=smsError
      //application des classes error
      field.classList.add("is-invalid")
      errorField.classList.add("invalid-feedback")
  }
  
  export function showSucces(field){
      const errorField=field.nextElementSibling
      //application des classes error
      field.classList.remove("is-invalid")
      errorField.classList.remove("invalid-feedback")
      field.classList.add("is-valid")
      errorField.classList.add("valid-feedback")
  }
  
  const allInputs=document.getElementsByClassName("form-control");
  export function desactiveClass(){
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
  