import React from "react";
import { FaCompass, FaRegHourglass } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import styles from "./styles.module.css";

function index() {
  return (
    <>
      <div className={`${styles.contenedor} mt-16 lg:mt-4`}>
        <div className={styles.contenedor2}>
          <h2 className="text-3xl font-bold mb-4">
            Easy Steps to Book and Use Our Taxi Service
          </h2>
          <IoLocationOutline size={22} />
          <p>1. Choose your destination and pickup location.</p>
        </div>
        <div className={styles.contenedor2}>
          <h2 className="text-3xl font-bold mb-4">
            Enjoy a Confortable and Reliable Ride
          </h2>
          <FaRegHourglass size={22} />
          <p>2. Our driver will pick you up at the scheduled time.</p>
        </div>
        <div className={styles.contenedor2}>
          <h2 className="text-3xl font-bold mb-4">
            Explore Buenos Aires with Our Guided Tours
          </h2>
          <FaCompass size={22} />
          <p>3. Choose form our range of guided tours.</p>
        </div>
      </div>
    </>
  );
}

export default index;
