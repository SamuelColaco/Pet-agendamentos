
import dayjs from "dayjs"

const date = document.querySelector('main header div input[type = "date"]')

const selectedDate = dayjs(new Date()).format("YYYY-MM-DD")
date.min = selectedDate
date.value = selectedDate