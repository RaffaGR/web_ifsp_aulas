const numerosX: number[] = [33, 22, 1, 2, 3, 4, 5];
numerosX.sort();
numerosX.sort((a,b)=> a-b);
// numerosX.sort((a,b)=> b-a);
console.log(numerosX);

const nomesY: string[] = [ 'Xavier', 'Anisio', 'Rafael', 'Pedro'];

nomesY.sort((a,b) => a.localeCompare(b));

console.log(nomesY);