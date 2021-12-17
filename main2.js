player = localStorage.getItem("player1");
player_ = localStorage.getItem("player2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1").innerHTML=player+":";
document.getElementById("player2").innerHTML=player_+":";


document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

document.getElementById("player_ques").innerHTML=player;
document.getElementById("player_ans").innerHTML=player_;

function send(){
    num1 = document.getElementById("Number 1").value;
    num2 = document.getElementById("Number 2").value;
    actual_answer = parseInt(num1)*parseInt(num1);

    ques_num = "<h4>"+num1+"X"+num2+"</h4>";
    input_box = "<br>Answer: <input type='text' id = 'input_check_box'>";
    button = "<br><br>button class='btn btn-info' onclick='check()'>check</button>";
    row = ques_num+input_box+button;
    document.getElementById("output").value=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}