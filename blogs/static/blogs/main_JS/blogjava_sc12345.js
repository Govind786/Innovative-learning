function my_welcome() {
    var templ = document.getElementsByClassName('blog_wel');
    var text = String(templ[0].innerText);
    templ[0].innerHTML = "W";
    var temp = "W";
    for (var i = 1; i < text.length; i++) {
        task(i);
    }
    function task(i) {
        setTimeout(function () {
            templ[0].innerHTML = temp + text[i];
            temp = temp + text[i];
        }, 100 * i);
    }
}
my_welcome();
var timer = setInterval(my_welcome, 4500); 


// burger menu bar
// code

var burger = document.querySelector(".burger");
var resp = document.querySelector(".resp");
var container = document.querySelector(".container");

burger.addEventListener('click', () =>{
    resp.classList.toggle("none");
    container.classList.toggle("container-height");
});
