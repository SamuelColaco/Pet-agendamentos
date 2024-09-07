
import "./modal-open.js"
import { send } from "./modal-open.js"
import { value } from "./inputs-regex-validate.js"
import dayjs from "dayjs"
import { scheduleNew } from "../services/schedule-new.js"
import { scheduleByDay } from "../services/schedules-by-day.js"

import { addData } from "../services/api-add-in-form.js"

const form = document.querySelector("form")

    form.onsubmit =  async (event) =>{
        event.preventDefault()

        const owner = document.querySelector("#tutor")
        const pet = document.querySelector("#pet").value
        const tel = document.querySelector("#tele")
        const service = document.querySelector("#service")
    
        const select = document.querySelector("select")
        const selectedDate = document.querySelector('main header div input[ type = "date"]')

        
        
        value()

        const nameOwner = owner.value
        const id = new Date().getTime()
        const when = dayjs()

        console.log(nameOwner)
        console.log(when)
        console.log(id)

        
        await scheduleNew({
            id,
            nameOwner,
            pet,
            when
        })

        const date = selectedDate.value

        const daily = await scheduleByDay({ date })
        console.log(daily)
    
        addData({ daily })
    
        send()



}
    
