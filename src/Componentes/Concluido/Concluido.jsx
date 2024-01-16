import React from 'react';
import {atualizarTarefaConcluida, getListaTarefas} from "../../Firebase";
import styles from "./concluido.module.css";

const Concluido = ({ id, concluida, setLista }) => {


    const handleConcluida = () => {
        const novoValor = !concluida;
        atualizarTarefaConcluida(novoValor, id);
        getListaTarefas(setLista);
    };

    return (
        <label htmlFor={"concluida"}
               style={{ display: "flex", alignItems: "center" }}
               className={styles.labelConcluido}
        >
            Concluída?{" "}
            <input
                className={styles.inputConcluido}
                checked={concluida}
                onChange={handleConcluida}
                style={{marginLeft: "10px"}}
                name={"concluida"}
                id={"concluida"}
                type="checkbox"
            />
        </label>
    );
};

export default Concluido;
