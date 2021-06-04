import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModal, setShowModal] = useState(false);

  
  
  const showModalHandle = () => {
    setShowModal(true);
  };
  const hideModalHandle = () => {
    setShowModal(false);
  };
  return (
    <CartProvider>
      {showModal && <Cart  onClose={hideModalHandle}/>}
      <Header onShowModal={showModalHandle}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
