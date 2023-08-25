import Header from './components/Header';
import Versoes from './components/Versoes';
import NoTax from './components/NoTax';
import AppGestor from './components/AppGestor';
import Funcionamento from './components/Funcionamento';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Header/>
       <Versoes/>
       <NoTax/>
       <AppGestor/>
       <Funcionamento/>
       <Footer />
    </div>
  );
}

export default App;
