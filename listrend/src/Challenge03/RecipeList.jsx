import { recipes } from './Data';
import { Recipe } from './Recipe';
/**
 * 부모 컴포넌트를 만들어서 props를 통해 하나의 key id값을 주고싶을때 이렇게 푸는거같다.
 */
export default function RecipeList() {
    return (
    <div>
        <h1>Recipes</h1>
        {recipes.map((v) => 
            <Recipe {...v} key={v.id} />
        )}
    </div>
    );
}
