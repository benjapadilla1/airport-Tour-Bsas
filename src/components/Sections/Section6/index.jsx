import React from "react";
import styles from "./styles.module.css";
import Button from "../../../components/Button/Button";

function index() {
  return (
    <>
      <div className={styles.contenedor}>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Easy Steps to Book and Use Our Taxi Service
          </h2>
          <p>Choose your destination and pickup location.</p>
          <Button
            tailwindClassName=" p-2.5  border border-solid border-black "
            backgroundColor="white"
            textColor="black"
          >
            hola
          </Button>
          <Button
            tailwindClassName=" p-2.5  border border-solid border-black "
            backgroundColor="white"
            textColor="black"
          >
            hola
          </Button>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Enjoy a Confortable and Reliable Ride
          </h2>
          <p>Our driver will pick you up at the scheduled time.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {" "}
            Explore Buenos Aires with Our Guided Tours
          </h2>
          <p>Choose form our range of guided tours.</p>
        </div>
      </div>
    </>
  );
}

export default index;
