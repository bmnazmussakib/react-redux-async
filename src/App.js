import './App.css';
import CartView from './feature/cart/CartView';
import ProductView from './feature/product/ProductView';

function App() {
  return (
    <div className="App">
      <CartView />
      <hr />
      <ProductView />
    </div>
  );
}

export default App;
