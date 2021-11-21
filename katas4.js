const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(parametro){
    const body = document.getElementsByTagName('body')[0]
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    const resultado = document.createElement('p');
    resultado.textContent = JSON.stringify(parametro);
    newBox.appendChild(resultado);
    body.appendChild(newBox);
}


function kata1() {
    let header = document.createElement("div");
    header.textContent = "Kata 1:";
    document.body.appendChild(header);
    let gotCitiesArray = gotCitiesCSV.split(',')
    return gotCitiesArray; 
}
showResults(kata1())

function kata2() {
    let header = document.createElement("div");
    header.textContent = "Kata 2:";
    document.body.appendChild(header);
    let bestThingArray = bestThing.split(' ')
    return bestThingArray;
}
showResults(kata2())

function kata3() {
    let header = document.createElement("div");
    header.textContent = "Kata 3:";
    document.body.appendChild(header);
    let gotCitiesArray2 = gotCitiesCSV.split(',').join('; ')
    return gotCitiesArray2; 
}
showResults(kata3())

function kata4() {
    let header = document.createElement("div");
    header.textContent = "Kata 4:";
    document.body.appendChild(header);
    let stringLotr = lotrCitiesArray.join(', ');
    return stringLotr;
}
showResults(kata4())

function kata5() {
    let header = document.createElement("div");
    header.textContent = "Kata 5:";
    document.body.appendChild(header);
    let firstFive = [];
    for(let i = 0; i<5; i++){
        firstFive.push(lotrCitiesArray[i])
    }
    return firstFive;
}
showResults(kata5())

function kata6() {
    let header = document.createElement("div");
    header.textContent = "Kata 6:";
    document.body.appendChild(header);
    let lastFive =[];
    for(let i = 3; i<lotrCitiesArray.length; i++ ){
        lastFive.push(lotrCitiesArray[i])
    }
    return lastFive;
}
showResults(kata6())

function kata7() {
    let header = document.createElement("div");
    header.textContent = "Kata 7:";
    document.body.appendChild(header);
    let threeToFive =[];
    for(let i = 2; i<5; i++){
        threeToFive.push(lotrCitiesArray[i])
    }
    return threeToFive;
}
showResults(kata7())

function kata8() {
    let header = document.createElement("div");
    header.textContent = "Kata 8:";
    document.body.appendChild(header);
    let rohan = lotrCitiesArray.splice(2,1)
    return lotrCitiesArray;
}
showResults(kata8())

function kata9() {
    let header = document.createElement("div");
    header.textContent = "Kata 9:";
    document.body.appendChild(header);
    let depoisDeDm =lotrCitiesArray.splice(5, Number.MAX_VALUE);
    return lotrCitiesArray
}
showResults(kata9())

function kata10() {
    let header = document.createElement("div");
    header.textContent = "Kata 10:";
    document.body.appendChild(header);
    let removenada =lotrCitiesArray.splice(2, 0, "Rohan");
    return lotrCitiesArray
}
showResults(kata10())

function kata11() {
    let header = document.createElement("div");
    header.textContent = "Kata 11:";
    document.body.appendChild(header);
    let removeDm = lotrCitiesArray.splice(5, 1, "Deadest Marshes");
    return lotrCitiesArray
}
showResults(kata11())

function kata12() {
    let header = document.createElement("div");
    header.textContent = "Kata 12:";
    document.body.appendChild(header);
    let last14 = bestThing.slice(0, -67);
    return last14;
}
showResults(kata12())

function kata13() {
    let header = document.createElement("div");
    header.textContent = "Kata 13:";
    document.body.appendChild(header);
    let ulti12 = bestThing.slice(69);
    return ulti12;
}
showResults(kata13())

function kata14() {
    let header = document.createElement("div");
    header.textContent = "Kata 14:";
    document.body.appendChild(header);
    let str38less = bestThing.slice(0, -43);
    let str23plus = str38less.slice(23);
    return str23plus;

}
showResults(kata14())

function kata15() {
    let header = document.createElement("div");
    header.textContent = "Kata 15:";
    document.body.appendChild(header);
    let last12 =bestThing.substring(bestThing.length - 12);
    return last12;
}
showResults(kata15())

function kata16() {
    let header = document.createElement("div");
    header.textContent = "Kata 16:";
    document.body.appendChild(header);
    let str23to38 = bestThing.substring(23, 38);
    return str23to38;
}
showResults(kata16())

function kata17() {
    let header = document.createElement("div");
    header.textContent = "Kata 17:";
    document.body.appendChild(header);
    let removeUltima = lotrCitiesArray.pop();
    return lotrCitiesArray;
}
showResults(kata17())

function kata18() {
    let header = document.createElement("div");
    header.textContent = "Kata 18:";
    document.body.appendChild(header);
    lotrCitiesArray.push("Deadest Marshes");
    return lotrCitiesArray;
}
showResults(kata18())

function kata19() {
    let header = document.createElement("div");
    header.textContent = "Kata 19:";
    document.body.appendChild(header);
    let removePrimeira = lotrCitiesArray.shift();
    return lotrCitiesArray;
}
showResults(kata19())

function kata20() {
    let header = document.createElement("div");
    header.textContent = "Kata 20:";
    document.body.appendChild(header);
    lotrCitiesArray.unshift("Mordor")
    return lotrCitiesArray
}
showResults(kata20())

// Katas Bônus:

function bonus1() {
    let header = document.createElement("div");
    header.textContent = "bônus 1:";
    document.body.appendChild(header);
    let novoArrayBest = bestThing.split(' ');
    return novoArrayBest.indexOf('only');
}
showResults(bonus1())

function bonus2() {
    let header = document.createElement("div");
    header.textContent = "bônus 2:";
    document.body.appendChild(header);
    let novoArrayBest1 = bestThing.split(' ');
    return novoArrayBest1.indexOf('bit');
}
showResults(bonus2())

function bonus3() {
    let header = document.createElement("div");
    header.textContent = "bônus 3:";
    document.body.appendChild(header);
    let arrayduplicata = [];
    for(let i = 0; i < gotCitiesCSV.length; i++){
        
    }
}

function bonus4() {
    let header = document.createElement("div");
    header.textContent = "bônus 4:";
    document.body.appendChild(header);
}


function bonus5() {
    let header = document.createElement("div");
    header.textContent = "bônus 5:";
    document.body.appendChild(header);
}

function bonus6() {
    let header = document.createElement("div");
    header.textContent = "bônus 6:";
    document.body.appendChild(header);
    return lotrCitiesArray.includes("Mirkwood")
}
showResults(bonus6())

function bonus7() {
    let header = document.createElement("div");
    header.textContent = "bônus 7:";
    document.body.appendChild(header);
    return lotrCitiesArray.includes("Hollywood");
}
showResults(bonus7())

function bonus8() {
    let header = document.createElement("div");
    header.textContent = "bônus 8:";
    document.body.appendChild(header);
    return lotrCitiesArray.indexOf("Mirkwood")
}
showResults(bonus8())

function bonus9() {
    let header = document.createElement("div");
    header.textContent = "bônus 9:";
    document.body.appendChild(header);
    // /\s/g

}

function bonus10() {
    let header = document.createElement("div");
    header.textContent = "bônus 10:";
    document.body.appendChild(header);
    return lotrCitiesArray.reverse();
}
showResults(bonus10())

function bonus11() {
    let header = document.createElement("div");
    header.textContent = "bônus 11:";
    document.body.appendChild(header);
    return lotrCitiesArray.sort();
}
showResults(bonus11())

function bonus12() {
    let header = document.createElement("div");
    header.textContent = "bônus 12:";
    document.body.appendChild(header);
    const ordenadoPorTamanho = lotrCitiesArray.sort((a,b) => a.length - b.length);
    return ordenadoPorTamanho;
}
showResults(bonus12())
