
import { apiConfig } from "./api-config"

export async function scheduleDeleteDate({ id }) {

    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
            method: "DELETE",
        })
        

        alert("Agendamento cancelado")

    } catch (error) {
        console.log(error)
    }
    
}