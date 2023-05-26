import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Cart from "../Cart/Cart";
// import "./Modal.css";

const Backdrop = (props) => {
  return <div onClick={props.closeModal} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.close} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

// function Modal(props) {
//   const cartItems = (
//     <ul>
//       {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button onClick={props.closeModalHandler}>X</button>
//         </div>
//         <div className="title">
//           <h1>Are You Sure You want to Continue?</h1>
//         </div>
//         <div className="body">
//           {cartItems}
//           <div>
//             <span>Total Amount</span>
//             <span>35.62</span>
//           </div>
//         </div>
//         <div className="footer">
//           <button id="cancelBtn">Cancel</button>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
