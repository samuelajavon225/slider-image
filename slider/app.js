const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e) {
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}

const submit=document.getElementById("inscription").addEventListener("submit",function(e){
    e.preventDefault();
    let erreur
    let email=getElementById('email')
    let password=getElementById('passeword')

    if (!email.value){
        e.preventDefault
        erreur="veuillez entrez une addrese email valide"
    }

    if(erreur){

        document.getElementById("erreur").innerHTML=erreur
    }
 else{
    alert('formulaire envoyé !')
 }
})
function validateForm() {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if (email === "" || password === "") {
      
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("password").style.border = "2px solid red";
      alert("Veuillez remplir tous les champs!");
    } else {
    
      alert("Formulaire soumis avec succès!");
    }
  }



