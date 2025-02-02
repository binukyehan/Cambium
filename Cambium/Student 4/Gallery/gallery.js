document.addEventListener("DOMContentLoaded", function () {
    //Get references to DOM elements
    const loadmorebutton=document.getElementById("loadmorebutton");
    const loadlessbutton= document.getElementById("loadlessbutton");
    const additionalimagescontainer=document.getElementById("additionalimagescontainer");
    //add event listner to load more button
    loadmorebutton.addEventListener("click", function (event){
        event.preventDefault();
        additionalimagescontainer.style.display = "flex";
        loadmorebutton.style.display="none";
        loadlessbutton.style.display="flex";
        

    });
    //add event listner to load less button
    loadlessbutton.addEventListener("click", function (event) {
        event.preventDefault();

        additionalimagescontainer.style.display="none";
        loadmorebutton.style.display="flex";
        loadlessbutton.style.display="none";

    });
    //get references to elements 
    var extend = document.getElementById("extend");
    var extendImage = document.getElementById("extendImage");
    var description = document.getElementById("description");


    //get all thumbnail elemnts
    var thumbnails = document.querySelectorAll(".thumbnail");

    //loop through thumbnails and add click event listner
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
        extend.style.display = "block"; 
        extendImage.src = this.src; 
    
    
      description.innerHTML = this.getAttribute("data-description"); //set the description
   
  });
});

//get the close button element
var closeBtn = document.getElementsByClassName("close")[0];
//add click event listner to close
closeBtn.onclick = function() {
  extend.style.display = "none";
};
});
