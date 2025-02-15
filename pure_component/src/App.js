import { useEffect, useState } from 'react';
import './App.css';
import Clock from './Challenge01/Clock';
import Profile from './Challenge02/Profile';
import StoryTray from './Challenge03/StoryTray';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];
function App() {
  let [stories, setStories] = useState([...initialStories])
  let time = useTime();

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
  // return (
  //   <>
  //     {/* <Clock time={new Date()} />
  //     <Profile person={{
  //       imageId: 'lrWQx8l',
  //       name: 'Subrahmanyan Chandrasekhar',
  //     }} />
  //     <Profile person={{
  //       imageId: 'MK3eW3A',
  //       name: 'Creola Katherine Johnson',
  //     }} /> */}
  //   </>
  // );
}
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default App;
