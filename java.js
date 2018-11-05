
var chiffreJoueur = 0;
var chiffreOrdi = 0;
var tentativesRestantes = 10;

    function reset() {
        chiffreJoueur = 0;
        chiffreOrdi = 0;
        tentativesRestantes = 10;
        document.getElementById("proposition").value = '';
    }

function chiffreAleatoire () {
    if (chiffreOrdi === 0) {
        chiffreOrdi = Math.floor(Math.random() * 100);
    }
}

/** document.getElementById("bouton").addEventListener("click", function() { **/

function jeu () {

    chiffreOrdi = chiffreAleatoire();
    chiffreJoueur = document.getElementById('proposition').value;

    if (tentativesRestantes === 0) {
        document.getElementById('resultat').innerHTML = "Vous n'avez plus de vie";
        alert ("Vous n'avez plus de vie");
    } else {

        console.log(chiffreOrdi);

        if (chiffreJoueur > chiffreOrdi) {
            tentativesRestantes--;
            document.getElementById('resultats').innerHTML = "Manqué, veuillez taper un nombre plus petit";
            alert ("Tapez un nombre plus petit");
        }
        if (chiffreJoueur < chiffreOrdi) {
            tentativesRestantes--;
            document.getElementById('resultats').innerHTML = "Manqué, veuillez taper un nombre plus grand";
           alert ("Tape un nombre plus petit");
        }
        if (chiffreJoueur === chiffreOrdi) {
            document.getElementById('resultats').innerHTML = "Vous avez gagné ! Bravo !";
           alert ("Gagné, bravo !")
        }
    }
}

