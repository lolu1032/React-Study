import { poem as data } from "./Poem";

export function Poem() {
  return (
    <article>
        {data.lines.map((line, index) => (
          <>
            <p key={index}>
              {line}
            </p>
            {index < data.lines.length-1 && <hr />}
          </>
        ))}
      </article>
    );
  }