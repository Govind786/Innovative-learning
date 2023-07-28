var LM1 = document.getElementById('LM1');
var LM2 = document.getElementById('LM2');
var LM3 = document.getElementById('LM3');
var LM4 = document.getElementById('LM4');
var LM5 = document.getElementById('LM5');
var LM6 = document.getElementById('LM6');
var LM7 = document.getElementById('LM7');
var Des1 = document.getElementById('Ess1');
var Des2 = document.getElementById('Ess2');
var Des3 = document.getElementById('Ess3');
var Des4 = document.getElementById('Ess4');
var Des5 = document.getElementById('Ess5');
var Des6 = document.getElementById('Ess6');
var Des7 = document.getElementById('Ess7');

LM1.addEventListener('click', () => {
    LM1.style.display = "none";
    LM2.style.display = "block";
    LM3.style.display = "block";
    LM4.style.display = "block";
    LM5.style.display = "block";
    LM6.style.display = "block";
    LM7.style.display = "block";
    Des1.style.display = "block";
    Des2.style.display = "none";
    Des3.style.display = "none";
    Des4.style.display = "none";
    Des5.style.display = "none";
    Des6.style.display = "none";
    Des7.style.display = "none";
});

LM2.addEventListener('click', () => {
    LM2.style.display = "none";
    LM1.style.display = "block";
    LM3.style.display = "block";
    LM4.style.display = "block";
    LM5.style.display = "block";
    LM6.style.display = "block";
    LM7.style.display = "block";
    Des2.style.display = "block";
    Des1.style.display = "none";
    Des3.style.display = "none";
    Des4.style.display = "none";
    Des5.style.display = "none";
    Des6.style.display = "none";
    Des7.style.display = "none";
});

LM3.addEventListener('click', () => {
    LM3.style.display = "none";
    LM2.style.display = "block";
    LM1.style.display = "block";
    LM4.style.display = "block";
    LM5.style.display = "block";
    LM6.style.display = "block";
    LM7.style.display = "block";
    Des3.style.display = "block";
    Des2.style.display = "none";
    Des1.style.display = "none";
    Des4.style.display = "none";
    Des5.style.display = "none";
    Des6.style.display = "none";
    Des7.style.display = "none";
});

LM4.addEventListener('click', () => {
    LM4.style.display = "none";
    LM2.style.display = "block";
    LM3.style.display = "block";
    LM1.style.display = "block";
    LM5.style.display = "block";
    LM6.style.display = "block";
    LM7.style.display = "block";
    Des4.style.display = "block";
    Des2.style.display = "none";
    Des3.style.display = "none";
    Des1.style.display = "none";
    Des5.style.display = "none";
    Des6.style.display = "none";
    Des7.style.display = "none";
});

LM5.addEventListener('click', () => {
    LM5.style.display = "none";
    LM2.style.display = "block";
    LM3.style.display = "block";
    LM4.style.display = "block";
    LM1.style.display = "block";
    LM6.style.display = "block";
    LM7.style.display = "block";
    Des5.style.display = "block";
    Des2.style.display = "none";
    Des3.style.display = "none";
    Des4.style.display = "none";
    Des1.style.display = "none";
    Des6.style.display = "none";
    Des7.style.display = "none";
});

LM6.addEventListener('click', () => {
    LM6.style.display = "none";
    LM2.style.display = "block";
    LM3.style.display = "block";
    LM4.style.display = "block";
    LM5.style.display = "block";
    LM1.style.display = "block";
    LM7.style.display = "block";
    Des6.style.display = "block";
    Des2.style.display = "none";
    Des3.style.display = "none";
    Des4.style.display = "none";
    Des5.style.display = "none";
    Des1.style.display = "none";
    Des7.style.display = "none";
});

LM7.addEventListener('click', () => {
    LM7.style.display = "none";
    LM2.style.display = "block";
    LM3.style.display = "block";
    LM4.style.display = "block";
    LM5.style.display = "block";
    LM6.style.display = "block";
    LM1.style.display = "block";
    Des7.style.display = "block";
    Des2.style.display = "none";
    Des3.style.display = "none";
    Des4.style.display = "none";
    Des5.style.display = "none";
    Des6.style.display = "none";
    Des1.style.display = "none";
});


// burger

var burger = document.querySelector(".burger");
var blog_nav = document.querySelector(".blog-nav");
var tech_body = document.querySelector(".tech-body");
var resp = document.querySelector(".resp");

burger.addEventListener('click', () =>{
    blog_nav.classList.toggle("nav-blog");
    tech_body.classList.toggle("body-tech");
    resp.classList.toggle("none");
});


function for_search(data_to_search) {
    if (data_to_search == 'email' || data_to_search == 'Email') {
        data_to_search == 'e-mail';
    }
    var flag = 0;
    var index1 = document.getElementsByTagName('p');
    var reset = index1;
    var index2;
    var index3;
    var index;
    for (var i = 0; i < index1.length; i++) {
        index2 = index1[i].innerHTML;
        index3 = String(index2);
        index2 = index3.toLowerCase();
        if (index2.includes(data_to_search.toLowerCase())) {
            window.scrollTo(index1[i].offsetTop, index1[i].offsetTop - 250);
            flag = 1;
        }
    }
    if (flag == 0) {
        alert("No Mathing for Searched item in this page.");
        return;
    }
}
//#id1 button
document.getElementById('ser-button').addEventListener('click', () => {
    var data_to_search = document.getElementById("ser").value;
    document.getElementById("ser").value = "";
    if (data_to_search.length <= 2) {
        alert("Too short Argument to search for");
    }
    else {
        for_search(data_to_search);
    }
    burger.click();
})


function G_F(e) {
    var key;
    if (window.event) {
        key = e.keyCode;
    }
    if (key == 13) {
        burger.click();
        var data_to_search = document.getElementById("ser").value;
        if (data_to_search.length <= 2) {
            alert("Too short Argument to search for");
        }
        else {
            document.getElementById("ser").value = "";
            for_search(data_to_search);
        }
    }
}