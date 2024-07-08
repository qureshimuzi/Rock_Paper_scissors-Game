// const box1 = document.getElementById('Div');
// let body = document.querySelector("body");
// let curr_mode = "light"; //dark

// box1.addEventListener('mouseover', () =>{
//  if(curr_mode === "light") {
//    curr_mode = "dark";
//    body.classList.add("dark");
//    body.classList.remove("light");
//   } else {
//    curr_mode = "light";
//    body.classList.add("light");
//    body.classList.remove("dark");
//   }

//  console.log(curr_mode);
// });

let user_score=0;
let comp_score=0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_score_para = document.querySelector("#User-Score");
let comp_score_para = document.querySelector("#Comp-Score");

const gen_Com_Choice = () => {
    const option = ["rock", "paper", "scissor"];
    //rock, paper, Scisssor
    const ran_idx = Math.floor(Math.random() *3);
    return option[ran_idx];
}

const Draw_game = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw ! Play again";
    msg.style.backgroundColor = "#081b31";
}

 const show_winner = (user_win) => {
     if(user_win){
        user_score++;
        user_score_para.innerText=user_score;
         console.log("you win!")
         msg.innerText = "You Win!";
         msg.style.backgroundColor = "green";
    } else {
        comp_score++;
        comp_score_para.innerText=comp_score;
        console.log("You Lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    };
}
const Play_game = (user_choice) => {
    console.log("User Choice =", user_choice )
    // generate computer choice
    const comp_choice = gen_Com_Choice();
    console.log("Comp_choice =", comp_choice );

    if(user_choice===comp_choice) {
        //Draw Game
      Draw_game();
    } else {
       let user_win = true;
       if(user_choice==="rock"){
        //scissor, paper
        user_win = comp_choice === "paper" ? false : true;
       } else if(user_choice ==="paper") {
        //rock, scissor
        user_win = comp_choice === "scissor" ? false : true;
       } else {
        //rock, paper
        user_win = comp_choice === "rock" ? false : true;
       }
       show_winner(user_win);
    } 

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        // console.log("choice was Clicked", user_choice);
        Play_game(user_choice);
    });
});