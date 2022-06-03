/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";
var teste = true
var alreadyRun = false

/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = 10;
        var y0 = 20;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndShowFirst(x0, y0);
  }
}


/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);

    if (teste == true) {
        for (let index = 0; index <= 1000; index++) {
            ShowOp(x, y, op);
            ShowResult(result);
        }
    } else {
        ShowOp(x, y, op);
        ShowResult(result);
        document.getElementById('botao').setAttribute('style', 'display: none');
        // document.getElementById("botao").style.display = "none";

    }
}

function CalcAddAndShowFirst(x, y){
    var op = "+";
    var result = Calc(x, y, op);

    ShowOp(x, y, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}


/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
}
