import React from "react";
import "./App.css";

const Modalon = () => {
  return (
    <li
      onClick={function modalon() {
        var modal = document.querySelector(".modal_center");
        const modalemail = document.querySelector(".modal_email_js");
        const modalemail_bt = document.querySelector(".keep_join");
        modal.style.display = "block";
        modalemail.style.display = "none";
        var background = document.querySelector(".black");

        if (modal.style.display == "block") {
          document.body.style.overflow = "hidden";

          background.addEventListener("click", function () {
            modal.style.display = "none";
            document.body.style.overflow = "visible";
          });
          if (modal.style.display == "block") {
            modalemail_bt.addEventListener("click", function () {
              modal.style.display = "hidden";
              modalemail.style.display = "block";
            });
          }
          if (modalemail.style.display == "block") {
            document.body.style.overflow = "hidden";

            background.addEventListener("click", function () {
              modalemail.style.display = "none";
              document.body.style.overflow = "visible";
            });
          }
        }
      }}
      className="join"
    >
      <a href="#">회원가입/로그인</a>
    </li>
  );
};

export default Modalon;
