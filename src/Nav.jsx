import React from "react";

function Nav() {
  return (
    <nav>
      <div class="container menu">
        <div class="logo">LOGO</div>
        <div>
          <ul class="menuList">
            <li>
              <a href="#o_nas">o nas</a>
            </li>
            <li>
              <a href="#oferta">oferta</a>
            </li>
            <li class="cursor">kontakt</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
