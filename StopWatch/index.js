//This code fetch the element from document
let num3El = document.getElementById("sec-el") //For eg: it fetches <span id="sec-el">00 sec</span> from html 
//verify by uncommenting this 
//console.log(num3El)
let num2El = document.getElementById("min-el")
let num1El = document.getElementById("hr-el")

//First Initialze the sec, min and hr value = 0 
let secCount = 0
let minCount = 0 
let hrCount = 0 
let numberLimit = 60
let startFlag = true
let timer = null

var calculateTime = function(startFlag){
    if(startFlag == true){
        if (secCount < numberLimit){
            secCount = secCount + 1
            num3El.textContent = secCount + " sec"
        }
        if(secCount == numberLimit){
            secCount = 0
            minCount += 1
            if(minCount >= numberLimit){
                minCount = 0
                hrCount += 1
                num1El.textContent = hrCount + " hr"
            }
            num2El.textContent = minCount + " min"
        }
    timer = setTimeout(calculateTime, 1000, true)
    console.log(timer)
    }
}
//the function will be fire after clicking the start button shown in html page and call calculateTime() function
function startTimer(){
    calculateTime(true)
}

function resetTimer(){ 
//reset all the values of sec, min and hr variables
    secCount = 0
    minCount = 0 
    hrCount = 0  
    num1El.textContent = '00 hr'
    num2El.textContent = '00 min'
    num3El.textContent = '00 sec'
    //it stops the timer variable having return values from setTimeout function and continues from the 
    //same stop again
    clearTimeout(timer)
}
