import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {

  const [cart, setCart] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }

    setCart(JSON.parse(localStorage.getItem('cart')));

    let total = 0;
    let amount = 0;
    cart.forEach( product => {
      total += product.cant;
      amount += product.price * product.cant;
    });

    setProductsCount(total);
    setTotalPrice(amount);

  }, []);

  return (
    <>
      <Navbar productsCount={productsCount} totalPrice={totalPrice} />
      <Products cart={cart}
                setCart={setCart}
                productsCount={productsCount}
                setProductsCount={setProductsCount}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
      />
    </>
  );
}

export default App;
