import format from "date-fns/format";

export const novoHorario = () => {
    const dataAtual = new Date();

    const dd = dataAtual.getDate();
    const mm = dataAtual.getMonth() + 1;
    const yyyy = dataAtual.getFullYear();

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();

    // return `Criada em ${dd}/${mm}/${yyyy} às ${horas}:${minutos}`;
    return `${horas}:${minutos}`;
}


export class Tarefa {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.concluida = false;
        this.data = format(new Date(), "MM/dd/yyyy");
        this.horario = novoHorario();
    }

    criarNovaTarefa() {
        const titulo = this.titulo;
        const conteudo = this.conteudo;
        const concluida = this.concluida;
        const data = this.data;
        const horario = this.horario;

        return {
            titulo,
            conteudo,
            concluida,
            data,
            horario
        };
    }
}
