var burger = document.querySelector(".burger");
var navigation = document.querySelector(".navigation");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var a41 = document.querySelector("#a41");
var a42 = document.querySelector("#a42");
var a5 = document.querySelector("#a5");
var a6 = document.querySelector("#isear");
var a7 = document.querySelector("#sear");

var is_true = parseInt(document.getElementById("is_true").innerHTML);
var is_register = parseInt(document.getElementById("is_register").innerHTML);

//burger
burger.addEventListener("click", () => {
  navigation.classList.toggle("navmedia");
  a1.classList.toggle("none");
  a2.classList.toggle("none");
  a3.classList.toggle("none");
  if (is_true) {
    if (is_register) {
      a4.classList.toggle("none");
    }
    a41.classList.toggle("none");
  } else {
    a42.classList.toggle("none");
  }
  a5.classList.toggle("none");
  a6.classList.toggle("none");
  a7.classList.toggle("none");
});

if (is_true) {
  var me_err = document.getElementById('me_err');
  me_err.addEventListener('click', () => {
    alert("Please Login First to Upload Picture");
  });
}

