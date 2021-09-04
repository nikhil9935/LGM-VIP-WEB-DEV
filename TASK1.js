//JS for Contact Section

function fn1()
{
    var a=document.getElementById("name").value;
    var b=document.getElementById("phone").value;
    var c=document.getElementById("text").value;
    var d=document.getElementById("email").value;
    var emailpattern=/^[^]*@[^]*\.[a-z]{2,3}$/;
    if(!(a)){alert("Enter Name");}
    if(!(isNaN(b))&&!(b.length==10)){alert("Enter valid phone number");}

    if(!(d.match(emailpattern))){alert("Enter valid email id");}
    else if(a&&b&&d){
    let e=confirm("Are you sure you want to submit?");
    if(e){
    alert("Your Response has been submitted.Thank you.");}
    else{
    alert("Oops Your Response has not submitted.Fill it Again");}}
}

//JS for nav section

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-btn a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

//  Navigation  JS Code

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar 

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

//JS for dynamic images

let image=document.getElementById('image');
let images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdd5of8Y9HOcmUyi6d0hD4X-rViaAnnCPmw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuAo-hDPXwazzBbggUnseKSMYnYH6G6Z_x7A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fTEVrIwfcvJ81nAeBdZG09RnBYAviOIdlg&usqp=CAU']
setInterval(function(){
    let r=Math.floor(Math.random()*3);
    image.src=images[r];

},800);

