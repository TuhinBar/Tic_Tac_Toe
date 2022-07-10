console.log("This is a tic tac toe fun game")

// Game Logic
let play = document.getElementById("play")
// console.log(modal);
let modal = document.getElementById("modal")

play.addEventListener("click", () =>{
    let player1= document.getElementById("player1").value;
    let player2= document.getElementById("player2").value;
    document.getElementById("plr1").innerText= player1;
    document.getElementById("plr2").innerText= player2;
    document.getElementById("score-1").innerText= player1;
    document.getElementById("score-2").innerText= player2;
    console.log(player1,player2)
    console.log("close the modal")
    modal.classList.add("modal_close")

});
turn = "1"
boxes = document.getElementsByClassName('box')
console.log(boxes)
Array.from(boxes).forEach(item => {
    item.addEventListener('click', ()=>{
        console.log("box clicked")
        if (turn == "1"){
            item.classList.add("fa-solid", "fa-xmark", "fa-5x")
            turn = "0"
        }
        else{
            item.classList.add("fa-regular", "fa-o", "fa-5x")
            turn = "1"
        }
        
    })
 })

const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", () =>{
    Array.from(boxes).forEach(item =>{
        item.classList.remove("fa-solid", "fa-xmark", "fa-5x", "fa-regular", "fa-o", "fa-5x" 
        )})
    turn = "1"

})
const exit_btn = document.getElementById("exit");
exit_btn.addEventListener("click", () =>{
    window.location.reload()
});
