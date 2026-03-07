// A6 - 1
function trianguloCentralizado(numeroInteriorPositivo: number) {
    let espace: string = " 1";
    let espece2: string = " 1";
    for(let i = 0; i <= numeroInteriorPositivo; i++) {
        console.log(espace);
        espace = espece2+espace;
    }
}

// trianguloCentralizado(5);

// A6 - 2 /* ta quase */
function trianguloPiramideSimetrica(numeroInteriorPositivo: number) {
    let espace: string = " 1";
    let espece2: string = " 1";
    let espece3: string = "1 ";
    for(let i = 0; i <= numeroInteriorPositivo; i++) {
        console.log(espace);
        espace = espece3+espace+espece2;
    }
}

trianguloPiramideSimetrica(5);

/* 
Dica: a quantidade de números 1 em cada linha segue o padrão:
2i − 1 
*/