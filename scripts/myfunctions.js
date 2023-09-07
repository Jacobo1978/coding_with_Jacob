/*Jacobo Ruiz Velasco July 17th, 2022, Student ID 672328472 My Functions*/ 

function calc(){

var pages = prompt("Enter number of pages:");
pages = parseFloat(pages);
var sections = prompt("Enter number of sections:");
sections = parseFloat(sections);
var menus = prompt("How manu menus do you need on your webpage? ");
menus = parseFloat(menus);
var total = (pages + sections + menus) * 100;

var pagespara = document.getElementById("pages");
var sectionspara = document.getElementById("sections");
var menuspara = document.getElementById("menus");
var totalpara = document.getElementById("total");
var thankspara = document.getElementById("thanks");

pagespara.textContent = "The  number of pages  is: " + pages;
sectionspara.textContent = "The number of sections is: " + sections;
menuspara.textContent = "The number of menus is: " + menus;
totalpara.textContent = "The total price of your website is: $" + total + " CAD";
thankspara.textContent = "Thanks for using our services, we will contact you soon!";

}

document.getElementById("calc").addEventListener("click",calc);


