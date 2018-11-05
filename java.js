

var chiffreJoueur = 0;
var chiffreOrdi = Math.floor(Math.random() * 100) +1;
var tentativesRestantes = 10;


function reset() {
    chiffreJoueur = 0;
    chiffreOrdi = Math.floor(Math.random() * 100) +1;
    tentativesRestantes = 10;
    document.getElementById("proposition").value = '';
}


/** document.getElementById("bouton").addEventListener("click", function() { **/


function jeu () {


    chiffreJoueur = document.getElementById('proposition').value;

    if (tentativesRestantes === 0) {
        document.getElementById('resultats').innerHTML = "Vous n'avez plus de vie";
        alert ("Vous n'avez plus de vie");
    } else {

        if (chiffreJoueur > chiffreOrdi) {
            tentativesRestantes--;
            document.getElementById('resultats').innerHTML = "Tapez un nombre plus petit, il vous reste " + tentativesRestantes + " tentatives restantes";
            // alert ("Tapez un nombre plus petit, il vous reste " + tentativesRestantes + " tentatives restantes");
        }
        if (chiffreJoueur < chiffreOrdi) {
            tentativesRestantes--;
            document.getElementById('resultats').innerHTML = "Tapez un nombre plus grand, il vous reste " + tentativesRestantes + " tentatives restantes";

        }
        if (chiffreJoueur == chiffreOrdi) {
            document.getElementById('resultats').innerHTML = "Vous avez gagné ! Bravo !"
        }
    } document.getElementById("historique").innerHTML += chiffreJoueur + " " ;
}

