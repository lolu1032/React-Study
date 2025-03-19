import { useEffect, useRef } from 'react';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  // TODO: 작동하지 않는다. 고쳐야함
  // ref.current.focus()
    useEffect(() => {
        ref.current.focus();
    })


  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}


