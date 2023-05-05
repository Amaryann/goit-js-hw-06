const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listId = document.getElementById("ingredients");
let list = "";
ingredients.forEach(ingredient => {
  list += `<li class="item">${ingredient}</li>`
})
listId.insertAdjacentHTML("afterbegin", list)
