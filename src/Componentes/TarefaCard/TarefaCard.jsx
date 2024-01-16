import React from 'react';
import styles from "./tarefaCard.module.css";
import Concluido from "../Concluido/Concluido";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalDeletarTarefa from "../ModalDeletarTarefa/ModalDeletarTarefa";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import ModalEditarTarefa from "../ModalEditarTarefa/ModalEditarTarefa";
import ButtonDeletar from "../ButtonDeletar/ButtonDeletar";

const TarefaCard = ({ dataAtual, setDataAtual, tarefa, setLista }) => {
    const [modalDeletarTarefa, setModalDeletarTarefa] = React.useState(false);
    const [modalEditarTarefa, setModalEditarTarefa] = React.useState(false);

    function handleModalDeletarTarefa() {
        setModalDeletarTarefa(!modalDeletarTarefa);
    }

    function handleModalEditarTarefa() {
        setModalEditarTarefa(!modalEditarTarefa);
    }

    return (
        <>
            {modalEditarTarefa && (
                <ModalEditarTarefa
                    setLista={setLista}
                    tarefa={tarefa}
                    setModalEditarTarefa={setModalEditarTarefa}
                />
            )}

            {modalDeletarTarefa && (
                <ModalDeletarTarefa
                    setLista={setLista}
                    tarefa={tarefa}
                    setModalDeletarTarefa={setModalDeletarTarefa}
                />
            )}

            <div>
                <li className={styles.tarefaContainer} key={tarefa.id}>
                    <div className={styles.tarefaTitulo}>
                        <h3>{tarefa.titulo}</h3>
                        <div className={styles.divBtn}>
                            <button
                                className={styles.btnEditar}
                                onClick={handleModalEditarTarefa}
                            >
                                Editar{"  "}
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            {" | "}
                            <Concluido
                                id={tarefa.id}
                                concluida={tarefa.concluida}
                                setLista={setLista}
                            />
                        </div>
                    </div>
                    <p className={styles.tarefaConteudo}>{tarefa.conteudo}</p>
                    <p className={styles.tarefaData}>Criada em: {tarefa.data} às {tarefa.horario}</p>
                    <ButtonDeletar
                        texto={"Deletar"}
                        onClick={handleModalDeletarTarefa}
                    />
                </li>
            </div>
        </>

    );
};

export default TarefaCard;
