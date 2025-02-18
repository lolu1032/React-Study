import { useState } from 'react';
import { sculptureList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);


  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;


  function handleNextClick() {
    // if(index === 11) {
    //   return setIndex(0);
    // }
    if(hasNext) {
      setIndex(index + 1);
    }
  }
  function handleBackClick() {
    if(hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button 
        onClick={handleNextClick}
        disabled={!hasNext}  
      >
        Next
      </button>
      <button 
        onClick={handleBackClick}
        disabled={!hasPrev}
      >
        previous
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
