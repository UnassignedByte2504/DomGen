import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#domgen").addEventListener("click", () => {
    document.querySelector("#domname").innerHTML = dombuilder();
    document.querySelector("#domname2").innerHTML = dombuilder();
    document.querySelector("#domname3").innerHTML = dombuilder();
    document.querySelector("#domname4").innerHTML = dombuilder();
    document.querySelector("#domname5").innerHTML = dombuilder();
  });
};

function dombuilder() {
  var domid = 0;
  for (let domid = 0; domid <= 8; domid++) {
    let ablock = ["the", "your", "some"];
    let bblock = ["super", "great", "magnificent", "extraordinary"];
    let cblock = ["book", "shop", "news", "gram"];
    let dblock = [".com", ".net", " .es", ".gob.eu", ".shop", ".es"];

    let ablockindex = Math.floor(Math.random() * ablock.length);
    let bblockindex = Math.floor(Math.random() * bblock.length);
    let cblockindex = Math.floor(Math.random() * cblock.length);
    let dblockindex = Math.floor(Math.random() * dblock.length);

    return (
      ablock[ablockindex] +
      bblock[bblockindex] +
      cblock[cblockindex] +
      dblock[dblockindex]
    );
  }
  domid++;
}
