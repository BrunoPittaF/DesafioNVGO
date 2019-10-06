import React,{Component} from 'react';
import Header from './components/Header';
import './styles.css';
import Main from './pages/main';
import Routes from './routes';

//Aqui é o "index" padrão, de onde vem as info


//é possível usar componentdidmount() para executar o componente assim que ele é mostrado em tela;
//funções do react pode-se usar como função normal, função criada preferencialmente usa-se arrow function
//arrow function exemplo: teste = () => {}
//my home
const App = () => (
<div className="App">
      <Header />
      <Routes />
 
     

    </div>
       
);



export default App;
