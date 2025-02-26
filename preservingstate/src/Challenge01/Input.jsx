import { useState } from "react";

export default function Input() {
    const [showHint, setShowHint] = useState(false);
    const [text, setText] = useState('');
    const onChangeText = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <p><i>{showHint ? "" : "Hint: Your favorite city?"}</i></p>
        <Form
            onChange={onChangeText}
            value={text}
        />
        <button onClick={() => {
            setShowHint(!showHint);
        }}>{showHint ? "Show hint" : "Hide hint"}</button>
        </div>
    );
}

function Form({text,onChangeText}) {
    return (
        <textarea
        value={text}
        onChange={onChangeText}
        />
    );
}
