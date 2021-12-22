let nroAnal = document.querySelector('input#nrAnalyzer')
let resTable = document.querySelector('select#selTable')
let result = document.querySelector('div#result')
let arrNumbers = []

function cleanTable() {
    selTable.innerHTML = ``
    arrNumbers = []
    cleanResultAnalyse()
}
function cleanResultAnalyse() {
    resStatus.innerHTML = `<br>Fill in the information and check the result!`
    resAnalyse.innerHTML = ``
}


function isNumber(num) {
    return (Number(num) >= 1 && Number(num) <= 100 );
}

function isAddArr(num, arr) {
    return (arr.indexOf(Number(num)) === -1);
}

function addNum() {    
    if (isNumber(nroAnal.value) && isAddArr(nroAnal.value, arrNumbers)) {
        arrNumbers.push(Number(nroAnal.value))
        let item = document.createElement('option')
        item.text = `Value ${Number(nroAnal.value)} added`
        resTable.appendChild(item)  
        cleanResultAnalyse()
    } else {
        window.alert(`[ERR - number between 1 - 100] or [ERR - number ${Number(nroAnal.value)} already added]. Try again!`)
    }
    nroAnal.value = ''
    nroAnal.focus()
}

function analyzerCheck() {
    let data = new Date()
    let ano = data.getFullYear()

    // Sort numbers in an array in ascending order
    let arrLoaded = arrLoadNum().sort(function(a, b){return a-b});

    if (arrLoaded.length === 0) {
        window.alert(`[ERR - add a number to analyze] Try again!`)
    } else{
        let sumNum = arrLoaded.reduce(function(acc, val) { return acc + val; }, 0)

        resAnalyse.innerHTML = `We have ${arrLoaded.length} numbers added. </p>`
        resAnalyse.innerHTML += `The sum of the added values is ${sumNum}. </p>`
        resAnalyse.innerHTML += `The average of the added values is ${(sumNum/(arrLoaded.length))}. </p>`
        resAnalyse.innerHTML += `The lowest value entered was ${arrLoaded[0]}. </p>`
        resAnalyse.innerHTML += `The highest value informed was ${arrLoaded[arrLoaded.length-1]}. </p>`
        resStatus.innerHTML = `<br> This result was process in : ${data}. </p>`
        }
}

function arrLoadNum(){
    let arrNum = [];
    let regex = /(\d{1,100})/g;

    var options = document.getElementById('selTable').options;

    for (let i = 0; i < options.length; i++) { 
        arrNum[i] = Number((options[i].value).match(regex));
    }
    return arrNum;
}