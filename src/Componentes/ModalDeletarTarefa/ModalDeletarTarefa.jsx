import React from 'react';
import styles from "./modalDeletarTarefa.module.css";
import ModalDeletarTarefaConteudo from "../ModalDeletarTarefaConteudo/ModalDeletarTarefaConteudo";

const ModalDeletarTarefa = ({ tarefa, setModalDeletarTarefa, setLista }) => {

    function handleClickFora(e) {
        if (e.target === e.currentTarget) {
            setModalDeletarTarefa(false);
        }
    }

    return (
        <div className={styles.modalDeletarTarefa} onClick={handleClickFora}>
            <ModalDeletarTarefaConteudo
                setLista={setLista}
                tarefa={tarefa}
                setModalDeletarTarefa={setModalDeletarTarefa}
            />
        </div>
    );
};

export default ModalDeletarTarefa;
