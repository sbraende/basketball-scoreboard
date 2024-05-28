let homeScore = 0 
let guestScore = 0 

let homeBgEl = document.getElementById("home-bg")
let guestBgEl = document.getElementById("guest-bg")

let clrRed = "4px solid #F94F6D"
let clrBg = "4px solid transparent"

function score(team, points) {
    updateScoreboard(team, points)
    highlightLeader() 
}

function updateScoreboard(team, points) {
    let teamEl = document.getElementById(team)
    
    if (team == "home") {
        homeScore += points
        teamEl.textContent = homeScore
    }
    else {
        guestScore += points
        teamEl.textContent = guestScore    
    }
}

function highlightLeader() {
    if (homeScore == guestScore) {
        homeBgEl.style.border = clrRed
        guestBgEl.style.border = clrRed
    } else if (homeScore > guestScore) {
        homeBgEl.style.border = clrRed
        guestBgEl.style.border = clrBg
    } else if (homeScore < guestScore) {
        homeBgEl.style.border = clrBg
        guestBgEl.style.border = clrRed
    }
}

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home").textContent = 0
    document.getElementById("guest").textContent = 0
    homeBgEl.style.border = clrBg
    guestBgEl.style.border = clrBg
}

