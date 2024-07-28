const mybtn=document.getElementById("mybutton");

const myimg=document.getElementById("myimage");


mybtn.addEventListener("click",(event)=>{
    if (myimg.style.display == "none") {
        myimg.style.display = "block"; // Show the image
        mybtn.textContent = "Hide";   // Change button text to "Hide"
    } else {
        myimg.style.display = "none"; // Hide the image
        mybtn.textContent = "Show";   // Change button text to "Show"
    }

});