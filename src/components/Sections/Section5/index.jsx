import React from "react";
import styles from "./styles.module.css";

function index() {
  return (
    <>
      <div className={styles.contenedor} >
        <div>
          <h2 className="text-6x1 font-bold mb-4">Explore buenos aires With our taxi Packages</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            recusandae odit obcaecati deleniti inventore animi cum tenetur qui.
            Rem quas delectus esse. Obcaecati accusantium nihil veniam enim esse
            unde est!
          </p>
          <button className={styles.boton1}>book</button>
          <button>learn more</button>
        </div>
        <div className={styles.imagen}></div>
      </div>
    </>
  );
}

export default index;
