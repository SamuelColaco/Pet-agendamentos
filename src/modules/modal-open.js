
const button = document.querySelector("footer  button")

export const send = button.onclick = () => {
    const modal = document.querySelector("#modal")
    const main = document.querySelector("main")

    modal.classList.toggle("hide")
    modal.classList.toggle("appear")

    main.classList.toggle("show")
}