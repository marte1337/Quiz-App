const darkElements = document.querySelector('[data-js="dark"]')

const btnToggle = document.querySelector('[data-js="dark-mode-button"]')

btnToggle.addEventListener("click", () => {
    console.log("click")
    darkElements.classList.toggle("dark-mode")
})
