
import "./modal-open.js"
import { send } from "./modal-open.js"
import { value } from "./inputs-regex-validate.js"
const form = document.querySelector("form")

    form.onsubmit = (event) =>{
        event.preventDefault()

        const owner = document.querySelector("#tutor")
        const pet = document.querySelector("#pet")
        const tel = document.querySelector("#tele")
        const service = document.querySelector("#service")
    
        const select = document.querySelector("select")
    
        

        value()

        const p1 = document.createElement("p")
        p1.textContent = select.value + ":00"
        console.log(p1)
        const strong = document.createElement("strong")
        strong.textContent = pet.value
        console.log(strong)
        const span = document.createElement("span")
        span.textContent = "/" + owner.value
        console.log(span)
        const p2 = document.createElement("p")
        p2.append(strong,span)
        const p3 = document.createElement("p")
        p3.textContent = service.value
        const span2 = document.createElement("span")
        span2.textContent = "Remover agendamento"
        span2.classList.add("cancelDate")


        const petName= document.createElement("div")
        petName.classList.add("pet-name")
        petName.append(p1,p2)
        console.log(petName)

        const type = document.createElement("div")
        type.classList.add("type")
        type.append(p3)
        console.log(type)


        

        const cancel = document.createElement("div")
        cancel.classList.add("cancel")
        cancel.append(span2)
        
        const data = document.createElement("div")
        data.classList.add("data")
        data.append(petName,type,cancel)
        console.log(data)


        const morning = document.querySelector("#morning")
        const afternoon = document.querySelector("#afternoon")
        const night = document.querySelector("#night")

        if(Number(select.value) < 13){
            morning.append(data)
        }
        else if(Number(select.value) < 19){
            afternoon.append(data)
        }
        else{
            night.append(data)
        }

        send()


}
    
