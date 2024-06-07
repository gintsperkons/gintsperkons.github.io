let bodyElmt = document.getElementsByTagName("body")[0]


const changeTheme = (theme) => {
    localStorage.setItem("theme", theme)
    if (theme == Themes.DARK) {
        bodyElmt.classList.remove("theme-light")
        bodyElmt.classList.add("theme-dark")
        document.getElementById("iconSun").classList.remove("show")
        document.getElementById("iconSun").classList.add("hide")
        document.getElementById("iconMoon").classList.remove("hide")
        document.getElementById("iconMoon").classList.add("show")
        return
    }
    bodyElmt.classList.remove("theme-dark")
    bodyElmt.classList.add("theme-light")
    document.getElementById("iconSun").classList.remove("hide")
    document.getElementById("iconSun").classList.add("show")
    document.getElementById("iconMoon").classList.remove("show")
    document.getElementById("iconMoon").classList.add("hide")
}


const Themes = Object.freeze({
    DARK: 0,
    LIGHT: 1,
});

if (localStorage.getItem("theme") == null){
    if ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("theme", Themes.DARK)
        changeTheme(Themes.DARK)
    }
    else
    {
        localStorage.setItem("theme", Themes.LIGHT)
        changeTheme(Themes.LIGHT)
    }
}
else {
    localStorage.getItem("theme") == Themes.DARK ? changeTheme(Themes.DARK) : changeTheme(Themes.LIGHT)
}





document.getElementById("changeTheme").addEventListener("click", (e) => {
    if (bodyElmt.classList.contains("theme-light")) {
        changeTheme(Themes.DARK)    
        return
    }
    changeTheme(Themes.LIGHT)

})

