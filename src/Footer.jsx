import React from "react";

var year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>
        <span>©</span> Copyright<span> {year}</span>
      </p>
    </footer>
  );
}
export default Footer;
