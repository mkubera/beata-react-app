import React from "react";
import Employee from "./Employee";

function SecAbout() {
  return (
    <section id="o_nas" class="secRest">
      <div class="container">
        <p class="headerBig headerDark">Nasi specjaliści</p>
        <div class="innerSection">
          <Employee></Employee>
        </div>
      </div>
    </section>
  );
}

export default SecAbout;
