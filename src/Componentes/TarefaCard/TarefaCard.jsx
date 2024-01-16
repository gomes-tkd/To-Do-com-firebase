import React from 'react';
import styles from "../pages/ListarTarefa/listarTarefa.module.css";
import Concluido from "./Concluido/Concluido";
import Button from "./Button/Button";

const Tarefa = ({ tarefa }) => {

    return (
        <div>
            <li className={styles.tarefaContainer} key={tarefa.id}>
                <div className={styles.tarefaTitulo}>
                    <h3>{tarefa.titulo}</h3>
                    <Concluido id={tarefa.id} concluida={tarefa.concluida} />
                </div>
                <p className={styles.tarefaConteudo}>{tarefa.conteudo}</p>
                <p className={styles.tarefaData}>{tarefa.data}</p>
                <Button texto={"Deletar"} />

            </li>
        </div>
    );
};

export default Tarefa;
