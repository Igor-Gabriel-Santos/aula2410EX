import ProductCard from './components/ProductCard'
import Imagem from './img/made10.jpg'
import './App.css';
function App() {
  return (
    <div className="App">
      <h1> LOJA DE SIM </h1>
      <ProductCard titulo="Made In Abyss vol 10" imagem={Imagem} alt="teste" texto="Reg tenta impedir uma Faputa consumida pela vingança. Ao mesmo tempo, Nanachi, livre de Belaf, finalmente desperta... Aventureiros, habitantes da vila e Faputa... Em meio à mistura dos pensamentos de cada um, a vila é subitamente invadida por bestas agressivas." preco="R$ 29,90"/>
    </div>
  );
}
export default App;