import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Button from "../../../components/Button/Button";
import styles from "./styles.module.css";

function index() {
  return (
    <>
      <div className={styles.contenedor}>
        <h2 className="text-3xl font-bold mb-4">Book Your Adventure Today!</h2>
        <p>
          Explore Buenos Aires with our expert guides and experience the best of
          the city
        </p>
        <div className={styles.botones}>
          <Button
            tailwindClassName="border border-solid border-black px-4 py-2"
            textColor="white"
            backgroundColor={"black"}
          >
            Book
          </Button>
          <Button
            tailwindClassName="px-4 py-2"
            backgroundColor="white"
            textColor="black"
            iconRight={<AiOutlineWhatsApp />}
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}

export default index;
