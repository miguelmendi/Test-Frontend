const form = document.querySelector(".form")

const firstName = document.getElementById("name")
const monthlyPayment = document.getElementById("monthlyPayment")
const time = document.getElementById("time")
const value = document.querySelector(".value")
const reset = document.querySelector(".reset")
const infos = document.querySelector(".infos")

function calcForm() {
  const expr = (monthlyPayment.value * (((1 + 0.00517) ^ time.value - 1) / 0.00517)).toFixed(2)

  return expr
}

function addInfos() {
  infos.classList.remove("hidden")

  value.innerHTML = `Olá ${firstName.value}, juntando R$${monthlyPayment.value} você terá R$${calcForm()} em ${time.value} meses`
}

function resetForm() {
  firstName.value = ""
  monthlyPayment.value = ""
  time.value = "" 
  infos.classList.add("hidden")
}

form.addEventListener("submit", (event) =>{
  event.preventDefault()

  calcForm()
  addInfos()
})

reset.addEventListener("click", (event) => {
  resetForm()
})

