// Callback function that prints to console
function imprimir(param: any): void {
    console.log(param);
}

// Function that concatenates strings and calls a callback
function concatenar(a: string, b: string, callback: (resultadoCallback: string) => void): void {
    const resultadoCallback = a + b;
    callback(resultadoCallback);
}

// Function that adds numbers and calls a callback
function soma(a: number, b: number, callback: (resultadoCallback: number) => void): void {
    const resultadoCallback = a + b;
    callback(resultadoCallback);
}

// Usage examples
concatenar("Olá ", "Mundo", imprimir);
soma(5, 10, imprimir);