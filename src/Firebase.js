// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    collection, getFirestore,
    addDoc, getDocs, getDoc,
    doc, deleteDoc, updateDoc
} from "firebase/firestore";
import {Tarefa} from "./Model/Tarefa";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ2R-i_iwPhv_sfLAfe97AlwcZyOGewY8",
    authDomain: "to-do-react-gomes.firebaseapp.com",
    projectId: "to-do-react-gomes",
    storageBucket: "to-do-react-gomes.appspot.com",
    messagingSenderId: "636017357324",
    appId: "1:636017357324:web:9e9a8a7bbcb73afc7df429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseFirestore  = getFirestore(app);

// banco de dados
const db = collection(firebaseFirestore, "tarefas");

export async function adicionarTarefas(titulo, conteudo) {
    const novaTarefa = new Tarefa(titulo, conteudo);
    await addDoc(db, novaTarefa.criarNovaTarefa())
}

export async function getListaTarefas(setDados) {
    const dados = await getDocs(db);

    if (!dados) {
        return null;
    }

    const jsonDados = dados.docs?.map(tarefa => ({
        ...tarefa.data(),
        id: tarefa.id
    }));

    setDados(jsonDados);
}

export async function getListaTarefasConcluidas(setDados) {
    const dados = await getDocs(db);

    if (!dados) {
        return null;
    }

    const jsonDados = dados.docs?.filter(tarefa => tarefa.concluida).map(tarefa => ({
        ...tarefa.data(),
        id: tarefa.id
    }));

    setDados(jsonDados);
}

export async function getListaTarefasNaoConcluidas(setDados) {
    const dados = await getDocs(db);

    if (!dados) {
        return null;
    }

    const jsonDados = dados.docs?.filter(tarefa => !tarefa.concluida).map(tarefa => ({
        ...tarefa.data(),
        id: tarefa.id
    }));

    setDados(jsonDados);
}

export async function getTarefa(id, setDado) {
    const dadosTarefa = doc(db, id);
    const dadosJson = await getDoc(dadosTarefa);
    // console.log(dadosJson.data());
    setDado(dadosJson.data());
}

export async function atualizarTarefa(
    titulo, conteudo, data, concluida, id
) {
    const dadosTarefa = doc(db, id);

    await updateDoc(dadosTarefa, {
        titulo,
        conteudo,
        concluida,
        data
    });
}

export async function atualizarTarefaConcluida(concluida, id) {
    const dadosTarefa = doc(db, id);
    await updateDoc(dadosTarefa, {
        concluida
    });
}

export async function removerTarefa(id)  {
    const dadosTarefa = doc(db, id);
    await deleteDoc(dadosTarefa);
}
