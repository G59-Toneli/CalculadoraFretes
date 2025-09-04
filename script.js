"use strict"

const button = document.getElementById("myButton")
const diesel = 6.07
const output = document.getElementById("output")

const getValues = () => {
    let rast = document.getElementById("rastreamento").value
    let reg = document.getElementById("regiao").value
    let item = parseFloat(document.getElementById("items").value)
    const dist = parseFloat(document.getElementById("distancia").value)

    if (rast === "sim") {
        rast = 200
    }   else {
        rast = 0
    }

    let resto = 0
    if (item - 1000 > 0){
        resto = item - 1000
    }

    if (reg === "Sul") {
        item *= 1.0
        resto *= 0.1
    }
    if (reg === "Sudeste") {
        item *= 1.2
        resto *= 0.12
    }
    if (reg === "Centro-Oeste") {
        item *= 1.3
        resto *= 0.13
    }

    return { rast, item, dist, resto }
}

button.addEventListener("click", (event) => {
    event.preventDefault()
    const values = getValues()
    const taxaPecas = values.item + values.resto
    const taxaDistancia = values.dist * diesel
    const taxaTotal = taxaPecas + taxaDistancia + values.rast

    if (output) {
        output.innerHTML = `
            <p>Taxa Peças: R$ ${taxaPecas.toFixed(2)}</p>
            <p>Taxa Distância: R$ ${taxaDistancia.toFixed(2)}</p>
            <p>Taxa Rastreamento: R$ ${values.rast.toFixed(2)}</p>
            <p><strong>Taxa Total: R$ ${taxaTotal.toFixed(2)}</strong></p>
        `
    }
})
