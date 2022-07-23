const themeToggler = document.querySelector("#themeToggler");
let index = 0;
themeToggler.addEventListener("click", () => {
    if (themeToggler.classList.contains("fa-moon-o")) {
        themeToggler.classList.replace("fa-moon-o", "fa-sun-o")
    } else {
        themeToggler.classList.replace("fa-sun-o", "fa-moon-o")
    }
    document.body.classList.toggle("dark");
})