let numeri = document.getElementById("app");
const fizz = "Fizz";
const buzz = "Buzz";
const fizzbuzz = "FizzBuzz";

for(let i = 1; i<=100; i++){
    const numero = document.createElement("div");
    numero.classList.add("col");
    numero.innerHTML = `
        <p>${i} </p>
    `;
    if(i %3 ===0 && i %5 ===0)
    {
        numero.innerHTML = `
        <p>${fizzbuzz}</p>
    `;
    numero.classList.add("pink");
    } else if(i %5 === 0)
    {
        numero.innerHTML = `
        <p>${buzz}</p>
    `;
    numero.classList.add("yellow");
    } else if(i %3 ===0)
    {
        numero.innerHTML = `
        <p>${fizz}</p>
    `;
    numero.classList.add("green");
    }
    
    numeri.append(numero)
}