console.log("This is a tic tac toe fun game")
let play = document.getElementById("play")
// console.log(modal);
let modal = document.getElementById("modal")

play.addEventListener("click", () =>{
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
