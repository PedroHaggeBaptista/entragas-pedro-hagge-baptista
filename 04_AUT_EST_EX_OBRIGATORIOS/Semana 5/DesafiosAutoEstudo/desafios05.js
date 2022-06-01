
function desafio1() {
    const valor1 = Number($('.valor1desafio1').val())
    const valor2 = Number($('.valor2desafio1').val())

    let soma = 0
    let sub = 0
    let mult = 0
    let divi = 0
    let diviInt = 0
    let resto = 0

    // const { soma, sub, mult, divi, diviInt, resto } = 0

    //Efetuando a soma
    soma = (valor1 + valor2)

    //Efetuando Subtração
    sub = (valor1 - valor2)

    //Efetuando Multiplicação
    mult = (valor1 * valor2)

    //Efetuando Divisão
    divi = (valor1 / valor2)

    //Efetuando Divisão Inteira
    diviInt = Math.floor(valor1 / valor2)

    //Efetuando Resto
    resto = (valor1 % valor2)

    $(".resultDesafio1").html(`a. ${valor1} + ${valor2} = ${soma} || b. ${valor1} - ${valor2} = ${sub} || c. ${valor1} * ${valor2} = ${mult} || d. ${valor1} / ${valor2} = ${divi} || e. ${valor1} // ${valor2} = ${diviInt} || f. ${valor1} % ${valor2} = ${resto}`)
}

function desafio2() {
    const valorFinal = $('.valor1desafio2').val()
    qntNotasTotais = []
    //Calculo para notas de 100
    let valorNota100 = Math.floor(valorFinal/100) //Quantidade de notas
    let sobraNotas100 = valorFinal % 100 //Valor que sobra

    //Calculo para notas de 50
    let valorNota50 = Math.floor(sobraNotas100/50) //Quantidade de notas
    let sobraNotas50 = sobraNotas100 % 50 //Valor que sobra

    //Calculo para notas de 20
    let valorNota20 = Math.floor(sobraNotas50/20) //Quantidade de notas
    let sobraNotas20 = sobraNotas50 % 20 //Valor que sobra

    //Calculo para notas de 10
    let valorNota10 = Math.floor(sobraNotas20/10) //Quantidade de notas
    let sobraNotas10 = sobraNotas20 % 10 //Valor que sobra

    //Calculo para notas de 5
    let valorNota5 = Math.floor(sobraNotas10/5) //Quantidade de notas
    let sobraNotas5 = sobraNotas10 % 5 //Valor que sobra

    //Calculo para notas de 2
    let valorNota2 = Math.floor(sobraNotas5/2) //Quantidade de notas
    let sobraNotas2 = sobraNotas5 % 2 //Valor que sobra

    //Calculo para notas de 1
    let valorNota1 = Math.floor(sobraNotas2/1) //Quantidade de notas
    let sobraNotas1 = sobraNotas2 % 1 //Valor que sobra

    //Coloca o valor de todas as notas em um Array
    qntNotasTotais.push(valorNota100, valorNota50, valorNota20, valorNota10, valorNota5, valorNota2, valorNota1 )

    //Mostra todos os valores na página
    $(".resultDesafio2").html(`Notas100: ${qntNotasTotais[0]} || Notas50: ${qntNotasTotais[1]} || Notas20: ${qntNotasTotais[2]} || Notas10: ${qntNotasTotais[3]} || Notas5: ${qntNotasTotais[4]} || Notas2: ${qntNotasTotais[5]} || Notas1: ${qntNotasTotais[6]}`)
}

function desafio3() {
    let valor1 = $('.valor1desafio3').val();
    let valor2 = $('.valor2desafio3').val();
    let todosOsValores = []

    valor1 = valor1.split(",")

    valor1.map((valores) => {
        todosOsValores.push(Number(valores))
    })

    todosOsValores = todosOsValores.sort()

    let posicao = todosOsValores.indexOf(Number(valor2))

    if(posicao == -1 || (!posicao)) {
        $(".resultDesafio3").html(`Elementos ordenados: ${todosOsValores} || Número escolhido não pertence a lista`)
    } else {
        $(".resultDesafio3").html(`Elementos ordenados: ${todosOsValores} || Posição do elemento escolhido: ${posicao + 1}`)
    }
}