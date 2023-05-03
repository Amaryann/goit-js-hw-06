const listId = document.getElementById("categories")
const listH2 = listId.querySelectorAll("h2")
const numberOfH2 = listH2.length;
console.log(numberOfH2)
listH2.forEach(h2 => {
    console.log(`Category: ${h2.innerHTML}`)
    console.log(h2.parentNode.children[1].childElementCount)

});
