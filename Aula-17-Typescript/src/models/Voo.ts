import { Pacote } from "./Pacote";
import { Detalhes } from "./Detalhes";

export class Voo {
    public id: string;
    public data_envio: string;
    public detalhes: Detalhes;
    public listaPacotes: Pacote[];

    constructor(dados: any) {
        this.id = dados.id_voo;
        this.data_envio = dados.data_envio;
        
        this.detalhes = new Detalhes(dados.detalhes.altitude_max, dados.detalhes.sensores);
        
        this.listaPacotes = dados.pacotes.map((item: any) => {
            return new Pacote(item.peso, item.descricao);
        });
    }

    getPesoTotal(): number {
        let total = 0;
        this.listaPacotes.forEach(pacote => {
            total += pacote.peso;
        });
        return total;
    }
}
