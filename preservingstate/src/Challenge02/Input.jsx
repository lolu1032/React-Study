import { useState } from 'react';
import Field from './Field';

export default function Input() {
    const [reverse, setReverse] = useState(false);
    let checkbox = (
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
        />
        Reverse order
      </label>
    );
    if (reverse) {
      return (
        <>
          <Field key="Last name" label="Last name" />
          <Field key="First name" label="First name" />
          {checkbox}
        </>
      );
    } else {
      return (
        <>
          <Field key="First name" label="First name" />
          <Field key="Last name" label="Last name" />
          {checkbox}
        </>
      );
    }
  }
