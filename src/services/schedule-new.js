
import { apiConfig } from "./api-config";

export async function scheduleNew({id, nameOwner,pet,date,tel,service, when }) {
    try {
        
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify({id, nameOwner,pet, date,tel, service, when}),

        })
        
        alert("Agendamento feito")
    } catch (error) {
        console.log(error)
    }
    
}