import "./App.css";
import Entry from "./components/Entry";
import Result from "./components/Result";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Entry />
        <Result />
      </div>
      <footer>
        Made by <a href="https://github.com/doganfurkan">Furkan Doğan</a>
      </footer>
    </>
  );
}

export default App;
