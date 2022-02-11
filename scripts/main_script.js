
function textName(){
    var boxes=document.getElementById("row2col1")
    boxes.innerText="*"
}



/*

        button1 = findViewById(R.id.button1)
        button2 = findViewById(R.id.button2)
        button3 = findViewById(R.id.button3)
        button4 = findViewById(R.id.button4)
        button5 = findViewById(R.id.button5)
        button6 = findViewById(R.id.button6)
        button7 = findViewById(R.id.button7)
        button8 = findViewById(R.id.button8)
        button9 = findViewById(R.id.button9)

        button_reset = findViewById(R.id.button_reset)
        button_reset_score = findViewById(R.id.button_reset_score)

        textView_score1 = findViewById(R.id.textView1)
        textView_score2 = findViewById(R.id.textView2)

        button1.setOnClickListener{
            fill_cell(button1, 0)
        }
        button2.setOnClickListener{
            fill_cell(button2,1)
        }
        button3.setOnClickListener{
            fill_cell(button3,2)
        }
        button4.setOnClickListener{
            fill_cell(button4,3)
        }
        button5.setOnClickListener{
            fill_cell(button5,4)
        }
        button6.setOnClickListener{
            fill_cell(button6,5)
        }
        button7.setOnClickListener{
            fill_cell(button7,6)
        }
        button8.setOnClickListener{
            fill_cell(button8, 7)
        }
        button9.setOnClickListener{
            fill_cell(button9, 8)
        }


        button_reset.setOnClickListener{
            clearButtons()
            matrix = Array(3) { IntArray(3) }
            game_state = 0
            prevEntry = 0
        }

        button_reset_score.setOnClickListener{
            clearButtons()
            matrix = Array(3) { IntArray(3) }
            game_state = 0
            prevEntry = 0
            player_2_score = 0
            player_1_score = 0

            textView_score1.text = "Player1 : $player_1_score"
            textView_score2.text = "Player2 : $player_2_score"
        }

        private fun clearButtons() {
        button1.text = null
        button2.text = null
        button3.text = null
        button4.text = null
        button5.text = null
        button6.text = null
        button7.text = null
        button8.text = null
        button9.text = null


        private fun fill_cell(b: Button, i : Int) {
        if(b.text.isNullOrEmpty() && game_state ==0){
            if(prevEntry == 0){
                b.text = "X"
                prevEntry = 1
                matrix[i/3][i%3] = 1
            }
            else if(prevEntry == 1){
                b.text = "O"
                prevEntry = 0
                matrix[i/3][i%3] = 2
            }
            check_win()
        }
    }
    }


    private fun check_win() {

        // check for rows
        for(i in 0..2){
            if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]){
                if(matrix[i][0] == 2){
                    Toast.makeText(this, "Player 2 won", Toast.LENGTH_SHORT).show()
                    player_2_score++
                    textView_score2.text = "Player2 : $player_2_score"
                    game_state = 1
                }
                else if(matrix[i][0] == 1){
                    Toast.makeText(this, "Player 1 won", Toast.LENGTH_SHORT).show()
                    player_1_score++
                    textView_score1.text = "Player1 : $player_1_score"
                    game_state = 1
                }
                return
            }
        }



        // check for columns
        for(i in 0..2){
            if(matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]){
                if(matrix[0][i] == 2){
                    Toast.makeText(this, "Player 2 won", Toast.LENGTH_SHORT).show()
                    player_2_score++
                    textView_score2.text = "Player2 : $player_2_score"
                    game_state = 1
                }
                else if(matrix[0][i] == 1){
                    Toast.makeText(this, "Player 1 won", Toast.LENGTH_SHORT).show()
                    player_1_score++
                    textView_score1.text = "Player1 : $player_1_score"
                    game_state = 1
                }
                return
            }
        }

        //check for diagonal 1
        if(matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]){
            if(matrix[0][0] == 2){
                Toast.makeText(this, "Player 2 won", Toast.LENGTH_SHORT).show()
                player_2_score++
                textView_score2.text = "Player2 : $player_2_score"
                game_state = 1
            }
            else if(matrix[0][0] == 1){
                Toast.makeText(this, "Player 1 won", Toast.LENGTH_SHORT).show()
                player_1_score++
                textView_score1.text = "Player1 : $player_1_score"
                game_state = 1
            }
            return
        }

        //check for diagonal 2
        if(matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]){
            if(matrix[0][2] == 2){
                Toast.makeText(this, "Player 2 won", Toast.LENGTH_SHORT).show()
                player_2_score++
                textView_score2.text = "Player2 : $player_2_score"
                game_state = 1
            }
            else if(matrix[0][2] == 1){
                Toast.makeText(this, "Player 1 won", Toast.LENGTH_SHORT).show()
                player_1_score++
                textView_score1.text = "Player1 : $player_1_score"
                game_state = 1
            }
            return
        }

    }




 */