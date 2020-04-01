const keyboard = [
  113,
  119,
  101,
  114,
  116,
  121,
  117,
  105,
  111,
  112,
  97,
  115,
  100,
  102,
  103,
  104,
  106,
  107,
  108,
  122,
  120,
  99,
  118,
  98,
  110,
  109
];

// document.onkeypress = function(event) {
//   //   console.log(event);
//   keyboard.push(event.charCode);
//   console.log(keyboard);
// };

function init() {
  let out = "";
  for (let i = 0; i < keyboard.length; i++) {
    if (i == 10 || i == 20) {
      out += `<div class= "clearfix"></div>`;
    }
    out +=
      `<div class ="k-key" data="` +
      keyboard[i] +
      `">` +
      String.fromCharCode(keyboard[i]) +
      `</div>`;
  }
  document.querySelector("#keyboard").innerHTML = out;
}

init();

document.onkeypress = function(event) {
  console.log(event.code); //keyA
  console.log(event.keyCode); //97
  document.querySelectorAll("#keyboard .k-key").forEach(function(element) {
    element.classList.remove("active");
  });
  document
    .querySelector(`#keyboard .k-key[data="` + event.keyCode + `"]`)
    .classList.add("active");
};

document.querySelectorAll("#keyboard .k-key").forEach(function(element) {
  element.onclick = function(event) {
    document.querySelectorAll("#keyboard .k-key").forEach(function(element) {
      element.classList.remove("active");
    });
    let code = this.getAttribute("data");
    this.classList.add("active");
    console.log(code);
  };
});