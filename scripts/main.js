let userButton = document.querySelector('.button');
let userInput = document.querySelector('.input');
let result = document.querySelector('.result');
let square = document.querySelector('.square');
let essai = 0;

//let try = 0;
console.log(parseInt(userInput.value));
console.log(typeof(parseInt(userInput.value)));
const cardNumber = parseFloat(1 + Math.floor(100 * Math.random()));

console.log(cardNumber);
console.log(typeof(cardNumber));
// 100 * Math.random() génère un nombre aléatoire situé entre 0.0 et 99.999.. / Math.floor arrondi ce nombre à la valeur aléatoire inférieure. / il faut ajouter +1 pour se situer entre 1 et 100.

function guessingNbr(nbr) {
    essai++;
    if (essai < 4) {
        let restant = 5 - essai;
        if (nbr < cardNumber) {
            result.innerHTML = `Vous avez entré <span>(${userInput.value})</span> Cherchez plus haut. <br>Il vous reste <span>${restant}</span> essais.`;
            erase();
        }
        else if (cardNumber < nbr) {
            result.innerHTML = `Vous avez entré <span>(${userInput.value})</span>  Cherchez plus bas. <br>Il vous reste <span>${restant}</span> essais.`;
            erase();
        }
        else if (cardNumber === nbr) {
            result.innerHTML = `Bingo!!! Il s'agissait bien du nombre <span>${cardNumber}</span>`
            if (restant !=0) {
                userInput.setAttribute("class", "input-none");
                userButton.innerText = "Recommencez";
                userButton.setAttribute("class", "button-refresh");
                document.querySelector('.button-refresh').addEventListener('click', function() {
                    window.location.reload();
                })
            }
        }
        else  {
            result.innerHTML = `Entrez un nombre entre 1 et 100, que j'vous ai dit!<br>Il vous reste <span>${restant}</span> essais.`;
            erase();
        } 
    }

    else if (essai == 4) {
        if (nbr < cardNumber) {
            result.innerHTML = `Vous avez entré <span>(${userInput.value})</span> Cherchez plus haut. <br>Dernière chance. Il vous reste <span>1</span> essai. Hou! La pression!`
            erase();
        }
        else if (cardNumber < nbr) {
            result.innerHTML = `Vous avez entré <span>(${userInput.value})</span> Cherchez plus bas. <br>Dernière chance. Il vous reste <span>1</span> essai. Hou! La pression!`;
            erase();
        }
        else if (cardNumber === nbr) {
            result.innerHTML = `Bingo!!! Il s'agissait bien du nombre <span>${cardNumber}</span>`
            if (restant !=0) {
                userInput.setAttribute("class", "input-none");
                userButton.innerText = "Recommencez";
                userButton.setAttribute("class", "button-refresh");
                document.querySelector('.button-refresh').addEventListener('click', function() {
                    window.location.reload();
                })
            }
        }
        else  {
            result.innerHTML = `Entrez un nombre entre 1 et 100, que j'vous ai dit! <br>Il vous reste <span>1</span> essai. Hou! La pression!`;
            erase();
        } 
    }

    else if (essai == 5) {
        if (nbr < cardNumber) {
            result.innerHTML = `GAME OVER! Le nombre à deviner était <span>(${cardNumber})</span><br>Recommencez!`
        }
        else if (cardNumber < nbr) {
            result.innerHTML = `GAME OVER! Le nombre à deviner était <span>(${cardNumber})</span><br>Recommencez!`
        }
        else if (cardNumber === nbr) {
            result.innerHTML = `Bingo!!! Il s'agissait bien du nombre <span>${cardNumber}</span>`
        }
        else  {
            result.innerHTML = `Entrez un nombre entre 1 et 100, que j'vous avais dit!<br>De toute manière, le jeu est fini. Le nombre à deviner était <span>(${cardNumber})</span>`
        }
        userInput.setAttribute("class", "input-none");
        userButton.innerText = "Recommencez";
        userButton.setAttribute("class", "button-refresh");
        document.querySelector('.button-refresh').addEventListener('click', function() {
            window.location.reload();
        })
    } 
}

userButton.addEventListener('click', function() {
    guessingNbr(parseInt(userInput.value))
    userInput.value = "";
})

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        guessingNbr(parseInt(userInput.value))
        userInput.value = ""; 
    } 
})

function erase() {
    setTimeout(() => {
        result.innerHTML = "";
        }, 5000);
}


