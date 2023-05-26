import { useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";
// import Modal from "./Component/Ui/Modal";

function App(props) {
  const [openModal, setOpenModal] = useState(false);

  function closeModalHandler() {
    setOpenModal(false);
  }

  function openModalHandler() {
    setOpenModal(true);
  }

  return (
    <CartProvider>
      {openModal && <Cart onCloseModal={closeModalHandler} />}
      <Header onShowModal={openModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
