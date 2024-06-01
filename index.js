const resetBtn = document.getElementById("reset-btn")
const sendBtn = document.getElementById("send-btn")
const phoneDisplay = document.getElementById("phone-display")
const pagerDisplay = document.getElementById("pager-display")
let numberArray = []

function pushNumber(number) {
    numberArray.push(number)
    renderFunction(numberArray, phoneDisplay)
}

function renderFunction(array, display) {
    display.innerHTML = `<h2>${array.join("")}</h2>`
}

sendBtn.addEventListener('click', () => {renderFunction(numberArray, pagerDisplay)})

resetBtn.addEventListener('click', () => {
    numberArray = []
    phoneDisplay.innerHTML = ""
    pagerDisplay.innerHTML = ""
})
