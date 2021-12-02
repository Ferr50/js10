var turn = 0;
var player1 = "url('images/o.png')";
var player2 = "url('images/x.png')";
var board = [ [0,0,0],[0,0,0],[0,0,0] ];
var win01 = 0;
var win02 = 0;

function tictactoe(id) {

    switch (id) {
        case '1-1':
            if(board[0][0] == 0) {
                if(turn == 0){
                    board[0][0] = 1;
                }else{
                    board[0][0] = 2;
                }
                printImage(id);
            }
        break;
        case '1-2':
            if(board[0][1] == 0) {
                if(turn == 0){
                    board[0][1] = 1;
                }else{
                    board[0][1] = 2;
                }
                printImage(id);
            }
        break;
        case '1-3':
            if(board[0][2] == 0) {
                if(turn == 0){
                    board[0][2] = 1;
                }else{
                    board[0][2] = 2;
                }
                printImage(id);
            }
        break;
        case '2-1':
            if(board[1][0] == 0) {
                if(turn == 0){
                    board[1][0] = 1;
                }else{
                    board[1][0] = 2;
                }
                printImage(id);
            }
        break;
        case '2-2':
            if(board[1][1] == 0) {
                if(turn == 0){
                    board[1][1] = 1;
                }else{
                    board[1][1] = 2;
                }
                printImage(id);
            }
        break;
        case '2-3':
            if(board[1][2] == 0) {
                if(turn == 0){
                    board[1][2] = 1;
                }else{
                    board[1][2] = 2;
                }
                printImage(id);
            }
        break;
        case '3-1':
            if(board[2][0] == 0) {
                board[2][0] = 1;
                printImage(id);
            }
        break;
        case '3-2':
            if(board[2][1] == 0) {
                board[2][1] = 1;
                printImage(id);
            }
        break;
        case '3-3':
            if(board[2][2] == 0) {
                if(turn == 0){
                    board[2][2] = 1;
                }else{
                    board[2][2] = 2;
                }
                printImage(id);
            }
        break;
      }   
    winner();
}

function printImage(id) {

    if(turn == 0){
        document.getElementById(id).style.backgroundImage = player1;
        turn = turn + 1;
    }else{
        document.getElementById(id).style.backgroundImage = player2;
        turn = turn - 1;
    }

}

function winner() {

    if( (board[0][0] == 1) && (board[0][1] == 1) && (board[0][2] == 1) ||
        (board[1][0] == 1) && (board[1][1] == 1) && (board[1][2] == 1) ||
        (board[2][0] == 1) && (board[2][1] == 1) && (board[2][2] == 1) ||
        (board[0][0] == 1) && (board[1][0] == 1) && (board[2][0] == 1) ||
        (board[0][1] == 1) && (board[1][1] == 1) && (board[2][1] == 1) ||
        (board[0][2] == 1) && (board[1][2] == 1) && (board[2][2] == 1) ||
        (board[0][0] == 1) && (board[1][1] == 1) && (board[2][2] == 1) ||
        (board[2][0] == 1) && (board[1][1] == 1) && (board[0][2] == 1)
    ){
        win01 = win01 + 1;
        document.getElementById('wins01').innerHTML = win01;
        resetImageBoard();
    }

    if( (board[0][0] == 2) && (board[0][1] == 2) && (board[0][2] == 2) ||
        (board[1][0] == 2) && (board[1][1] == 2) && (board[1][2] == 2) ||
        (board[2][0] == 2) && (board[2][1] == 2) && (board[2][2] == 2) ||
        (board[0][0] == 2) && (board[1][0] == 2) && (board[2][0] == 2) ||
        (board[0][1] == 2) && (board[1][1] == 2) && (board[2][1] == 2) ||
        (board[0][2] == 2) && (board[1][2] == 2) && (board[2][2] == 2) ||
        (board[0][0] == 2) && (board[1][1] == 2) && (board[2][2] == 2) ||
        (board[2][0] == 2) && (board[1][1] == 2) && (board[0][2] == 2)
    ){
        win02 = win02 + 1;
        document.getElementById('wins02').innerHTML = win02;
        resetImageBoard();
    }
}

function resetImageBoard() {

    document.getElementById('1-1').style.backgroundImage = "url()";
    document.getElementById('1-2').style.backgroundImage = "url()";
    document.getElementById('1-3').style.backgroundImage = "url()";
    document.getElementById('2-1').style.backgroundImage = "url()";
    document.getElementById('2-2').style.backgroundImage = "url()";
    document.getElementById('2-3').style.backgroundImage = "url()";
    document.getElementById('3-1').style.backgroundImage = "url()";
    document.getElementById('3-2').style.backgroundImage = "url()";
    document.getElementById('3-3').style.backgroundImage = "url()";

    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++){
            board[i][j]=0;
        }
    }

}

