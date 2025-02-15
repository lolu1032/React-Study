import { recipes } from "./Data";



export default function RecipeList() {
    const recipesList = recipes.map((v) =>
        <ul key={v.id}>
            <h2>{v.name}</h2>
            <li>{v.ingredients}</li>
        </ul>
    )

    return (
    <div>
        <h1>Recipes</h1>
        {recipesList}
    </div>
    );
}
