// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', toggleOnEnter)

// funções
function handleTryClick(event) {
  event.preventDefault()

  let inputNumber = document.querySelector('#inputNumber')

  if(isNaN(inputNumber.value) || inputNumber.value === "") {
    alert("Não é um numero, insira novamente")
  }

  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Insira um número entre 0 e 10")
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    if (xAttempts == 1) {
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa`
    } else {
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function toggleOnEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}