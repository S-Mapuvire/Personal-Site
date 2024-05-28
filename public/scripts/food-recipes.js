// TO-DO - make this function a call to the database

function getRecipe(recipeClass){
    let recipeTitle = document.getElementById('recipe-title');
    let recipeContent = document.getElementById('recipe-content');
    let recipeImage = document.getElementById('recipe-image'); 

    let recipeName;
    let recipe;
    let recipeImagePath;

    connected = false;

    if(connected) {
        // Use RecipeName i.e. class name to make a request from the db
        recipeName = `${title}`;
        recipe = `${recipe}`;
        recipeImagePath = `${path}`
    }
    else{
        recipeName = `Could Not Fetch From Database`;
        recipe = `Recipe Not Found, Soooo Here's Some Placeholder Text! \nLorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa pariatur dolorum, provident eaque beatae fuga? Hic ipsum perferendis magnam ut, reiciendis cumque mollitia? Omnis quos vel explicabo aliquid? Tempore.`;
        recipeImagePath = `images/icons/image_not_found.svg`;
        recipeImage.width = 500;
        recipeImage.height = 500;
    }
    recipeTitle.innerText = recipeName;
    recipeContent.innerText = recipe;
    recipeImage.src = recipeImagePath;
}

