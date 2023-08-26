import Header from './components/Header';
import Versoes from './components/Versoes';
import NoTax from './components/NoTax';
import AppGestor from './components/AppGestor';
import Funcionamento from './components/Funcionamento';
import Planos from './components/Planos';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Header/>
       <Versoes/>
       <NoTax/>
       <AppGestor/>
       <Funcionamento/>
       <Planos/>
       <Footer />
    </div>
  );
}

export default App;
