import { useState } from "react";
import "./styles.css";

const Circle = ({ item, onClick }) =>
  item.isOn ? (
    <div
      className="circle"
      style={{ backgroundColor: item.color }}
      onClick={() => onClick(item)}
    />
  ) : (
    <div className="circle" onClick={() => onClick(item)} />
  );

export default function App() {
  const [trafficLight, setTrafficLight] = useState([
    {
      id: 1,
      name: "red",
      color: "red",
      isOn: true
    },
    {
      id: 2,
      name: "yellow",
      color: "yellow",
      isOn: true
    },
    {
      id: 3,
      name: "green",
      color: "green",
      isOn: false
    }
  ]);

  const handleClick = (elem) => {
    const newLights = trafficLight.map((item) => {
      if (item.id === elem.id) {
        item.isOn = !item.isOn;
      }
      return item;
    });

    setTrafficLight(newLights);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="bgLights">
        {trafficLight.map((lights) => (
          <Circle key={lights.id} item={lights} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
