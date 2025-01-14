import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import { CartProvider } from './store/CartContext';
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Hero />
        <About />
      </CartProvider>
    </>
  );
}

export default App;
