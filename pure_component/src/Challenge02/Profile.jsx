import Panel from './Panel';
import { getImageUrl } from './Utils.js';


export default function Profile({ person }) {
  let currentPerson = person;
  return (
    <Panel>
      <Header currentPerson={currentPerson} />
      <Avatar currentPerson={currentPerson} />
    </Panel>
  )
}

function Header({currentPerson}) {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar({currentPerson}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
