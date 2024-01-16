import React from 'react';
import styles from "./listarTarefa.module.css";
import TarefaCard from "../../Componentes/TarefaCard/TarefaCard";
import {getListaTarefas, getListaTarefasConcluidas, getListaTarefasNaoConcluidas} from "../../Firebase";

const ListarTarefa = ({
    estaConcluida, pesquisaConteudo,
    pesquisaTitulo, lista, setLista,
}) => {

    function filtrarTarefasConcluidasNaoConcluidas(tarefa) {
        if (estaConcluida === "concluidas") {
            return tarefa.concluida;
        } else if (estaConcluida === "naoConcluidas") {
            return !tarefa.concluida;
        } else {
            return tarefa;
        }
    }

    function organizarPorData(tarefa1, tarefa2) {
        const dataHora1 = `${tarefa1.data} ${tarefa1.horario}`;
        const dataHora2 = `${tarefa2.data} ${tarefa2.horario}`;

        const timestamp1 = new Date(dataHora1).getTime();
        const timestamp2 = new Date(dataHora2).getTime();

        return timestamp2 - timestamp1;
    }

    const listaOrdenadaPorData = lista.slice().sort((a, b) => organizarPorData(a, b));

    return (
        <div className={styles.gridLista}>
            {(lista.length === 0) ? (
                <p className={styles.listaDone}>Lista done campeão!!</p>
            ) : (
                (listaOrdenadaPorData)
                    .filter(filtrarTarefasConcluidasNaoConcluidas)
                    .filter(tarefa => tarefa.titulo.includes(pesquisaTitulo))
                    .filter(tarefa => tarefa.conteudo.includes(pesquisaConteudo))
                    .map(tarefa => (
                        <TarefaCard
                            setLista={setLista}
                            // dataAtual={dataAtual}
                            // setDataAtual={setDataAtual}
                            tarefa={tarefa}
                        />
                    ))
            )}
        </div>
    );
};

export default ListarTarefa;
