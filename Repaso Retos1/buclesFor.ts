
function evenNumbers(num:number): void{
    for (let i=0;i<=num;i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}

function myRevert(myArr:string[]):string[]{
    let arrRevert:string[]=[];
    for (let i=myArr.length-1; i>=0; i--){
        arrRevert.push(myArr[i]);
    }
    return arrRevert;
}

function isRainbow(colors: string[]): void{
    let rainbowArr: string[] = ["Rojo","Naranja", "Amarillo", "Verde", "Annil", "Azul", "Violeta"];
    for (let color of colors){
        if (rainbowArr.indexOf(color) > -1){
            console.log("El color " + color + " está en el arcoiris.");
        }else{
            console.log("El color " + color + " NO está en el arcoiris.");
        }
    }
}

function add(myWords:string[]): number{
    let suma:number = 0;
    for(let word of myWords){
        suma += word.length;
    }
    return suma
}

// evenNumbers(30);
// console.log(myRevert(["Marco","Jose","Lucas","Maria","Mario"]));
// isRainbow(["Verde","Amarillo","Naranja","Azul","Marron"]);
// console.log(add(["Marco","Jose","Lucas","Maria","Mario"]));
