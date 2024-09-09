

import { DateClear } from "./DateClear.js";
import { scheduleDay } from "./load.js";

const selectedDate = document.querySelector('main header div input[type = "date"]')

selectedDate.onchange = async() => {

    DateClear()
    await scheduleDay()
}


