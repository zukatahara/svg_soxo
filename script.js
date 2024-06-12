const baToNam = document.getElementById("3to5");
const sauToTam = document.getElementById("6to8");
const chinToMuoiMot = document.getElementById("9to11");
const muoihaiToMuoiBon = document.getElementById("12to14");
const muoiLamToMuoiTam = document.getElementById("15to18");

// const number = 16;
// const idx = 0;
let result;
let itemIndexOf;
function range(arr) {
  for (let index = 0; index < arr.length; index++) {
    const number = arr[index];
    const idx = index;
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
  }
  const activeNodeList = document.querySelectorAll(".custom-cell");
  console.log("activeNodeList:", activeNodeList);
  createLine(activeNodeList);
}

function createDiv(number, idx, parentDiv) {
  const firstTd = parentDiv.querySelectorAll("th")[idx];
  firstTd.style.backgroundColor = "#9BEC00"; // Đổi màu nền sang đỏ
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
  if (number < 11) {
    span.style.background = "white";
    span.style.color = "black";
  } else {
    span.style.background = "black";
    span.style.color = "white";
  }

  // Thêm span vào th đầu tiên
  firstTd.appendChild(span);
}
function createLine(activeNodeList) {
  const line = document.getElementById("line");
  line.innerHTML = "";
  for (let i = 0; i < activeNodeList.length - 1; i++) {
    if (i < activeNodeList.length - 1) {
      const rs = findPosition(
        activeNodeList[i].getBoundingClientRect(),
        activeNodeList[i + 1].getBoundingClientRect()
      );
      var svgLine1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
      );
      svgLine1.setAttribute("x1", rs.x1);
      svgLine1.setAttribute("y1", rs.y1);
      svgLine1.setAttribute("x2", rs.x2);
      svgLine1.setAttribute("y2", rs.y2);
      svgLine1.setAttribute("stroke", "#03AED2");
      svgLine1.setAttribute("stroke-width", "2");
      line.appendChild(svgLine1);
    }
  }
  //
}
function findPosition(item1, item2) {
  const obj = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  };
  if (item1.left === item2.left) {
    obj.x1 = (item1.left + item1.right) / 2;
    obj.y1 = item1.bottom;
    obj.x2 = (item2.left + item2.right) / 2;
    obj.y2 = item2.top;
  }
  if (item1.left < item2.left) {
    obj.x1 = item1.right;
    obj.y1 = (item1.bottom + item1.top) / 2;
    obj.x2 = item2.left;
    obj.y2 = (item2.top + item2.bottom) / 2;
  }
  if (item1.left > item2.left) {
    obj.x1 = item1.left;
    obj.y1 = (item1.bottom + item1.top) / 2;
    obj.x2 = item2.right;
    obj.y2 = (item2.top + item2.bottom) / 2;
  }
  return obj;
}
const arr = new Array(4)
  .fill(0)
  .map((item) => Math.floor(Math.random() * (18 - 3 + 1)) + 3);
range(arr);
