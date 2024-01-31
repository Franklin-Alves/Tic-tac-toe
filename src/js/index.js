const btns = document.querySelectorAll(".btn")
const chooseBtn = document.querySelectorAll(".btns-selections .choose-btn")

let firstClick = true
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

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

function markerChoose (m1, pc, m2, om) {
    btns.forEach((btn, ind)=> {
        
        btn.addEventListener('click', () => {

            if(btn.textContent == "") {

                btn.classList.add(m1)
                btn.innerHTML = pc
    
                const maxAttempts = 100;
                let attempts = 0;

                do {
                    var randomNumber = generateRandomNumber()
                    attempts++
                } while (btns[randomNumber].classList.length != 1 && attempts < maxAttempts) {

                    if(attempts < maxAttempts){

                        btns[randomNumber].classList.add(m2)
                        btns[randomNumber].innerHTML = om
                    }

                }

                const teste = checkWinner(m1)
                if(teste) console.log("winner")
            }
           
        })
        
    })
}

function generateRandomNumber(){
    let number = Math.floor((Math.random() * btns.length))
    
    return number
}

function checkWinner(ca) {
    return winningCombinations.some((combination) => {
        return combination.every((index) => {
            return btns[index].classList.contains(ca)
        })
    })
}