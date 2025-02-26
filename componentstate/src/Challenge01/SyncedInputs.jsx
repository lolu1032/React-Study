import { useState } from 'react';
import Input from './Input';

export default function SyncedInputs() {
    const [text, setText] = useState('');
  
    function handleChange(e) {
      setText(e.target.value);
    }
  return (
    <>
      <Input label="First input" text = {text} handleChange={handleChange}/>
      <Input label="Second input" text = {text} handleChange={handleChange}/>
    </>
  );
}
