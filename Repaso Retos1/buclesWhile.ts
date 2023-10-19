
function hasEven(myNums: number[]): boolean{
    let hayPar:boolean = false;
    let i:number = 0;
    while(i<myNums.length && hayPar == false){
        if(myNums[i]%2 === 0){
            hayPar = true;
        }
        i++;
    }
    return hayPar;
}

// No se usa el método .startsWith() porque en ES5 no existe. 
function startWithM(myNames:string[]): boolean{
    let startM:boolean = false;
    let i:number = 0;
    let total:number = 0;
    while(i<myNames.length && startM == false){
        if(myNames[i][0] == "M"){
            total +=i;
        }
        if(total == myNames.length){
            startM = true;
        }
        i++;
    }
    return startM;
}

// console.log(startWithM(["Medro","Marco","Mulia"]));
// console.log(hasEven([1,3,3,3,9,1]));


