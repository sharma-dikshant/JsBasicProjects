let boxes = document.querySelectorAll(".box");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;
let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "O";
      turnO = false;
    } else {
      box.textContent = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let winner = checkWinner();

    if (count === 9 && !winner) {
      alert("match Draw! ");
      clearBoxes();
      count = 0;
      document.querySelector(".winner-msg").classList.add("hide");
      enableBoxes();
    }
  });
});

document.querySelector("#new-game").addEventListener("click", () => {
  clearBoxes();
  count = 0;
  enableBoxes();
  document.querySelector(".winner-msg").classList.add("hide");
  
});

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let val0 = boxes[pattern[0]].innerText;
    let val1 = boxes[pattern[1]].innerText;
    let val2 = boxes[pattern[2]].innerText;

    // console.log(val0, val1, val2);

    if (val0 != "" && val1 != "" && val2 != "") {
      if (val0 === val1 && val1 === val2) {
        console.log(val0, " wins!");
        showWinner(val0);
        return true;
      }
    }
  }
};

function showWinner(winner) {
  let msg = document.querySelector(".winner-msg");
  msg.innerText = `${winner} wins!`;
  disableBoxes();
  msg.classList.remove("hide");
}

function disableBoxes() {
  for (let box of boxes) {
    box.disabled = true;
  }
}
function enableBoxes() {
  for (let box of boxes) {
    box.disabled = false;
  }
}

function clearBoxes() {
  for (let box of boxes) {
    box.innerText = "";
  }
}
