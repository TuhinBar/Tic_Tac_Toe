console.log("This is a tic tac toe fun game")

// Game Logic
let play = document.getElementById("play")
// console.log(modal);
let modal = document.getElementById("modal")

play.addEventListener("click", () =>{
    let player1= document.getElementById("player1").value;
    let player2= document.getElementById("player2").value;
    if(player1 && player2 != undefined){
    document.getElementById("plr1").innerText= player1;
    document.getElementById("plr2").innerText= player2;
    document.getElementById("score-1").innerText= player1;
    document.getElementById("score-2").innerText= player2;
    }
    console.log(player1,player2)
    console.log("close the modal")
    modal.classList.add("modal_close")

});
let clicked_box = [];
let arr_x = [];
let arr_o = [];
turn = "1"
boxes = document.getElementsByClassName('box')
console.log(boxes)
Array.from(boxes).forEach(item => {
    item.addEventListener('click', ()=>{
        console.log("box clicked")
        if (turn == "1" && clicked_box.includes(item.id) == false){
            item.classList.add("fa-solid", "fa-xmark", "fa-3x");
            arr_x.push(item.id)
            clicked_box.push(item.id);
            if (item.id == "box6" && arr_x.includes("box5") == true){
                window.alert("won")
            }





            turn = "0"
        }
        else if (turn == "0" && clicked_box.includes(item.id) == false){
            item.classList.add("fa-regular", "fa-o", "fa-3x")
            arr_o.push(item.id);
            clicked_box.push(item.id);
            turn = "1"
        }
        
    })
 });

const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", () =>{
    Array.from(boxes).forEach(item =>{
        item.classList.remove("fa-solid", "fa-xmark", "fa-5x", "fa-regular", "fa-o", "fa-5x" 
        )})
    turn = "1"
    arr_x = [];
    arr_o = [];
    clicked_box = [];

})
const exit_btn = document.getElementById("exit");
exit_btn.addEventListener("click", () =>{
    arr_x = [];
    arr_o = [];
    window.location.reload()
});
console.log(arr_x);
console.log(arr_o);
