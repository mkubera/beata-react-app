import React from "react";

function Boxes() {
  const offersParam = [
    { num: 1, isNew: 1 },
    { num: 2, isNew: 0 },
    { num: 3, isNew: 0 },
    { num: 4, isNew: 0 },
    { num: 5, isNew: 0 },
    { num: 6, isNew: 0 },
  ];

  // const isNewParam =
  //   item.isNew == 1 ? (
  //     <div class="box">
  //       <div class="circleSmall"></div>
  //       {"Usługa " + item.num + " (nowość)"}
  //     </div>
  //   ) : (
  //     <div class="box">{"Usługa " + item.num}</div>
  //   );

  return offersParam.map(
    (item) =>
      item.isNew == 1 ? (
        <div class="box">
          <div class="circleSmall"></div>
          {"Usługa " + item.num + " (nowość)"}
        </div>
      ) : (
        <div class="box">{"Usługa " + item.num}</div>
      )
    // <div> {isNewParam}</div>
  );
}

export default Boxes;
