let btns = document.querySelectorAll(".btn")
let chooseBtn = document.querySelectorAll(".btns-selections .choose-btn")

let firstClick = true
const options = [""]

chooseBtn.forEach((choice, ind) => {
    choice.addEventListener('click', () => {
        
        if(firstClick){

            let resultChoice = choice.getAttribute("class").substring(11)
            let contentChoice = choice.textContent

            console.log(relative)

            markerChoose(resultChoice, contentChoice)
        }

        firstClick = false
    })
})

function markerChoose (res, cont) {
    btns.forEach((btn, ind)=> {
        
        btn.addEventListener('click', () => {

            btn.classList.add(res)
            btn.innerHTML = cont
            opponentPlayer()
        })
        
    })
}

function opponentPlayer(){

}