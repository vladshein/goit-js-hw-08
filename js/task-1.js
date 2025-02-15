/* 
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст 
заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
*/

/* Task1 */
const arrItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${arrItem.length}`);

/* Task2 */
for (let i = 0; i < arrItem.length; i++) {
  console.log(`Category: ${arrItem[i].querySelector("H2").innerHTML}`);
  console.log(`Elements: ${arrItem[i].querySelectorAll("LI").length}`);
}
