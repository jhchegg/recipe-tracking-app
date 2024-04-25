import React, {useState} from "react";
import RecipeCard from './RecipeCard'
import RecipeData from './RecipeData'

function RecipeList({ recipes, onDelete }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

//   const [recipeData, setRecipeData] = useState(RecipeData);
  
//   const handleDelete = (index) => {
//     const updatedRecipeData = [...recipeData];
//     updatedRecipeData.splice(index, 1);
//     setRecipeData(updatedRecipeData);
//   };
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index}  style={{ backgroundColor: index % 2 === 0 ? 'Khaki' : 'white' }}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img src={recipe.photo} style={{ width: '100px' }} /></td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button onClick={() => onDelete(index)}  name="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default RecipeList;
