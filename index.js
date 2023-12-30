const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.querySelector('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


// aqui pego os botoes que tem a classe .charkey pra poder adicionar funcionalidade.
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(e){
        const value = charKeyBtn.dataset.value;
        input.value += value
        return
    })
})

document.getElementById('clear').addEventListener('click', function(e){
    input.value = ''
    input.focus()
})

input.addEventListener('keydown',function(e) {
    e.preventDefault();

    //aqui é feito uma verificação se a tecla que foi apertada o valor está nas teclas permitidas no allowedKeys
    if(allowedKeys.includes(e.key)){
        input.value += e.key; // aqui faço uma concatenação adicionando os valores digitados para o campo do input.
        return
    }
    //adicionando o input do backspace para apagar no input
    if(e.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    //adicionando o input do Enter para calcular o input
    if(e.key === 'Enter'){
        calculate()
    }
});

document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    const result = eval(input.value)
    resultInput.value = result
}