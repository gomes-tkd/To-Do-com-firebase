import React from 'react';
import styles from "./modalDeletarTarefaConteudo.module.css";
import {getListaTarefas, removerTarefa} from "../../Firebase";
import ButtonDeletar from "../ButtonDeletar/ButtonDeletar";
import ButtonCancelar from "../ButtonCancelar/ButtonCancelar";

const ModalDeletarTarefaConteudo = ({ tarefa, setModalDeletarTarefa, setLista }) => {

    function handleCancelar() {
        setModalDeletarTarefa(false);
    }

    return (
        <div className={styles.gridModalDeletarTarefa}>
            <p>Deseja deletar a tarefa?!</p>
            <div className={styles.btnDiv}>
                <ButtonDeletar
                    texto={"Deletar"}
                    onClick={async () => {
                        await removerTarefa(tarefa.id);
                        await getListaTarefas(setLista);
                        setModalDeletarTarefa(false);
                    }}
                />
                <ButtonCancelar texto={"Cancelar"} onClick={handleCancelar} />
            </div>
        </div>
    );
};

export default ModalDeletarTarefaConteudo;
