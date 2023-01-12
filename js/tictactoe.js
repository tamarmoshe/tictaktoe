let selections = {
    'X': [],
    'O': []
  };

let total_turns_played = 0;
function generateGame(){
    var gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = '';
    for (i = 0; i < 3; i++){
        var breakline = document.createElement("br");
        document.getElementById('game-board').appendChild(breakline);
        for (j = 0; j < 3; j++){
            var button = document.createElement("input");
            button.setAttribute("value", " ")
            button.setAttribute("type", 'button');
            button.setAttribute("class", 'grid-cell');
            button.setAttribute("onclick", 'markCheck(this)');
            // button.setAttribute("class", 'game-board');
            gameBoard.appendChild(button);
        
        }
    
    }
}
// var br = document.createElement("br");
// gameBoard.appendChild(br);
player = "X"
function markCheck(obj){
    if (player =="X") {
        obj.setAttribute("class", 'green-player');
        obj.setAttribute("value", "X")
        player = "O"
        
    }
    else {
        obj.setAttribute("class", 'red-player');
        obj.setAttribute("value", "O")
        player = "X"
        
    }
    obj.setAttribute("disabled", 'disabled');
    // document.getElementById("button").disabled = true;
    // button.disabled = true;
}


// if (player =="X") {
//     obj.setAttribute("class", 'green-player');
//     player = "O"
// }
// else {
//     obj.setAttribute("class", 'red-player');
//     player = "X"
// }