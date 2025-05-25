"use strict";
const operators = document.querySelectorAll(".operator");
const input = document.querySelector(".input")
const cleaner = document.querySelector(".cleaner");
const peresent = document.querySelector(".peresent")
const equal = document.querySelector(".equal")
const nums = document.querySelectorAll(".numbers");
const empety = document.querySelector(".empty");
const toggle = document.querySelector(".toggle ");
const btnBox = document.querySelector(".btn-box");



input.value = "0"
nums.forEach((num) => {
  num.addEventListener("click", function (e) {
    num.style.backgroundColor = "oklch(0.837 0.128 66.29)";
    if (input.value.length > 15) return null;

    setTimeout(() => {
      const clickedNum = e.target.innerHTML;

      if (input.value === "0") {
        input.value = clickedNum;
      } else {
        input.value += clickedNum;
      }

      setTimeout(() => {
        num.style.backgroundColor = "oklch(0.75 0.183 55.934)";
      }, 50);
    }, 500);
  });
});
  

operators.forEach(opt => {
    opt.addEventListener("click", (e) => {
        if (input.value.length > 15) return null;
        input.value += e.target.innerHTML; 
    })
})

peresent.addEventListener("click", (e) => {
    input.value = (input.value) / 100
})

const clenUp = function () {
    if (input.value.length < 1) return null;
    cleaner.style.color = "oklch(0.75 0.183 55.934)";
    setTimeout(() => {
      input.value = input.value.slice(0, -1);

      setTimeout(() => {
        cleaner.style.color = "";
      }, 50);
    }, 500);
}

equal.addEventListener("click", function (e) {
  try {
    let expression = input.value.trim();

    while (/[+\-*/%]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    if (expression === "") {
      input.value = "";
      return;
    }

    input.value = math.evaluate(expression);
  } catch (error) {
    input.value = "Error";
    console.error(error);
  }
});
  
empety.addEventListener("click", () => input.value = "");

cleaner.addEventListener("click", clenUp);
document.addEventListener("keydown", function (e) {
    
    const target = e.key;
    console.log(target)
    
    switch (target) {
        case "Backspace": clenUp()
            break;
        case "0": input.value += "0"
            break;
        case "1": input.value += "1"
            break;
        case "2": input.value += "2"
            break;
        case "3": input.value += "3"
            break;
        case "4": input.value += "4"
            break;
        case "5": input.value += "5"
            break;
        case "6": input.value += "6"
            break;
        case "7": input.value += "7"
            break;
        case "8": input.value += "8"
            break;
        case "9": input.value += "9"
            break;
        
        case "-": input.value += "-"
            break;
        
        case ".": input.value += "."
            break;
        
        case "+": input.value += "+"
            break;
        
        case "*": input.value += "*"
            break;
        
        case "/": input.value += "/"
            break;
        case "%": input.value = input.value = input.value / 100;
            break;
        
        case "Enter": try {
          input.value = math.evaluate(input.value);
        } catch (error) {
          input.value = "Error";
          console.error(error);
        }
            break;
        
    }

})

