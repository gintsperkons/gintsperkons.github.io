values = document.getElementsByClassName("skillValue");
for (const value of values) {
    let v = value.textContent.trim();
    let progress = value.getElementsByClassName("progress")[0];
    progress.style.width = v + "%";

}
values = document.getElementsByClassName("skill");
for (const value of values) {
    
    let v = value.textContent.trim();
    let progress = value.getElementsByClassName("progress")[0];
    progress.style.width = v + "%";
    value.getElementsByClassName("skillShort")[0].addEventListener("click", (e) => {
        if (value.className.includes("open")) {
            value.className +="open";
            console.log(value.getElementsByClassName("skillDesc")[0]);
            value.getElementsByClassName("skillDesc")[0].style.display = "none";
            return
        } else {
            value.className = value.className.replace("open", "").trim();
            value.getElementsByClassName("skillDesc")[0].style.display = "block";
        }
    });
}