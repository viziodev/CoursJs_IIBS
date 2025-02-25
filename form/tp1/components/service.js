import { selectDataLocalStorage,insertDataLocalStorage } from "./data.js";


export function addProfesseur(professeur){
    let professeurs=selectDataLocalStorage("professeurs")??[];
      professeurs.push(professeur);
      insertDataLocalStorage("professeurs",professeurs)
    return professeur
}

export function getAllProfesseur(){
    return selectDataLocalStorage("professeurs")
   
}
