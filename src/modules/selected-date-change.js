

import { scheduleDay } from "./load.js";

const selectedDate = document.querySelector('main header div input[type = "date"]')

selectedDate.onchange = () => scheduleDay()

