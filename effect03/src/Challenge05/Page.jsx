import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export default function Page() {
  const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // 첫 번째 행성을 선택합니다.
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    if (planetId === '') {
      // 첫 번째 상자에서는 아직 아무것도 선택되지 않았습니다.
      return;
    }

    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then(result => {
      if (!ignore) {
        console.log('Fetched a list of places on "' + planetId + '".');
        setPlaceList(result);
        setPlaceId(result[0].id); // 첫 번째 장소를 선택합니다.
      }
    });
    return () => {
      ignore = true;
    }
  }, [planetId]);

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}
