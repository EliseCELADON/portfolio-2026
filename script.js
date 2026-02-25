



let anglais = {
    "titre": "Welcome to my portfolio",
    "metier": "Creative & Graphic Designer",
    "description":"Here is a selection of my recent projects and professional achievements :)",
    }


let langue= anglais;
Object.keys(langue).forEach(function(cle) {
    document.querySelector("#" + cle).innerHTML = langue[cle];
});