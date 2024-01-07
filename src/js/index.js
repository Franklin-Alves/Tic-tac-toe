let btns = document.querySelectorAll(".btn")

btns.forEach((btn, ind)=> {
    
    btn.addEventListener('click', () => {

        btn.classList.add("markerX")
        btn.innerHTML = "x"
    })
    
})
