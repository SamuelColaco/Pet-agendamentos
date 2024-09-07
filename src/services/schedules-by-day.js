

import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleByDay({ date }) {

    try {

        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data =  await response.json()

        const dailySchedule = data.filter((schedules) => dayjs(date).isSame(schedules.when, "day"))

        return dailySchedule

        
    } catch (error) {
        console.log(error)
    }
    
}