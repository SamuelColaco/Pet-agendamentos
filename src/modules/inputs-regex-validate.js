


const owner = document.querySelector("#tutor")
const pet = document.querySelector("#pet")
const tel = document.querySelector("#tele")

 export const value = document.oninput = () => {
    owner.value = owner.value.replace(/\d+/g, "")
    pet.value = pet.value.replace(/\d+/g, "")
    tel.value = tel.value.replace(/\D+/g, "")
}
