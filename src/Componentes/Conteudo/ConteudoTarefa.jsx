import React from 'react';
import styles from "./conteudoTarefa.module.css";

const ConteudoTarefa = ({ label, value, onChange }) => {
    return (
        <div className={styles.gridConteudo}>
            <label
                className={styles.labelStyle}
                htmlFor="conteudo"
            >
                {label}
            </label>
            <textarea
                className={styles.tarefaConteudo}
                value={value}
                onChange={onChange}
                name="conteudo"
                id="conteudo"
                cols="30"
                rows="5"
            ></textarea>
        </div>
    );
};

export default ConteudoTarefa;
