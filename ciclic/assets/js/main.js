const form = document.querySelector(".form")

form.addEventListener("submit", (event) =>{
  event.preventDefault()

  const name = document.getElementById("name").value
  const monthlyPayment = document.getElementById("monthlyPayment").value
  const time = document.getElementById("time").value

  const expr = (monthlyPayment * (((1 + 0.00517) ^ time - 1) / 0.00517)).toFixed(2)

  const value = document.querySelector(".value")
  document.querySelector(".infos").classList.remove("hidden")

  value.textContent = `Olá ${name}, juntando R$${monthlyPayment} você terá R$${expr} em ${time} meses`

  const reset = document.querySelector(".reset")

  reset.addEventListener("click", (event) => {
    

    name.textContent = ""
    monthlyPayment.textContent = ""
    time.textContent = "" 

    console.log("funcionando")
  })
})

