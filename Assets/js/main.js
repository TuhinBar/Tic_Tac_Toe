console.log("This is a tic tac toe fun game");

// Game Logic
let play = document.getElementById("play");
// console.log(modal);
let modal = document.getElementById("modal");

//range js
var range = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = range.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
}

elem.addEventListener("input", rangeValue);

play.addEventListener("click", () => {
  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  if (player1 && player2 != undefined) {
    document.getElementById("plr1").innerText = player1;
    document.getElementById("plr2").innerText = player2;
    document.getElementById("score-1").innerText = player1;
    document.getElementById("score-2").innerText = player2;
  }
  console.log(player1, player2);
  console.log("close the modal");
  modal.classList.add("modal_close");
});
let clicked_box = [];
let arr_x = [];
let arr_o = [];
turn = "1";
boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach((item) => {
  item.addEventListener("click", () => {
    console.log("box clicked");

    //here if turn is 1, then adding that box's id to arr_x array
    if (turn == "1" && clicked_box.includes(item.id) == false) {
      item.classList.add("fa-solid", "fa-xmark", "fa-3x");
      arr_x.push(item.id);
      clicked_box.push(item.id);

      //now for each box checking if its' complimentary boxes are in arr_x or not || if yes then that entry won
      if (item.id == "box1") {
        console.log("box 1 clicked");
        if (
          (arr_x.includes("box2") == true && arr_x.includes("box3") == true) ||
          (arr_x.includes("box4") == true && arr_x.includes("box7") == true) ||
          (arr_x.includes("box5") == true && arr_x.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box2") {
        if (
          (arr_x.includes("box1") == true && arr_x.includes("box3") == true) ||
          (arr_x.includes("box5") == true && arr_x.includes("box8") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box3") {
        if (
          (arr_x.includes("box2") == true && arr_x.includes("box1") == true) ||
          (arr_x.includes("box5") == true && arr_x.includes("box7") == true) ||
          (arr_x.includes("box6") == true && arr_x.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box4") {
        if (
          (arr_x.includes("box1") == true && arr_x.includes("box7") == true) ||
          (arr_x.includes("box5") == true && arr_x.includes("box6") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box5") {
        if (
          (arr_x.includes("box1") == true && arr_x.includes("box9") == true) ||
          (arr_x.includes("box2") == true && arr_x.includes("box8") == true) ||
          (arr_x.includes("box3") == true && arr_x.includes("box7") == true) ||
          (arr_x.includes("box4") == true && arr_x.includes("box6") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box6") {
        if (
          (arr_x.includes("box5") == true && arr_x.includes("box4") == true) ||
          (arr_x.includes("box3") == true && arr_x.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box7") {
        if (
          (arr_x.includes("box5") == true && arr_x.includes("box3") == true) ||
          (arr_x.includes("box4") == true && arr_x.includes("box1") == true) ||
          (arr_x.includes("box8") == true && arr_x.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box8") {
        if (
          (arr_x.includes("box2") == true && arr_x.includes("box5") == true) ||
          (arr_x.includes("box7") == true && arr_x.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box9") {
        if (
          (arr_x.includes("box7") == true && arr_x.includes("box8") == true) ||
          (arr_x.includes("box6") == true && arr_x.includes("box3") == true) ||
          (arr_x.includes("box5") == true && arr_x.includes("box1") == true)
        ) {
          win_modal();
        }
      }
      turn = "0";
      //here if turn is 1, then adding that box's id to arr_x array
    } else if (turn == "0" && clicked_box.includes(item.id) == false) {
      item.classList.add("fa-regular", "fa-o", "fa-3x");
      arr_o.push(item.id);
      clicked_box.push(item.id);

      //now for each box checking if its' complimentary boxes are in arr_x or not || if yes then that entry won
      if (item.id == "box1") {
        console.log("box 1 clicked");
        if (
          (arr_o.includes("box2") == true && arr_o.includes("box3") == true) ||
          (arr_o.includes("box4") == true && arr_o.includes("box7") == true) ||
          (arr_o.includes("box5") == true && arr_o.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box2") {
        if (
          (arr_o.includes("box1") == true && arr_o.includes("box3") == true) ||
          (arr_o.includes("box5") == true && arr_o.includes("box8") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box3") {
        if (
          (arr_o.includes("box2") == true && arr_o.includes("box1") == true) ||
          (arr_o.includes("box5") == true && arr_o.includes("box7") == true) ||
          (arr_o.includes("box6") == true && arr_o.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box4") {
        if (
          (arr_o.includes("box1") == true && arr_o.includes("box7") == true) ||
          (arr_o.includes("box5") == true && arr_o.includes("box6") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box5") {
        if (
          (arr_o.includes("box1") == true && arr_o.includes("box9") == true) ||
          (arr_o.includes("box2") == true && arr_o.includes("box8") == true) ||
          (arr_o.includes("box3") == true && arr_o.includes("box7") == true) ||
          (arr_o.includes("box4") == true && arr_o.includes("box6") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box6") {
        if (
          (arr_o.includes("box5") == true && arr_o.includes("box4") == true) ||
          (arr_o.includes("box3") == true && arr_o.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box7") {
        if (
          (arr_o.includes("box5") == true && arr_o.includes("box3") == true) ||
          (arr_o.includes("box4") == true && arr_o.includes("box1") == true) ||
          (arr_o.includes("box8") == true && arr_o.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box8") {
        if (
          (arr_o.includes("box2") == true && arr_o.includes("box5") == true) ||
          (arr_o.includes("box7") == true && arr_o.includes("box9") == true)
        ) {
          win_modal();
        }
      } else if (item.id == "box9") {
        if (
          (arr_o.includes("box7") == true && arr_o.includes("box8") == true) ||
          (arr_o.includes("box6") == true && arr_o.includes("box3") == true) ||
          (arr_o.includes("box5") == true && arr_o.includes("box1") == true)
        ) {
          win_modal();
        }
      }

      turn = "1";
    }
    
  });
//   alert('draw')
});


const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", reset_function);

const exit_btn = document.getElementById("exit");
exit_btn.addEventListener("click", () => {
  arr_x = [];
  arr_o = [];
  window.location.reload();
});
console.log(arr_x);
console.log(arr_o);

// reset function

function reset_function() {
  Array.from(boxes).forEach((item) => {
    item.classList.remove(
      "fa-solid",
      "fa-xmark",
      "fa-5x",
      "fa-regular",
      "fa-o",
      "fa-5x"
    );
  });
  turn = "1";
  arr_x = [];
  arr_o = [];
  clicked_box = [];
  let win_modal= document.getElementById("win_modal");
  let message_box = document.getElementById("message_box");
  win_modal.classList.add("win_modal_hidden");
  message_box.classList.add("message_box_hidden");
}

// winning modal

function win_modal() {
  let win_modal = document.getElementById("win_modal");
  let message_box = document.getElementById("message_box");
  console.log(message_box);
  message_box.classList.remove("message_box_hidden");
  win_modal.classList.remove("win_modal_hidden");
  let won = document.getElementById("won");
  won.addEventListener("click", reset_function);
}
