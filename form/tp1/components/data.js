
export function selectDataLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))??[]

}
export function insertDataLocalStorage(key,data){
   localStorage.setItem(key,JSON.stringify(data));
}