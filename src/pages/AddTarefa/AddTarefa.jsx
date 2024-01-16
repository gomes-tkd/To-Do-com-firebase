import React from 'react';
import ConteudoTarefa from "../../Componentes/Conteudo/ConteudoTarefa";
import Input from "../../Componentes/Input/Input";
import Button from "../../Componentes/Button/Button";
import styles from "./addTarefa.module.css";
import {adicionarTarefas, getListaTarefas} from "../../Firebase";

const AddTarefa = ({ setLista }) => {
    const [titulo, setTitulo] = React.useState("");
    const [conteudo, setConteudo] = React.useState("");

    const limparTarefa = () => {
        setTitulo("");
        setConteudo("");
    }

    // const addTask = async () => {
    //     await adicionarTarefas(titulo, conteudo);
    //     await getListaTarefas(setLista);
    //     limparTarefa();
    // }

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
                <Button texto={"Adicionar"} onClick={async () => {
                    await adicionarTarefas(titulo, conteudo);
                    await getListaTarefas(setLista);
                    limparTarefa();
                }} />
                <Button texto={"Limpar"} onClick={limparTarefa} />
            </div>
        </form>
    );
};

export default AddTarefa;
