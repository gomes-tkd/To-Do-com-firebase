import React from 'react';
import styles from "./modalEditarTarefa.module.css";
import Input from "../Input/Input";
import {atualizarTarefa, getListaTarefas, getTarefa} from "../../Firebase";
import { novoHorario } from "../../Model/Tarefa";
import ConteudoTarefa from "../Conteudo/ConteudoTarefa";
import Button from "../Button/Button";
import ButtonDeletar from "../ButtonDeletar/ButtonDeletar";

const ModalEditarTarefa = ({ tarefa, setModalEditarTarefa, setLista }) => {
    const [dadosTarefaAtual, setDadosTarefaAtual] = React.useState({});

    const [novoTitulo, setNovoTitulo] = React.useState("");
    const [novoConteudo, setNovoConteudo] = React.useState("");
    const [novoConcluida, setNovoConcluida] = React.useState(false);
    const novaDataTarefa = novoHorario();

    function handleCliqueFora(e) {
        if (e.target === e.currentTarget) {
            setModalEditarTarefa(false);
        }
    }

    function fecharModalEditar() {
        setModalEditarTarefa(false);
    }

    async function handleAtualizarTarefa() {
        await atualizarTarefa(
            novoTitulo, novoConteudo,
            novaDataTarefa, novoConcluida, tarefa.id
        );
        setModalEditarTarefa(false);
        await getListaTarefas(setLista);
    }

    React.useEffect(() => {
        getTarefa(tarefa.id, setDadosTarefaAtual);
    }, [tarefa.id]);

    React.useEffect(() => {
        if (dadosTarefaAtual) {
            setNovoTitulo(dadosTarefaAtual.titulo);
            setNovoConteudo(dadosTarefaAtual.conteudo);
            setNovoConcluida(dadosTarefaAtual.concluida);
        }
    }, [dadosTarefaAtual]);

    return (
        <div className={styles.modalEditarTarefa} onClick={handleCliqueFora}>
            <form
                onSubmit={e => e.preventDefault()}
                className={styles.gridEditarTarefa}
            >
                <Input
                    label={"Título"}
                    value={novoTitulo}
                    onChange={({ target }) => setNovoTitulo(target.value)}
                />
                <ConteudoTarefa
                    label={"Conteúdo"}
                    value={novoConteudo}
                    onChange={({ target }) => setNovoConteudo(target.value)}
                />
                <div className={styles.addTarefaBtn}>
                    <Button texto={"Editar tarefa"} onClick={handleAtualizarTarefa} />
                    <ButtonDeletar
                        onClick={fecharModalEditar}
                        texto={"Cancelar"}
                    />
                </div>
            </form>
        </div>

    );
};

export default ModalEditarTarefa;
