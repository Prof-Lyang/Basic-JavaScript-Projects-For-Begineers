const themeSelector = document.getElementById("themes")
console.log(themeSelector);
const themeLink = document.querySelector(".theme")
console.log(themeLink);

function setTheme() {
    let theme = themeSelector.value
    console.log(theme)
    themeLink.setAttribute("href", "theme-" + theme + ".css")
}

themeSelector.addEventListener("change", () => {
    setTheme()
});