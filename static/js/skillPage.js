console.log('skillPage.js loaded')
scoreBarList = document.getElementsByClassName('skillScore')
console.log(scoreBarList)
for (let i = 0; i < scoreBarList.length; i++) {
    scoreBarList[i].style.width = scoreBarList[i].textContent.trim() + '%'
}


skillList = document.getElementsByClassName('skill')
for (let i = 0; i < skillList.length; i++) {
    skillList[i].getElementsByClassName("skillTopRow")[0].addEventListener('click', function() {
        console.log(skillList[i])
        skillList[i].getElementsByClassName("skillBottomRow")[0].classList.contains('active') 
            ? skillList[i].getElementsByClassName("skillBottomRow")[0].classList.remove('active') 
            : skillList[i].getElementsByClassName("skillBottomRow")[0].classList.add('active');
    })
}

console.log('skillPage.js finished')