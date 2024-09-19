
import './App.css';
import Header  from './components/Header.module';
import QuemSouEu from './components/QuemSouEu.module';
import Curiosidade from './components/Curiosidade.module';
import Contato from './components/Contato.module';
import Projeto from './components/Projetos.module';



function App() {
  return (
    <div>
        <Header/>
        <QuemSouEu/>
        <Curiosidade/>
        <Projeto/>
        <Contato/>
       
    </div>

  );
}

export default App;
