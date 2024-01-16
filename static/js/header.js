//Resizes header on scroll
window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      changeClass("headerBig", "headerSmall", document.getElementById("header"));
      changeClass("headerBig", "headerSmall", document.getElementById("body"));
    } else {
      changeClass("headerSmall", "headerBig", document.getElementById("header"));
      changeClass("headerSmall", "headerBig", document.getElementById("body"));
    }
};

//Toggle dark mode
document.getElementById("toggleDarkMode").addEventListener("click", function() {
  var element = document.body;
  element.classList.toggle("dark-mode");
})

function changeClass(fromClass, toClass, element) {
  element.classList.remove(fromClass);
  element.classList.add(toClass);
}


