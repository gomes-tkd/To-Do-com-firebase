import React from 'react';
import styles from "./pesquisaTarefa.module.css";

const PesquisaTarefa = ({
    pesquisaTitulo, setPesquisaTitulo,
    pesquisaConteudo, setPesquisaConteudo,
    estaConcluida, setEstaConcluida,
}) => {

    function handlePesquisaEstaConcluida({ target }) {
        setEstaConcluida(target.value);
        // const novoValor = !estaConcluida;
        // setEstaConcluida(novoValor);
    }

    console.log(estaConcluida);

    return (
        <div className={styles.pesquisaDiv}>
            <h3>Pesquisar por:</h3>
            <div className={styles.pesquisaFlex}>
                <div className={styles.pesquisaTitulo}>
                    <label htmlFor="pesquisaTitulo">Título:</label>
                    {" "}
                    <input
                        id={"pesquisaTitulo"}
                        name={"pesquisaTitulo"}
                        value={pesquisaTitulo}
                        onChange={
                        ({target}) =>
                            setPesquisaTitulo(target.value)}
                        type={"text"}
                    />
                </div>
                <div className={styles.pesquisaConteudo}>
                    <label htmlFor="pesquisaConteudo">Conteúdo:</label>
                    {" "}
                    <input
                        id={"pesquisaConteudo"}
                        name={"pesquisaConteudo"}
                        value={pesquisaConteudo}
                        onChange={
                        ({target}) =>
                            setPesquisaConteudo(target.value)}
                        type={"text"}
                    />
                </div>
                <div>
                    <label htmlFor="pesquisaConcluida">
                        Status:
                        {" "}
                    </label>
                    <select value={estaConcluida} onChange={handlePesquisaEstaConcluida} name="pesquisaConcluida" id="pesquisaConcluida">
                        <option value="todasTarefas">Todas tarefas</option>
                        <option value="concluidas">Concluídas</option>
                        <option value="naoConcluidas">Não concluídas</option>
                    </select>
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="pesquisaData">*/}
                {/*        Data:*/}
                {/*        {" "}*/}
                {/*    </label>*/}
                {/*    <input*/}
                {/*        id={"pesquisaData"}*/}
                {/*        name={"pesquisaData"}*/}
                {/*        value={data.toDate()}*/}
                {/*        type={"date"}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default PesquisaTarefa;
