import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cars from './components/Cars';
import { CartProvider } from './store/CartContext';
import CarsGalary from './components/CarsGalary';
function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Cars />
          <CarsGalary />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
