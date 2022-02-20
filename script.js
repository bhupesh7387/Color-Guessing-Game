var color1
var color2
var color3
var color4
var color5
var color6
var correctOptionNumber
var colorOption1
var colorOption2
var colorOption3
var colorOption4
var colorOption5
var colorOption6
var ResultContent = document.getElementById("ResultContent")
var playAgain = document.querySelector("#playAgain button")

function startGame() {
    function random(startPos, endPos) {
        /**This Function Generates a random number between start and End Position Given as Argument. */
        let randomNum = Math.round(Math.random() * (endPos - startPos) + startPos)
        return randomNum;
    }

    function generateRandomColor() {
        /** Function To Generate Random RGB Values Of a Color. */
        return {
            red: random(20, 225),
            blue: random(20, 225),
            green: random(20, 225)
        }
    }

    function manipulateCorrectOption(correctOptionNumberArg, colorArg) {
        /** Function To Manipulate Correct Option */
        if (correctOptionNumber == correctOptionNumberArg) {
            colorArg.red = winColor.red
            colorArg.blue = winColor.blue
            colorArg.green = winColor.green
        }
    }

    function getColorOption(colorOptionID) {
        /** Function To Get ColorOptions From Document */
        return document.getElementById(colorOptionID)
    }

    function setColorOfOption(colorOption, color) {
        /** This Function Sets Colors Of Options */
        colorOption.style.backgroundColor = `rgb(${color.red}, ${color.blue}, ${color.green})`
    }

    function checkColor(colorOption, color) {
        /**This Function check if the selected color is equal to winning color or not. */
        colorOption.addEventListener("click", () => {
            if (color.red == winColor.red && color.blue == winColor.blue && color.green == winColor.green) {
                ResultContent.innerHTML = "You Guessed it Right."
                document.body.style.backgroundColor = `rgb(${winColor.red}, ${winColor.blue}, ${winColor.green})`
            }

            else {
                ResultContent.innerHTML = "You Guessed it Wrong."
                document.body.style.backgroundColor = `rgb(${winColor.red}, ${winColor.blue}, ${winColor.green})`
            }
            // let playAgain = document.querySelector("#playAgain button")
            playAgain.style.display = "unset"
            // playAgain.addEventListener("click", () => {
            //     window.location.reload()
            // })
            colorOption1.disabled = true
            colorOption2.disabled = true
            colorOption3.disabled = true
            colorOption4.disabled = true
            colorOption5.disabled = true
            colorOption6.disabled = true
        })
    }

    document.body.classList.add("startBody")

    // Generating Winning Color
    let winColor = generateRandomColor()

    // Generating Random Colors For Each Option
    color1 = generateRandomColor()
    color2 = generateRandomColor()
    color3 = generateRandomColor()
    color4 = generateRandomColor()
    color5 = generateRandomColor()
    color6 = generateRandomColor()

    // Manipulating The Correct Option
    correctOptionNumber = random(1, 6)
    // console.log(correctOptionNumber)

    manipulateCorrectOption(1, color1)
    manipulateCorrectOption(2, color2)
    manipulateCorrectOption(3, color3)
    manipulateCorrectOption(4, color4)
    manipulateCorrectOption(5, color5)
    manipulateCorrectOption(6, color6)

    // Getting ColorOptions From Document
    colorOption1 = getColorOption("color-1")
    colorOption2 = getColorOption("color-2")
    colorOption3 = getColorOption("color-3")
    colorOption4 = getColorOption("color-4")
    colorOption5 = getColorOption("color-5")
    colorOption6 = getColorOption("color-6")

    // Getting ResultContent From Document
    // let ResultContent = document.getElementById("ResultContent")

    // Setting Color Of Options
    setColorOfOption(colorOption1, color1)

    setColorOfOption(colorOption2, color2)

    setColorOfOption(colorOption3, color3)

    setColorOfOption(colorOption4, color4)

    setColorOfOption(colorOption5, color5)

    setColorOfOption(colorOption6, color6)

    // Showing Hint
    document.getElementById("winningColorRGB").innerHTML = `Hint: <span style="color: red">Red : </span><span style="color: red">${winColor.red}, </span><span style="color: green">Green : </span><span style="color: green">${winColor.blue}, </span><span style="color: blue">Blue : </span><span style="color: blue">${winColor.green}</span>`

    // Checking If Selected Color is Equal To Winning Color Or Not.
    checkColor(colorOption1, color1)
    checkColor(colorOption2, color2)
    checkColor(colorOption3, color3)
    checkColor(colorOption4, color4)
    checkColor(colorOption5, color5)
    checkColor(colorOption6, color6)
}

startGame()

function playGameAgain() {
    document.body.classList.remove("startBody")
    setTimeout(() => {
        startGame()
        document.body.style.backgroundColor = "white"
        playAgain.style.display = "none"
        ResultContent.innerHTML = ""
        colorOption1.disabled = false
        colorOption2.disabled = false
        colorOption3.disabled = false
        colorOption4.disabled = false
        colorOption5.disabled = false
        colorOption6.disabled = false
        colorOption1.checked = false
        colorOption2.checked = false
        colorOption3.checked = false
        colorOption4.checked = false
        colorOption5.checked = false
        colorOption6.checked = false
    }, 200);
}

playAgain.addEventListener("click", playGameAgain)
