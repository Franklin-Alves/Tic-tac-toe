let btns = document.querySelectorAll(".btn")
let markerSelected = 


btns.forEach((btn, ind)=> {
    
    btn.addEventListener('click', () => {

        btn.classList.add("markerX")
        btn.innerHTML = "x"
    })
    
})
