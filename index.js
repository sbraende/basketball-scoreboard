let homeScore = 0 
let guestScore = 0 

let homeBgEl = document.getElementById("home-bg")
let guestBgEl = document.getElementById("guest-bg")

function updateScore(team, score) {
    let teamEl = document.getElementById(team)
    
    if (team == "home") {
        homeScore += score
        teamEl.textContent = homeScore
    }
    else {
        guestScore += score
        teamEl.textContent = guestScore    
    }

    highlightLeader() 
}

function highlightLeader() {
    if (homeScore == guestScore) {
        homeBgEl.style.border = "none"
        guestBgEl.style.border = "none"
    } else if (homeScore > guestScore) {
        homeBgEl.style.border = "4px solid #F94F6D"
        guestBgEl.style.border = "none"
    } else if (homeScore < guestScore) {
        homeBgEl.style.border = "none"
        guestBgEl.style.border = "4px solid #F94F6D"
    }
}

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home").textContent = 0
    document.getElementById("guest").textContent = 0
    homeBgEl.style.border = "none"
    guestBgEl.style.border = "none"
}

