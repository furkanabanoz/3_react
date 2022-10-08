"use strict";

var root = document.getElementById("root");
/* JSX - Javascript XML = JS içindeki etiketleri birer obje gibi yazmamızı sağlıyor */

var productName = "Samsung S10";
var productPrice = 4000;
var productDescription = "bu bir telefon";

function formatPrice(p) {
  return p + " TL";
}

var product = {
  name: "",
  price: 4000,
  description: "bu bir telefon",
  type: ["red", "blue"]
};

function formatPrice2(p) {
  return p.price + " TL";
}

function getDescription(description) {
  /*if(description) {
      return description;
  } else {
      return "no-description";
  }*/

  /*if(description) {
      return <h5 style={{color: "red"}}>Description : {description}</h5>
  } */
  return description ? description : "no-description";
}

var number = 0;

function artiBir() {
  number++;
  renderApp();
  console.log("arttı");
}

function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", {
    id: "productDetail"
  }, /*#__PURE__*/React.createElement("h1", null, "Number: ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnArttir",
    onClick: artiBir
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnAzalt",
    onClick: function onClick() {
      number != 0 ? number-- : alert("number değeri 0");
      renderApp();
      console.log("azaldı");
    }
  }, "-1"));
  /* React DOM - 18. Slayt */

  ReactDOM.render(template, root);
}

renderApp();
