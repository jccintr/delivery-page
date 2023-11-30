import Header from './components/Header';
import Versoes from './components/Versoes';
import NoTax from './components/NoTax';
import AppGestor from './components/AppGestor';
import Funcionamento from './components/Funcionamento';
import Planos from './components/Planos';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Recursos from './components/Recursos';
import Modelos from './components/Modelos';
import Form from './components/Form';
import Header2 from './components/Header2';
import Topo from './components/Topo';
import Print from './components/Print';
import Meio from './components/Meio';


function App() {
  return (
    <div className="App">
       <Header2/>
       <Topo/>
       <Recursos/>
       <Funcionamento/>
       <AppGestor/>
       <Meio />
       <Print />
       
       
      
       <Modelos/>
       <Planos/>
       <Faq/>
       
       <Form/>
       <Footer />
    </div>
  );
}

export default App;
