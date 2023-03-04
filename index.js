const numero = document.querySelectorAll('.numero');
const resultado = document.querySelector('.resultado span')
const sinais = document.querySelectorAll('.sinal');
const igual = document.querySelector('.igual');
const clear = document.querySelector('.apagar');
const negativo = document.querySelector('.negativo');
const porcentagem = document.querySelector('.porcentagem');

/* faltou configurar todos os sinais com virgula */



let primeiroValor = "";
let ehPrimeiroValor = false;
let SegundoValor = "";
let ehSegundoValor = false;
let sinal = "";
let valorResultado = 0;

for(let i = 0; i < numero.length; i++){
    numero[i].addEventListener('click', (e) =>{
        let atr = e.target.getAttribute('value');
            if(ehPrimeiroValor === false){
            getPrimeiroValor(atr)
            }
                if(ehSegundoValor == false){
                    getehSegundoValor(atr);
                }
    })
}

function getPrimeiroValor(el){
    resultado.innerHTML = "";
    primeiroValor += el;
    resultado.innerHTML = primeiroValor;
    primeiroValor = + primeiroValor;
}

function getehSegundoValor(el) {
    if(primeiroValor != "" && sinal != "") {
        SegundoValor += el;
        resultado.innerHTML = SegundoValor;
        SegundoValor = +SegundoValor;
    }
}

function getSinal(){
    for(let i = 0; i < sinais.length; i++){
        sinais[i].addEventListener('click', (e) =>{
            sinal = e.target.getAttribute('value');
            ehPrimeiroValor = true;
        })
    }
}

getSinal();

igual.addEventListener('click', () =>{
    resultado.innerHTML = "";
    if(sinal === "+"){ 
        valorResultado = primeiroValor + SegundoValor;
}       else if(sinal === "-"){ 
            valorResultado = primeiroValor - SegundoValor;
}       else if(sinal === "x"){ 
            valorResultado = primeiroValor * SegundoValor;
}       else if(sinal === "/"){ 
            valorResultado = primeiroValor / SegundoValor;
} 
        resultado.innerHTML = valorResultado;   
        primeiroValor = valorResultado;
        SegundoValor = ""; 
})

function checarResultadoLength(){
     valorResultado = JSON.stringify(valorResultado);

     if(valorResultado.length >= 8){
        valorResultado = JSON.parse(valorResultado);
        resultado.innerHTML = valorResultado.toFixed(5);     
    }
}

negativo.addEventListener('click', () =>{
    resultado.innerHTML = "";
    if(primeiroValor !=""){
        valorResultado = -1 * primeiroValor;
        primeiroValor = valorResultado
    }
    if(primeiroValor != "" && SegundoValor != "" && sinal !=""){
        valorResultado = -valorResultado;
    }

    resultado.innerHTML = valorResultado;
})

porcentagem.addEventListener('click', () =>{
    resultado.innerHTML = "";
    if(primeiroValor != "") {
        valorResultado = primeiroValor / 100;
        primeiroValor = valorResultado;
    }
    
    resultado.innerHTML = valorResultado;
})

clear.addEventListener('click', () =>{
    resultado.innerHTML = 0;

     primeiroValor = "";
     ehPrimeiroValor = false;
     SegundoValor = "";
     ehSegundoValor = false;
     sinal = "";
     valorResultado = 0;
})

/* faltou configurar calculos com entrada com virgula */