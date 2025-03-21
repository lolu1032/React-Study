import { useEffect, useRef } from 'react';

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: shouldFocus가 true일때만 호출되도록
  useEffect(() => {
    if(shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}
