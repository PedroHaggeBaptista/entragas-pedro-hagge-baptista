function ex1(opr) {

    var getInitialValue = Number(document.getElementById('ex1InputNumber').value)

    if (opr == 'soma') {
        getInitialValue = getInitialValue + 1
    } else {
        getInitialValue = getInitialValue - 1
    }

    document.getElementById('ex1InputNumber').value = getInitialValue
}

function ex2() {
    let valor1 = document.getElementById('ex2InputValor1').value;

    let valor2 = document.getElementById('ex2InputValor2').value;

    document.getElementById('ex2InputValor1').value = valor2

    document.getElementById('ex2InputValor2').value = valor1
}

function ex3() {
    const input = document.getElementById('numeroTel');
    const formatado = formatacao(input.value);
    input.value = formatado;
}
function formatacao(num) {
    const phoneNumber = num;
    const length = phoneNumber.length;

    //Efetuando Validações
    if (length < 3) {
        return phoneNumber;
    } 


    if (length < 8) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }

    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,7)}-${phoneNumber.slice(7, 11)}`;
}

function ex4() {
    var input = document.getElementById('inputExcs').value
    var value = document.getElementById('typeEx3').value

    var resul
    

    if (value == "diu") {
        if(input > 50) {
            resul = input * (200 * 0.6)
        } else {
            resul = input * (200)
        }
    } else if (value == "not") {
        if(input > 50) {
            resul = input * (100 * 0.8)
        } else {
            resul = input * (100)
        }
    }
    document.getElementById('resulsEx4').innerHTML += `<h1>Resultado: ${resul}</h1>`
}

let inputs = []

function numberAlunos() {
    inputs = []
    document.getElementById('bodyUserGrades').innerHTML = ""
    document.getElementById('btnEx5').style.display = 'flex'
    ex5(document.getElementById('inputQntAlunos').value)
}

function ex5(qntAlunos) {
    var count = 0
    while (count < qntAlunos) {
        document.getElementById('bodyUserGrades').innerHTML += `
        <div id = 'formUserGrades'>
            <input id="notaAlunoProva${count}" type="text" placeholder="Informe nota prova">
            <input id="notaAlunoTrabalho${count}" type="text" placeholder="Informe nota trabalho">
        </div>
        `
        inputs.push(count)
        count++
    }
    console.log(inputs)
}

function calculos() {
    var atual = 0
    var provaNotas = []
    var trabalhoNotas = []
    while (atual < inputs.length) {
        let valorProva = document.getElementById(`notaAlunoProva${atual}`).value
        let valorTrabalho = document.getElementById(`notaAlunoTrabalho${atual}`).value
        mediaPonderada(valorProva, valorTrabalho, atual)
        provaNotas.push(valorProva)
        trabalhoNotas.push(valorTrabalho)
        atual++
    }
    mediaGeral(provaNotas, trabalhoNotas)
    mediaProvas(provaNotas)
    mediaTrabalhos(trabalhoNotas)
    minorManorProva(provaNotas)
    minorManorTrabalhos(trabalhoNotas)
}

function mediaPonderada(provaNota, trabalhoNota, atual) {

    var valorMédia = (Number(provaNota) * 2) + (Number(trabalhoNota) * 3)
    var resultado = valorMédia/5

    document.getElementById('medias').innerHTML += `<h1>Media Peso Aluno ${atual + 1}: ${resultado}</h1>`
}

function mediaGeral(provaNotas, trabalhoNotas) {
    var lenghtTotal = provaNotas.length + trabalhoNotas.length

    const sumProva = provaNotas.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
    const sumTrabalho = trabalhoNotas.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);

    console.log(sumProva)
    console.log(sumTrabalho)

    const mediaFinal = (Number(sumProva) + Number(sumTrabalho))/Number(lenghtTotal)
    console.log(mediaFinal)

    document.getElementById('medias').innerHTML += `<h1>Media Geral: ${mediaFinal}</as)>`
}

function mediaProvas(notasProva) {
    const sumProva = notasProva.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
    const resultado = sumProva/(notasProva.length)

    document.getElementById('medias').innerHTML += `<h1>Media Provas: ${resultado}</h1>`
}

function mediaTrabalhos(notasTrabalho) {
    console.log('teste')
    const sumProva = notasTrabalho.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
    const resultado = sumProva/(notasTrabalho.length)

    document.getElementById('medias').innerHTML += `<h1>Media Trabalhos: ${resultado}</h1>`
}

function minorManorProva(notasProva) {
    console.log('teste1')
    const resultadoMin = Math.min(...notasProva)
    const resultadoMax = Math.max(...notasProva)
    document.getElementById('medias').innerHTML += `<h1>PROVA --> Menor: ${resultadoMin}, Maior: ${resultadoMax}</h1>`
}

function minorManorTrabalhos(notasTrabalho) {
    console.log('teste2')
    const resultadoMin = Math.min(...notasTrabalho)
    const resultadoMax = Math.max(...notasTrabalho)
    document.getElementById('medias').innerHTML += `<h1>TRABALHO --> Menor: ${resultadoMin}, Maior: ${resultadoMax}</h1>`
}