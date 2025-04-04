import { people } from "./Data";
import { getImageUrl } from "./Utils";


export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemists'
    )
    const everyoneElse = people.filter(person =>
        person.profession !== 'chemists'
    )
return (
    <article>
    <h1>Scientists</h1>
    <ul>
        {chemists.map(person => 
            <li>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
        )}
    </ul>
    <ul>    
        {everyoneElse.map(person => 
            <li>
                <img
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
            </li>
        )}
    </ul>
    </article>
);
}
