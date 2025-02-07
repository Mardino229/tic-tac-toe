
const td = Array.from(document.getElementsByTagName("td"));
let winner = true;
const resultat = document.getElementById("result");
let letter = true;
const result = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [0,4,8], [2,4,6], [2,5,8]];

td.forEach(element=>{
    element.addEventListener("click", function(){
        letter? element.innerText = "X" : element.innerText = "O";
        letter = !letter;
        element.style.pointerEvents = "none";
        res();
        draw();
    })
})

function tousEgaux(liste) {
    return liste.every(element => element === liste[0]);
}

function res(){
    for (i=0; i<result.length; i++ ){
        let test = result[i].map((item=>{
            return td[item].textContent;
        }))
        if (tousEgaux(test)&&test[0]!=""){
            winner=false;
            showVictoryScreen(test[0]);
            break;
        }
    }
}

function draw() {
    let finish = 0;
    for (i=0; i<td.length; i++){
        if (td[i].textContent != ""){
            finish++;
            console.log(finish);
        }
    }
    if (finish==9&&winner){
        showDrawScreen();
    }
}

function showVictoryScreen(winner) {
    document.getElementById("winnerMessage").innerText = `🎉 Joueur ${winner} a gagné ! 🎉`;
    document.getElementById("victoryScreen").classList.replace("hidden", "victoryScreen");
}
function showDrawScreen() {
    document.getElementById("winnerMessage").innerText = `❌ Draw ! ❌`;
    document.getElementById("victoryScreen").classList.replace("hidden", "victoryScreen");
}



function hideVictoryScreen() {
    document.getElementById("victoryScreen").classList.replace("victoryScreen", "hidden");
    td.forEach(element=>{
        element.innerText = "";
        element.style.pointerEvents = "auto";
    }) 
    winner = true;

}
