let contador = 0;

for(let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        contador++;
    }
}
console.log("Quantidade de números divísiveis por 3 entre 1 e 50", contador);