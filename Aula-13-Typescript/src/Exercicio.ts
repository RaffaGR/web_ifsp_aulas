// ex 1
// set/get Full
class DateUtils {
    formatarData(data: Date, formato: string): string {
        let dia = data.getDate().toString();
        let mes = (data.getMonth() + 1).toString();
        let ano = data.getFullYear();

        if (data.getDate() < 10) dia = "0" + dia;
        if ((data.getMonth() + 1) < 10) mes = "0" + mes;

        if (formato === "dd/mm/yyyy") {
            return `${dia}/${mes}/${ano}`;
        } else if (formato === "yyyy-mm-dd") {
            return `${ano}-${mes}-${dia}`;
        }
        return "";
    }

    diferencaEmDias(data1: Date, data2: Date): number {
        let diferencaTemporal = data2.getTime() - data1.getTime();
        if (diferencaTemporal < 0) {
            diferencaTemporal = diferencaTemporal * -1;
        }
        let dia = 1000 * 60 * 60 * 24;
        return diferencaTemporal / dia;
    }

    adicionarDias(data: Date, dias: number): Date {
        let novaData = new Date(data);
        novaData.setDate(novaData.getDate() + dias);
        return novaData;
    }

    ehFinalDeSemana(data: Date): boolean {
        let diaSemana = data.getDay();
        return diaSemana === 0 || diaSemana === 6;
    }

    // ISO S601: "2025-01-11T13:42:00.000Z"
    converterParaISO(data: Date): string {
        return data.toISOString();
    }

    // extra 
    calcularIdade(dataNascimento: string): number {
        let nascimento = new Date(dataNascimento);
        let hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        let mesDiferenca = hoje.getMonth() - nascimento.getMonth();
        if (mesDiferenca < 0 || (mesDiferenca === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }
}

let hoje = new Date();
let dateUtils = new DateUtils();

console.log(dateUtils.formatarData(hoje, "dd/mm/yyyy"));
console.log(dateUtils.diferencaEmDias(new Date("2025-04-01"), hoje));
console.log(dateUtils.adicionarDias(hoje, 10));
console.log(dateUtils.ehFinalDeSemana(hoje));
console.log(dateUtils.converterParaISO(hoje));

// ex 2
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

let livro1: Livro = {
    titulo: "Dom Joao",
    autor: "Raphael",
    anoPublicacao: 1777
};

let livro2: Livro = {
    titulo: "Rapritzentia",
    autor: "Konoreno",
    anoPublicacao: 1333
};

console.log(livro1);
console.log(livro2);

// ex 3
interface Veiculo {
    marca: string;
    modelo: string;
    ligar(): void;
}

class Carro implements Veiculo {
    marca: string;
    modelo: string; 
    constructor(marca: string, modelo: string) { 
        this.marca = marca;
        this.modelo = modelo; 
    }

    ligar(): void {
        console.log(`O ${this.modelo} da ${this.marca} está ligado!`);
    }
}

let car = new Carro("Ferrari", "Da Volkswagen");
car.ligar();
