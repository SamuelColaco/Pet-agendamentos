
import "./modal-open.js"
import { send } from "./modal-open.js"
import { value } from "./inputs-regex-validate.js"
import dayjs from "dayjs"
import { scheduleNew } from "../services/schedule-new.js"
import { load } from "./load.js"

const form = document.querySelector("form")

    form.onsubmit =  async (event) =>{
        event.preventDefault()

        const owner = document.querySelector("#tutor")
        const pet = document.querySelector("#pet").value
        const tel = document.querySelector("#tele")
        const service = document.querySelector("#service")
        const date = document.querySelector("#date").value
    
        const select = document.querySelector("select")


        const selectedDate = document.querySelector('main header div input[type = "date"]')
        
        value()
        const hour = dayjs().format("HH")
        const nameOwner = owner.value
        const id = new Date().getTime()
        const when = dayjs(selectedDate.value).add(hour,"hour")

        console.log(nameOwner)
        console.log(when)
        console.log(id)

        
        await scheduleNew({
            id,
            nameOwner,
            pet,
            date,
            when
        })
    
        send()

        location.reload()




}
    
