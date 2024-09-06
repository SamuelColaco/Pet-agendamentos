

export const cancel2 = document.addEventListener("click", (event)=>{

    if(event.target.classList.contains("cancelDate")){
        const parent = event.target.parentNode.parentNode
        parent.style.display = "none"
    }
})