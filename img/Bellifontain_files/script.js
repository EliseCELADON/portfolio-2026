




fetch('en.json').then(function(response) { 
   response.json().then(function(langue){ 
      console.log(langue);
      Object.keys(langue).forEach(function(cle) {
    document.querySelector("#" + cle).innerHTML = langue[cle];
});
      // Ajoutez ici d’autres instructions utilisant la variable data 
   }) 
})

//bouton passage fr en 


//animation buger menu


const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");

});


