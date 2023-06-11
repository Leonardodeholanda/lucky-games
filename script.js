function generateNumber(){
    let min = Math.ceil(document.querySelector(".input-min").value)
    let max = Math.floor(document.querySelector(".input-max").value)
    
    let result = Math.floor(Math.random() * (max - min + 1)) + min

    document.querySelector("#random-number").innerHTML = result
}

let wheel = document.querySelector(".wheel")
let spinButton = document.querySelector(".spin-button")
let value = Math.ceil(Math.random() * 3600)

spinButton.onclick = function() {
    wheel.style.transform = "rotate(" + value + "deg)"
    value += Math.ceil(Math.random() * 3600)
}

const images = ["./assets/dice-1.png",
    "./assets/dice-2.png",
    "./assets/dice-3.png",
    "./assets/dice-4.png",
    "./assets/dice-5.png",
    "./assets/dice-6.png"
]
let dice = document.querySelectorAll("img")

function rollDice(){
    dice.forEach(function(die){
        die.classList.add("shake")
    })
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake")
        })
        let diceOneValue = Math.floor(Math.random() * 6)
        let diceTwoValue = Math.floor(Math.random() * 6)
        document.querySelector("#die-1").setAttribute("src", images[diceOneValue])
        document.querySelector("#die-2").setAttribute("src", images[diceTwoValue])
        document.querySelector("#total").innerHTML = "Sua jogada deu " + ( (diceOneValue + 1) + (diceTwoValue + 1) )
    }, 1000)
}