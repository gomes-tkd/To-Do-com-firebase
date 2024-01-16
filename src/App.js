import React from "react";
import AddTarefa from "./pages/AddTarefa/AddTarefa";
import "./App.css";
import ListarTarefa from "./pages/ListarTarefa/ListarTarefa";
import {getListaTarefas} from "./Firebase";
import PesquisaTarefa from "./pages/PesquisaTarefa/PesquisaTarefa";

function App() {
  const [lista, setLista] = React.useState([]);
  const [pesquisaTitulo, setPesquisaTitulo] = React.useState("");
  const [pesquisaConteudo, setPesquisaConteudo] = React.useState("");
  const [estaConcluida, setEstaConcluida] = React.useState("");

  console.log(lista);

  React.useEffect(() => {
      getListaTarefas(setLista);
  }, []);

    return (
        <div className={"container"}>
            <AddTarefa setLista={setLista}/>
            <PesquisaTarefa
                pesquisaTitulo={pesquisaTitulo}
                setPesquisaTitulo={setPesquisaTitulo}
                pesquisaConteudo={pesquisaConteudo}
                setPesquisaConteudo={setPesquisaConteudo}
                estaConcluida={estaConcluida}
                setEstaConcluida={setEstaConcluida}
            />
            <ListarTarefa
                pesquisaConteudo={pesquisaConteudo}
                pesquisaTitulo={pesquisaTitulo}
                estaConcluida={estaConcluida}
                lista={lista}
                setLista={setLista}
            />
        </div>
    );
}

export default App;
