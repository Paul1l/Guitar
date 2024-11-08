// Конечно, вот небольшой пример игры "2048" на JavaScript:

// ```javascript
// let board = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0 0, 0]
// ];

// function printBoard() {
//   for (let i = 0; i < 4; i++) {
//     console.log(board[i].join(" "));
//   }
// }

// function generateRandomTile() {
//   let row = Math.floor(Math.random() * 4);
//   let col = Math.floor(Math.random() * 4);
//   if (board[row][col] === 0) {
//     board[row][col] = 2;
//   } else {
//     generateRandomTile();
//   }
// }

// function moveLeft() {
//   // Implement move left logic here
// }

// function moveRight() {
//   // Implement move right logic here
// }

// function moveUp() {
//   // Implement move up logic here
// }

// function moveDown() {
//   // Implement move down logic here
// }

// // Инициализация игры
// generateRandomTile();
// generateRandomTile();
// printBoard();
// ```

// Этот код создает игровое поле 4x4 и начально заполняет две плитки со значением 2. Ты можешь продолжить работу над этим кодом, добавив логику для движения плиток влево, вправо, вверх и вниз.

/* При нажатии на кнопку открывается нав панель :
 1. отследить клик на кнопку
 2. привязать к ней функцию
    2.1 отледить нав панель и при нажатии 
    добавлять класс open c пом toggle*/

    
const btn = document.querySelector("#burger");
const navg = document.querySelector("#nav-menu");
const ulList = document.querySelector("#list")
const listItems = document.querySelectorAll("#item");
document.addEventListener("DOMContentLoaded", function() {
  btn.addEventListener("click", function(){
    btn.classList.toggle("open");
    navg.classList.toggle("active");
    ulList.classList.toggle("active-list");
    listItems.forEach(item => item.classList.toggle("active-list-item"));
    console.log(btn);
    console.log(navg);
    console.log(ulList);
    console.log(listItems.length);
  })
})


