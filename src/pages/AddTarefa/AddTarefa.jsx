import React from 'react';
import ConteudoTarefa from "../Componentes/Conteudo/ConteudoTarefa";
import Input from "../Componentes/Input/Input";
import Button from "../Componentes/Button/Button";
import { addDoc  } from "firebase/firestore";
import { db } from "../Firebase";
import {Tarefa} from "../Model/Tarefa";
import styles from "./addTarefa.module.css";

const AddTarefa = () => {
    const [titulo, setTitulo] = React.useState("");
    const [conteudo, setConteudo] = React.useState("");

    const addTask = async () => {
        const tarefa = new Tarefa(titulo, conteudo);
        addDoc(db, tarefa.criarNovaTarefa());
    }

    const limparTarefa = () => {
        setTitulo("");
        setConteudo("");
    }

    return (
        <form
            className={styles.gridAddTarefa}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                value={titulo}
                onChange={({ target }) => setTitulo(target.value)}
                label={"titulo"}
            />
            <ConteudoTarefa
                value={conteudo}
                onChange={({ target }) => setConteudo(target.value)}
                label={"Conteúdo"}
            />
            <div className={styles.addTarefaBtn}>
                <Button texto={"Adicionar"} onClick={addTask} />
                <Button texto={"Limpar"} onClick={limparTarefa} />
            </div>
        </form>
    );
};

export default AddTarefa;
