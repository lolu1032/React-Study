import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  let first = useRef(null);

  function one() {
    first.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  }

  return (
    <>
      <nav>
        <button onClick={() => {
            flushSync(() => {
                if (index < catList.length - 1) {
                  setIndex(index + 1);
                } else {
                  setIndex(0);
                }
              });
              one();
            }}>
          Next
        </button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, i) => (
            <li 
            key={cat.id}
            ref={index === i ?
                first :
                null
              }
            >
              <img
                className={
                  index === i ?
                    'active' :
                    ''
                }
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
  });
}

