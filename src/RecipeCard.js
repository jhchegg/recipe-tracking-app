import RecipeData from "./RecipeData";

function RecipeCard({ recipe }) {
  //  const recipe=RecipeData[0]
  return (
    <tbody>
      <tr>
        <td>
          <p>{recipe.name}</p>
        </td>
        <td>
          <p>{recipe.cuisine}</p>
        </td>
        <td>
          <img src={recipe.photo} />
        </td>
        <td>
          <p>{recipe.ingredients}</p>
        </td>
        <td>
          <p>{recipe.preparation}</p>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  );
}
export default RecipeCard;
