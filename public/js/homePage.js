
let navToggle = document.querySelector('.hamburgerIcon')
let bars = document.querySelectorAll('.hamburgerLine')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}
function toggleNav() {
  if (document.getElementById('navigationItems').classList.contains('active') === true) {
    document.getElementById('navigationItems').classList.remove('active')
  } else {
    document.getElementById('navigationItems').classList.add('active')
  }
}

navToggle.addEventListener('click', function () {
  toggleHamburger()
  toggleNav()
})


// document.getElementById('modeToggle').addEventListener('click', function () {
//     console.log('clicked');
//     var body = document.body;
//     if (body.classList.contains('dark-mode')) {
//         setLightTheme()
//     } else {
//         setDarkTheme()
//     }
// });

// function setLightTheme() {
//     var body = document.body;
//     body.classList.remove('dark-mode');
//     document.getElementById('modeToggle').classList.remove('dark-mode');
//     localStorage.setItem('theme', 'light');
// }

// function setDarkTheme() {
//     var body = document.body;
//     body.classList.add('dark-mode');
//     document.getElementById('modeToggle').classList.add('dark-mode');
//     localStorage.setItem('theme', 'dark');
// }






// if (localStorage.getItem('theme') == "dark" ||
//     (!('theme' in localStorage) &&
//         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     setDarkTheme()
// }
// else {
//     setLightTheme()
// }







