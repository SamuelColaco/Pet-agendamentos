
import { apiConfig } from "./api-config";

export async function scheduleNew({id, nameOwner, when }) {
    try {
        
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify({id, nameOwner, when}),

        })

        
        
        alert("Agendamento feito")
    } catch (error) {
        console.log(error)
    }
    
}