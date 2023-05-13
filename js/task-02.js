const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listId = document.getElementById("ingredients");
listId.insertAdjacentHTML("afterbegin", ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join(""))
