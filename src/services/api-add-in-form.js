import dayjs from "dayjs"
import { value } from "../modules/inputs-regex-validate"


export function addData({daily}) {
    const morning = document.querySelector("#morning")
    const afternoon = document.querySelector("#afternoon")
    const night = document.querySelector("#night")

    try {
        daily.forEach((schedules) => {
            
            
            value()
            
            const p1 = document.createElement("p")
            p1.textContent = dayjs(schedules.when).format("HH") + ":00"
            console.log(p1)
            const strong = document.createElement("strong")
            strong.textContent = schedules.pet
            console.log(strong)
            const span = document.createElement("span")
            span.textContent = "/" + schedules.nameOwner
            console.log(span)
            const p2 = document.createElement("p")
            p2.append(strong,span)
            const p3 = document.createElement("p")
            p3.textContent = schedules.service
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

            
            
            const hour = dayjs(schedules.when).hour()
            
            if(hour < 13){
                morning.append(data)
            }
        else if(hour < 19){
            afternoon.append(data)
        }
        else{
            night.append(data)
        }
            
        });
        
    } catch (error) {
        console.log(error)
        
    }

}