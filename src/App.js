import NavBar from './components/navBar/NavBar';
import ProductList from './components/product/ProductCardList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ProductList/>
      </header>
    </div>
  );
}

export default App;
