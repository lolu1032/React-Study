
import './App.css';
import LightSwitch from './component/Challenge01';
import ColorSwitch from './component/Challenge02';

function App() {
  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }
  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }
  return (
    <>
      <ColorSwitch onChangeColor={handleChangeColor} />
    </>
  );
}

export default App;
