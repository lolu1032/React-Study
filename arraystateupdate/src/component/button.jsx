import { useState } from 'react';
import './App.css';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];
export const button = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [artists, setArtists] = useState(
    initialArtists
    );
    
return (
    <>
    <h1>Inspiring sculptors:</h1>
    <ul>
        {artists.map(artist => (
        <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
            setArtists(
                artists.filter(a => {
                console.log(a);
                console.log(artist.id);
                // a.id와 artist.id가 같지않은 애들만 반환해라
                return a.id !== artist.id;
                }
                )
            );
            }}>
            Delete
            </button>
        </li>
        ))}
    </ul>
    </>
    )
}