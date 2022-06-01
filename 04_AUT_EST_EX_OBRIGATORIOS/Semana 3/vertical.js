var gravidade = 10

function getTempoTotal(g, v0) {
    let resul = v0 / g

    return resul
}

function getMaxAlt(g, v0) {
    let resul = (v0 * v0)/(2 * g)

    return resul
}

function calculo() {
    var vIni = document.getElementById('velIni').value
    
    var tempoTotal = getTempoTotal(gravidade, vIni)
    var altMax = getMaxAlt(gravidade, vIni)
    
    document.getElementById('resul').innerHTML += `
        Tempo Total: ${tempoTotal}; Altura Máxima: ${altMax}
    `
}
