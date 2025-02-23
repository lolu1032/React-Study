import { useState } from "react";

export default function Picture() {
  const [isActive,setIsActive] = useState(false);
  let background = 'background';
  let picture = 'picture';
  if(isActive) {
    picture += ' picture--active'
  }else {
    background += ' background--active'
  }
  const onClick = () => {
    setIsActive(!isActive);
  }
    return (
      <div className={background} onClick={onClick}>
        <img
          className={picture}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  }
  