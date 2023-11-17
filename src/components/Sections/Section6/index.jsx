import React from "react";
import styles from "./styles.module.css";
import Button from "../../../components/Button/Button";
import { AiOutlineWhatsApp } from "react-icons/ai";

function index() {
  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.contenedor2}>
          <h2 className="text-3xl font-bold mb-4">
            Easy Steps to Book and Use Our Taxi Service
          </h2>
          <p>1. Choose your destination and pickup location.</p>
          <div className={styles.botones}>
            <Button
              tailwindClassName="border border-solid border-black px-4 py-2"
              textColor="black"
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
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Enjoy a Confortable and Reliable Ride
          </h2>
          <p>2. Our driver will pick you up at the scheduled time.</p>
          <div className={styles.botones}>
            <Button
              tailwindClassName="border border-solid border-black px-4 py-2"
              textColor="black"
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
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {" "}
            Explore Buenos Aires with Our Guided Tours
          </h2>
          <p>3. Choose form our range of guided tours.</p>
          <div className={styles.botones}>
            <Button
              tailwindClassName="border border-solid border-black px-4 py-2"
              textColor="black"
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
      </div>
    </>
  );
}

export default index;
