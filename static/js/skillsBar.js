skillsList = document.getElementsByClassName("skill")

for (let i = 0; i < skillsList.length; i++) {
    let score = skillsList[i].getElementsByClassName("skillScore")[0]
    score.textContent
    let bar = score.getElementsByClassName("bar")[0]
    bar.style.width = score.textContent+"%"
}