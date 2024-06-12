const baToNam = document.getElementById("3to5");
const sauToTam = document.getElementById("6to8");
const chinToMuoiMot = document.getElementById("9to11");
const muoihaiToMuoiBon = document.getElementById("12to14");
const muoiLamToMuoiTam = document.getElementById("15to18");

const number = 16;
const idx = 2;
let result;
let itemIndexOf;
switch (number) {
  case 3:
  case 4:
  case 5:
    itemIndexOf = [3, 4, 5].indexOf(number);
    createDiv(number, idx, baToNam);
    break;
  case 6:
  case 7:
  case 8:
    itemIndexOf = [6, 7, 8].indexOf(number);
    createDiv(number, idx, sauToTam);
    break;
  case 9:
  case 10:
  case 11:
    itemIndexOf = [9, 10, 11].indexOf(number);
    createDiv(number, idx, chinToMuoiMot);
    break;
  case 12:
  case 13:
  case 14:
    itemIndexOf = [12, 13, 14].indexOf(number);
    createDiv(number, idx, muoihaiToMuoiBon);
    break;
  default:
    itemIndexOf = [15, 16, 17, 18].indexOf(number);
    createDiv(number, idx, muoiLamToMuoiTam);
    break;
}

function createDiv(number, idx, parentDiv) {
  const firstTd = parentDiv.querySelectorAll("th")[idx];
  firstTd.style.backgroundColor = "black"; // Đổi màu nền sang đỏ
  // Tạo phần tử span với class custom-cell và thêm giá trị 2 vào
  const span = document.createElement("span");
  span.classList.add("custom-cell");
  span.textContent = number;
  if (idx === 0) {
    span.style.left = "-10px";
  } else {
    span.style.left = 18 - 10 + "px";
  }
  if (number === 18) {
    span.style.bottom = itemIndexOf * 13.3 - 15 + "px";
  } else {
    span.style.bottom = itemIndexOf * 13.3 - 10 + "px";
  }

  // Thêm span vào th đầu tiên
  firstTd.appendChild(span);
}
