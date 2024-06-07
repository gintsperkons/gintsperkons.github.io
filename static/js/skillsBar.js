skillsList = document.getElementsByClassName("skill")

levelsOfSkill = ["Novice","Adv. Beginner","Competent","Proficient","Expert"]

for (let i = 0; i < skillsList.length; i++) {
    let score = skillsList[i].getElementsByClassName("skillScore")[0]
    let bar = score.getElementsByClassName("bar")[0]
    bar.style.width = score.textContent+"%"
    bar.textContent = levelsOfSkill[Math.floor(score.textContent/20)]
}