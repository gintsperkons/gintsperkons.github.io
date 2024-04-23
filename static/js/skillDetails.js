let skillList = document.getElementsByClassName("skill")

for (let i = 0; i < skillList.length; i++) {
    skillList[i].getElementsByClassName("skillMain")[0].addEventListener("click", function() {
        if (skillList[i].getElementsByClassName("skillDescription")[0].style.display == "block") {
        skillList[i].getElementsByClassName("skillDescription")[0].style.display = "none"
        return
        }
        skillList[i].getElementsByClassName("skillDescription")[0].style.display = "block"
    })
}