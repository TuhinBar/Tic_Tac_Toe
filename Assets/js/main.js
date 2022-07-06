console.log("This is a tic tac toe fun game")
let play = document.getElementById("play")
// console.log(modal);
let modal = document.getElementById("modal")

play.addEventListener("click", () =>{
    console.log("close the modal")
    modal.classList.add("modal_close")

});