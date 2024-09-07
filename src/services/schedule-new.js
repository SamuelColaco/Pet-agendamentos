
import { apiConfig } from "./api-config";

export async function scheduleNew({id, nameOwner,pet, when }) {
    try {
        
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify({id, nameOwner,pet, when}),

        })
        
        alert("Agendamento feito")
    } catch (error) {
        console.log(error)
    }
    
}