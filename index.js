
let home = document.getElementById("home")
let guest = document.getElementById("guest")

let homeScore = 0 
let guestScore = 0 

function homeAddOne() {
    homeScore += 1
    home.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    home.textContent = homeScore
}

function homeAddThree() {
    homeScore += 3
    home.textContent = homeScore
}


function guestAddOne() {
    guestScore += 1
    guest.textContent = guestScore
}

function guestAddTwo() {
    guestScore += 2
    guest.textContent = guestScore
}

function guestAddThree() {
    guestScore += 3
    guest.textContent = guestScore
}
