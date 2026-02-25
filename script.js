




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
