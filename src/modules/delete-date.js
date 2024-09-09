import { scheduleDeleteDate } from "../services/delete-date-api"


export const cancel2 = document.addEventListener("click",  async (event)=>{

    if(event.target.classList.contains("cancelDate")){
        const parent = event.target.parentNode.parentNode
        const { id } = parent.dataset
        
        console.log(id)

        await scheduleDeleteDate({ id })
        location.reload()
        
    }
})