export const Recipe = ({id,name,ingredients}) => {
    return (
        <>
            <div>
                <h2>{name}</h2>
                <ul>
                    {ingredients.map(ingredients=>
                        <li key={ingredients}>
                            {ingredients}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}