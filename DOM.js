//how to navigate through DOM 
//what are various ways to select 

/*
getelementbyclassname HTML collection
getelementbytagname   HTML collection
getelementbyid         element or null
.queryselector  element or null
.queryselectorall  NODELIST  //can directly use foreach




*/

const fruits=document.getElementById("fruits")
fruits.style.backgroundColor="yellow";

const veges=document.getElementById("vegetable")
veges.style.backgroundColor="red";

const frts=document.getElementsByClassName("fs");
const vges=document.getElementsByClassName("vs");
Array.from(frts).forEach(fruit=>{
    fruit.style.backgroundColor="green"
});//since collection we need to convert to array first

Array.from(vges).forEach(vege=>{
    vege.style.backgroundColor="green"
});//since collection we need to convert to array first

document.querySelector("#cricket").style.backgroundColor="grey";
cricketelements=document.querySelectorAll(".ct");
cricketelements.forEach(item=>{
    item.style.backgroundColor="Blue"
})

/*
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children

*/
