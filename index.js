let homeScore = 0 
let guestScore = 0 

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
}
