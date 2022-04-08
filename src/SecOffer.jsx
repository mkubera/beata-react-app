import React from "react";
// import Box from "./Box";
import Boxes from "./Boxes";

function SecOffer() {
  return (
    <section id="oferta" class="secRest service">
      <div class="container">
        <p class="headerBig headerLight">Czym zajmuje się nasza firma?</p>
        <div class="innerSection boxes">
          <Boxes></Boxes>
        </div>
      </div>
    </section>
  );
}

export default SecOffer;
