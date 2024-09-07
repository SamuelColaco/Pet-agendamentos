import { addData } from "../services/api-add-in-form"
import { scheduleByDay } from "../services/schedules-by-day"


const selectedDate = document.querySelector('main header div input[ type = "date"]')
const dateValue = document.querySelector("#date").value

document.addEventListener("DOMContentLoaded", async ()=> {
    const date = selectedDate.value

    const daily = await scheduleByDay({ date })
    console.log(daily)

    addData({ daily })
})


export const load = document.onload = () =>{
    
    console.log("Recarregado")
}

export async function scheduleDay() {
    const date = dateValue

    const daily = await scheduleByDay({ date })
    console.log(daily)

    addData({ daily })
}
