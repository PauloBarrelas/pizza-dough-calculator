const typeToggle = document.getElementById('type-toggle')
const circleShape = document.getElementById('circle-option')
const circleContent = document.getElementById('circle')
const squareShape = document.getElementById('square-option')
const rectangleContent = document.getElementById('rectangle')

const systemToggle = document.getElementById('system-toggle')
const metricSystem = document.getElementById('metric')
const imperialSystem = document.getElementById('imperial')

const diameterInput = document.getElementById('diameter-txt')
const lengthInput = document.getElementById('rectangleL-txt')
const widthInput = document.getElementById('rectangleW-txt')
const resultTxt = document.getElementById('result')
const units = document.getElementById('units')

let diameter = 0
let length = 0
let width = 0
let result = 0

//FUNCTION TO GET 66% OF THE RECTANGLE AREA
function rectAreaCalc() {
    result = parseFloat(lengthInput.value) * parseFloat(widthInput.value)

    result = result || 0 //Forces the result to be 0 if NaN

    resultTxt.innerText = (result * 0.66).toFixed(0)
}

//FUNCTION TO GET 66% OF THE CIRCLE AREA
function circleAreaCalc() {
    diameter = parseFloat(diameterInput.value)
    diameter = diameter || 0 //Forces the result to be 0 if NaN
    let radius = diameter / 2
    result = ((radius * radius * Math.PI) * 0.66).toFixed(0)
    resultTxt.innerText = result
}


// TOGGLE BUTTON FOR THE PIZZA SHAPE
typeToggle.addEventListener('change', function () {
    if (this.checked) {
        squareShape.style.borderColor = 'var(--clr-accent)'
        circleShape.style.borderColor = 'var(--clr-bg1)'

        circleContent.style.transform = 'translateX(405px)'
        diameterInput.style.transform = 'translateX(405px)'

        setTimeout(function () {
            rectangleContent.style.transform = 'translateX(440px)'
        }, 100)
        setTimeout(function () {
            lengthInput.style.transform = 'translateX(440px)'
        }, 200)
        setTimeout(function () {
            widthInput.style.transform = 'translateX(440px)'
        }, 300)

        //Call the rectAreaCalc() function
        rectAreaCalc()

        //Clears the diameter input and result
        diameterInput.value = ''
        resultTxt.innerText = 0

    } else {

        squareShape.style.borderColor = 'var(--clr-bg1)'
        circleShape.style.borderColor = 'var(--clr-accent)'

        setTimeout(function () {
            circleContent.style.transform = 'translateX(0)'
        }, 100)
        setTimeout(function () {
            diameterInput.style.transform = 'translateX(0)'
        }, 200)

        rectangleContent.style.transform = 'translateX(0)'
        lengthInput.style.transform = 'translateX(0)'
        widthInput.style.transform = 'translateX(0)'

        //Call the circleAreaCalc() function
        circleAreaCalc()

        //Clears the rectangle inputs and result
        lengthInput.value = ''
        widthInput.value = ''
        resultTxt.innerText = 0
    }
})

/*
//TOGGLE BUTTON TO CHNAGE THE UNIT SYSTEM
systemToggle.addEventListener('change', function () {
    if (this.checked) {
        imperialSystem.style.color = 'var(--clr-accent)'
        metricSystem.style.color = 'var(--clr-bg1)'
        units.textContent = 'oz'
        radiusInput.value = (radiusInput.value * 0.393701).toFixed(2)
        //Grams to ounces
        resultTxt.innerText = (result * 0.035274).toFixed(2)

    } else {
        imperialSystem.style.color = 'var(--clr-bg1)'
        metricSystem.style.color = 'var(--clr-accent)'
        units.textContent = 'gr'
        radiusInput.value = ''
        resultTxt.innerText = result
    }
})*/


