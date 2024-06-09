
const a = [];
const b = [];
const c = [];
const nbr = 15

function init_hanoi(n){
    for(let i = n; i > 0; i--){
        a.push(i)
    }
}

function solveHanoi(nbrOfElement, origin, libre, destination){
    if(nbrOfElement > 0){
        solveHanoi(nbrOfElement - 1, origin, destination, libre);
        destination.push(origin.pop());
        solveHanoi(nbrOfElement - 1, libre, origin, destination);
    }
}



init_hanoi(nbr)
solveHanoi(nbr, a, b, c)

console.log("a :", a)
console.log("b :", b)
console.log("c :", c)