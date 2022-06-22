function ex1() {
    var getInitialValue = document.getElementById('ex1InputNumber').value

    var calculo = Number(getInitialValue[0]) % 2;

    if (calculo == 0) {
        document.getElementById('resulEx1').innerHTML = "A centena do número informado é par"
    } else {
        document.getElementById('resulEx1').innerHTML = "A centena do número informado é ímpar"
    }
}

function ex2() {
    let valor1 = document.getElementById('ex2InputNumber').value
    let valores = []

    let count = 0
    while (count < valor1.length) {
        valores.push(Number(valor1[count]))
        count++
    }

    const sum = valores.reduce((partialSum, a) => partialSum + a, 0);

    document.getElementById('resulEx2').innerHTML = `<h1>RESULTADO:${sum}</h1>`
}

function ex3() {
    let valor1 = document.getElementById('ex3InputNumber').value
    let valor2 = document.getElementById('ex3InputNumber1').value
    let valor3 = document.getElementById('ex3InputNumber2').value
    let valores = [valor1, valor2, valor3]

    valores = valores.sort()

    console.log(valores)

    document.getElementById('resulEx3').innerHTML = `<h1>RESULTADO:${valores}</h1>`
}

function ex4() {
    let valor = Number(document.getElementById('ex4InputNumber').value)

    let sequence = [0, 1]

    while (sequence.length < valor) {
        var sum1 = Number(sequence[sequence.length - 1])
        var sum2 = Number(sequence[sequence.length - 2])

        let soma = sum1 + sum2

        sequence.push(soma)
    }

    document.getElementById('resulEx4').innerHTML = `<h1>RESULTADO:${sequence}</h1>`
}

function ex5(menor, maior) {
    let nums = []

    for (let i = menor; i <= maior; i++) {
        let trava = true;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                trava = false;
                break;
            }
        }

        if (i > 1 && trava == true) {
            nums.push(i)
        }
    }
    
    document.getElementById('resulEx5').innerHTML = `<h1>RESULTADO:${nums}</h1>`
}

// function ex2() {
//     let valor1 = document.getElementById('ex2InputValor1').value;

//     let valor2 = document.getElementById('ex2InputValor2').value;

//     document.getElementById('ex2InputValor1').value = valor2

//     document.getElementById('ex2InputValor2').value = valor1
// }

// function ex3() {
//     const input = document.getElementById('numeroTel');
//     const formatado = formatacao(input.value);
//     input.value = formatado;
// }
// function formatacao(num) {
//     const phoneNumber = num;
//     const length = phoneNumber.length;

//     //Efetuando Validações
//     if (length < 3) {
//         return phoneNumber;
//     } 


//     if (length < 8) {
//       return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
//     }

//     return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,7)}-${phoneNumber.slice(7, 11)}`;
// }

// function ex4() {
//     var input = document.getElementById('inputExcs').value
//     var value = document.getElementById('typeEx3').value

//     var resul
    

//     if (value == "diu") {
//         if(input > 50) {
//             resul = input * (200 * 0.6)
//         } else {
//             resul = input * (200)
//         }
//     } else if (value == "not") {
//         if(input > 50) {
//             resul = input * (100 * 0.8)
//         } else {
//             resul = input * (100)
//         }
//     }
//     document.getElementById('resulsEx4').innerHTML += `<h1>Resultado: ${resul}</h1>`
// }

// let inputs = []

// function numberAlunos() {
//     inputs = []
//     document.getElementById('bodyUserGrades').innerHTML = ""
//     document.getElementById('btnEx5').style.display = 'flex'
//     ex5(document.getElementById('inputQntAlunos').value)
// }

// function ex5(qntAlunos) {
//     var count = 0
//     while (count < qntAlunos) {
//         document.getElementById('bodyUserGrades').innerHTML += `
//         <div id = 'formUserGrades'>
//             <input id="notaAlunoProva${count}" type="text" placeholder="Informe nota prova">
//             <input id="notaAlunoTrabalho${count}" type="text" placeholder="Informe nota trabalho">
//         </div>
//         `
//         inputs.push(count)
//         count++
//     }
//     console.log(inputs)
// }

// function calculos() {
//     var atual = 0
//     var provaNotas = []
//     var trabalhoNotas = []
//     while (atual < inputs.length) {
//         let valorProva = document.getElementById(`notaAlunoProva${atual}`).value
//         let valorTrabalho = document.getElementById(`notaAlunoTrabalho${atual}`).value
//         mediaPonderada(valorProva, valorTrabalho, atual)
//         provaNotas.push(valorProva)
//         trabalhoNotas.push(valorTrabalho)
//         atual++
//     }
//     mediaGeral(provaNotas, trabalhoNotas)
//     mediaProvas(provaNotas)
//     mediaTrabalhos(trabalhoNotas)
//     minorManorProva(provaNotas)
//     minorManorTrabalhos(trabalhoNotas)
// }

// function mediaPonderada(provaNota, trabalhoNota, atual) {

//     var valorMédia = (Number(provaNota) * 2) + (Number(trabalhoNota) * 3)
//     var resultado = valorMédia/5

//     document.getElementById('medias').innerHTML += `<h1>Media Peso Aluno ${atual + 1}: ${resultado}</h1>`
// }

// function mediaGeral(provaNotas, trabalhoNotas) {
//     var lenghtTotal = provaNotas.length + trabalhoNotas.length

//     const sumProva = provaNotas.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
//     const sumTrabalho = trabalhoNotas.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);

//     console.log(sumProva)
//     console.log(sumTrabalho)

//     const mediaFinal = (Number(sumProva) + Number(sumTrabalho))/Number(lenghtTotal)
//     console.log(mediaFinal)

//     document.getElementById('medias').innerHTML += `<h1>Media Geral: ${mediaFinal}</as)>`
// }

// function mediaProvas(notasProva) {
//     const sumProva = notasProva.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
//     const resultado = sumProva/(notasProva.length)

//     document.getElementById('medias').innerHTML += `<h1>Media Provas: ${resultado}</h1>`
// }

// function mediaTrabalhos(notasTrabalho) {
//     console.log('teste')
//     const sumProva = notasTrabalho.reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
//     const resultado = sumProva/(notasTrabalho.length)

//     document.getElementById('medias').innerHTML += `<h1>Media Trabalhos: ${resultado}</h1>`
// }

// function minorManorProva(notasProva) {
//     console.log('teste1')
//     const resultadoMin = Math.min(...notasProva)
//     const resultadoMax = Math.max(...notasProva)
//     document.getElementById('medias').innerHTML += `<h1>PROVA --> Menor: ${resultadoMin}, Maior: ${resultadoMax}</h1>`
// }

// function minorManorTrabalhos(notasTrabalho) {
//     console.log('teste2')
//     const resultadoMin = Math.min(...notasTrabalho)
//     const resultadoMax = Math.max(...notasTrabalho)
//     document.getElementById('medias').innerHTML += `<h1>TRABALHO --> Menor: ${resultadoMin}, Maior: ${resultadoMax}</h1>`
// }