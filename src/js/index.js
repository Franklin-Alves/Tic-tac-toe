let btns = document.querySelectorAll(".btn")
let chooseBtn = document.querySelectorAll(".btns-selections .choose-btn")

let firstClick = true

chooseBtn.forEach((choice) => {
    choice.addEventListener('click', () => {
        
        if(firstClick){

            let makerAttribute1 = choice.getAttribute("class").substring(11)
            let playerChoice = choice.textContent

            let relativeChild = ""
            choice.nextElementSibling != null ? relativeChild = choice.nextElementSibling : choice.previousElementSibling != null ? relativeChild = choice.previousElementSibling : console.log("erro")

            let markerAttribute2 = relativeChild.getAttribute("class").substring(11)
            let opponentMarker = relativeChild.textContent


            markerChoose(makerAttribute1, playerChoice, markerAttribute2, opponentMarker)
        }

        firstClick = false
    })
})

function markerChoose (mp1, pc, mp2, om) {
    btns.forEach((btn)=> {
        
        btn.addEventListener('click', () => {

            if(btn.textContent == "") {

                btn.classList.add(mp1)
                btn.innerHTML = pc
            }

            
            
        })
        
    })
}