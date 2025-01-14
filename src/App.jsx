import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { CartProvider } from './store/CartContext';
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Hero />
      </CartProvider>
    </>
  );
}

export default App;
