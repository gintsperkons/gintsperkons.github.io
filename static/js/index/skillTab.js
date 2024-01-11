values = document.getElementsByClassName("skillValue");
for (const value of values) {
    let v = value.textContent.trim();
    let progress = value.getElementsByClassName("progress")[0];
    progress.style.width = v + "%";

}