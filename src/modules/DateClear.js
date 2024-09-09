

export function DateClear(){
    const afternoon = document.querySelector("#afternoon")
    const data = document.querySelectorAll(".data")

    data.forEach((data) => {
        data.style.display = "none"
    })

}