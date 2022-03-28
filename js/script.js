let numeri = document.getElementById("app");
const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";

for(let i = 1; i<=100; i++){
    const numero = document.createElement("div");
    numero.innerHTML = `
        il numero ${i}
    `;
    if(i %3 ===0 && i %5 ===0){
        numero.innerHTML = `
        il numero ${fizzbuzz}
    `;
    } else if(i %5 === 0){
        numero.innerHTML = `
        il numero ${buzz}
    `;} else if(i %3 ===0){
        numero.innerHTML = `
        il numero ${fizz}
    `;
    }
    
    numeri.append(numero)
    console.log(i)
}