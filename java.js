
// Ici, on déclare les variables qui vont servir de fondement pour notre programme. Considère qu'elles sont
// fondatrices. Et la fonction Math.random est déja attribuée a ma variable chiffreOrdi, de manière a ce que un chiffre
// soit généré a chaque partie, et non a chaque click sur "jouer"

var chiffreJoueur = 0;
var chiffreOrdi = Math.floor(Math.random() * 100) +1;
var tentativesRestantes = 10;

// Ici, j'ai créé une fonction reset, qui remet par défaut les valeurs fondamentales de mon jeu.
// Ca permet de tout faire recommencer a 0.

function reset() {
    chiffreJoueur = 0;
    chiffreOrdi = Math.floor(Math.random() * 100) +1;
    tentativesRestantes = 10;
    document.getElementById("proposition").value = ''; // il y a des guillements vides pour symboliser que l'on veut supprimer
    // ce qui est indiqué dans mon champ proposition, quand on appuye sur reset.

}


/** document.getElementById("bouton").addEventListener("click", function() { **/


function jeu () { // Ici je déclare ma fonction, et elle sera appelée dans mon html, simplement.


    chiffreJoueur = document.getElementById('proposition').value; // c'est important dans un 1 er temps que j'indique dans ma fonction
    // la var chiffreJoueur. C'est ici que tout commence.
    // je récupère la valeur renseignée par l'utilisateur grace a .value, et je l'attribue a chiffreJoueur.

    if (tentativesRestantes === 0) {
        document.getElementById('resultats').innerHTML = "Vous n'avez plus de vie";
        alert ("Vous n'avez plus de vie");

        // Grace a cette condition if ci-dessus, j'indique a l'utilisateur que le jeu s'arrête. Si il y a des vies, alors :

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
            document.getElementById('resultats').innerHTML = "Vous avez gagné ! Bravo !";
            document.getElementById('resultats').style.animation = "sucess 4s 3";
        }

        // j'effectue une comparaison a chaque condition, et je vérifie qu'elle se réalise pour chaque scénario.

    } document.getElementById("historique").innerHTML += chiffreJoueur + " " ;
}

