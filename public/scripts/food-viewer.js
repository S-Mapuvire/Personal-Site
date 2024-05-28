let recipeBox = document.getElementById('recipebox');
let header = document.querySelector('header');
let main = document.querySelector('main');

function openRecipe(imageHolder) {
    recipeClass = imageHolder.children[0].className;
    getRecipe(recipeClass);
    recipeBox.style.display = 'grid';
    header.style.display = 'none'
    main.style.display = 'none'
}
function closeRecipe() {
    recipeBox.style.display = 'none';
    header.style.display = 'block'
    main.style.display = 'block'
}