import styles from "./AddedToCart.module.css";
import React from "react";
import { ReactComponent as Added } from "../../Resources/image/added.svg";
import AnimatedCard from "../../Containers/AnimatedPage/AnimatedCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddedToCart = (props) => {
  const { game } = props;

  const notify = () => {
    toast("Added");
  };
  return (
    <AnimatedCard>
      <div className={styles.addToCart}>
        <h4 onClick={notify}>Added</h4>
        <Added className={styles.add} />
        <ToastContainer />
      </div>
    </AnimatedCard>
  );
};

export default AddedToCart;
