const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listId = document.getElementById("ingredients");
ingredients.forEach(ingredient => {
  listId.innerHTML += `<li class="item">${ingredient}</li>`
})
