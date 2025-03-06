import { useRef } from 'react';
import SearchButton from './SearchButton.js';
import SearchInput from './SearchInput.js';

export default function Page() {
    let ref = useRef(null);
    function onClick() {
        ref.current.focus();
    }
  return (
    <>
      <nav>
        <SearchButton onClick={onClick} />
      </nav>
      <SearchInput ref={ref} />
    </>
  );
}
