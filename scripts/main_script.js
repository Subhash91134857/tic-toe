var name1 = window.prompt("Enter the first player name")
var name2 = window.prompt("Enter the second player name")

if(name1 === '') name1 = 'A'
if(name2 === '') name2 = 'B'
if(name1 === null) name1 = 'A'
if(name2 === null) name2 = 'B'
document.getElementById("player1").innerText =  "Player " + name1 + " Score: "
document.getElementById("player2").innerText =  "Player " + name2 + " Score: "

let congrats_modal = document.getElementById("congoModal")
//congrats_modal.style.visibility = "collapse"

var game_state = 0;    // running
var previous_entry = 'X';

var matrix = [2,2,2,
              2,2,2,
              2,2,2]

var player_2_score = 0; // 'X'
var player_1_score = 0; // 'O'

const score2 = document.getElementById("score2")
const score1 = document.getElementById("score1")

// 3 -> empty
// 0 -> 'O'
// 1 -> 'X'

const button1 = document.getElementById("row1col1")
const button2 = document.getElementById("row1col2")
const button3 = document.getElementById("row1col3")
const button4 = document.getElementById("row2col1")
const button5 = document.getElementById("row2col2")
const button6 = document.getElementById("row2col3")
const button7 = document.getElementById("row3col1")
const button8 = document.getElementById("row3col2")
const button9 = document.getElementById("row3col3")


function addSymbol(id, i){  //i -> grid_num 0-8
    const box = document.getElementById(id)
    if(game_state===0 && (box.innerText === null || box.innerText==='')){
        if(previous_entry === 'X'){
            box.innerText = 'O'
            previous_entry = 'O'
            matrix[i] = 0

        }
        else{
            box.innerText = 'X'
            previous_entry = 'X'
            matrix[i] = 1
        }
        checkWin()
    }
}

function reset_cell(){
    button1.innerText = ''
    button2.innerText = ''
    button3.innerText = ''
    button4.innerText = ''
    button5.innerText = ''
    button6.innerText = ''
    button7.innerText = ''
    button8.innerText = ''
    button9.innerText = ''
    game_state = 0
    previous_entry = 'X'
    matrix = [2,2,2,2,2,2,2,2,2];
}

function reset_score(){
    player_2_score = 0; // 'X'
    player_1_score = 0; // 'O'
    score2.innerText = player_2_score.toString()
    score1.innerText = player_1_score.toString()
    reset_cell()
}

function checkWin(){
    // check for rows
    for(let p =0 ; p <= 6; p+=3) {
        if (matrix[p] === matrix[p+1] && matrix[p+1] === matrix[p+2] && matrix[p] !== 2) {
            if (matrix[p] === 1) {
                player_2_score++  // 'X'
                score2.innerText = player_2_score.toString()
                game_state = 1
                congratulation(name2)
            } else{
                player_1_score++  // '0'
                score1.innerText = player_1_score.toString()
                game_state = 1 //stop
                congratulation(name1)
            }

            return
        }
    }


    // check for columns
    for(let i =0 ; i <= 2; i++){
        if(matrix[i] === matrix[i+3] && matrix[i+3] === matrix[i+6] && matrix[i] !== 2){
            if(matrix[i] === 1){
                player_2_score++  // 'X'
                score2.innerText = player_2_score.toString()
                game_state = 1 //stop
                congratulation(name2)
            }
            else{
                player_1_score++  // '0'
                score1.innerText = player_1_score.toString()
                game_state = 1 //stop
                congratulation(name1)
            }
            return
        }
    }


    //check for diagonal 1
    if(matrix[0] === matrix[4] && matrix[4] === matrix[8] && matrix[0] !== 2){
        if(matrix[0] === 1){
            player_2_score++  // 'X'
            score2.innerText = player_2_score.toString()
            game_state = 1 //stop
            congratulation(name2)
        }
        else{
            player_1_score++  // '0'
            score1.innerText = player_1_score.toString()
            game_state = 1 //stop
            congratulation(name1)
        }
        return
    }

    //check for diagonal 2
    if(matrix[2] === matrix[4] && matrix[4] === matrix[6] && matrix[2] !== 2){
        if(matrix[2] === 1){
            player_2_score++  // 'X'
            score2.innerText = player_2_score.toString()
            game_state = 1 //stop
            congratulation(name2)
        }
        else{
            player_1_score++  // '0'
            score1.innerText = player_1_score.toString()
            game_state = 1 //stop
            congratulation(name1)
        }
    }

}

function congratulation(name){
    congrats_modal.style.visibility = "visible"
    document.getElementById("winner_message").innerText = name + " has won this round🥳"
}


function cancel(){
    congrats_modal.style.visibility = "collapse"
}


 