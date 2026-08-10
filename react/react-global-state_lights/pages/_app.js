import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: "1", name: "Living Room", isOn: false },
    { id: "2", name: "Kitchen", isOn: false },
    { id: "3", name: "Porch", isOn: false },
    { id: "4", name: "Garden", isOn: false },
    { id: "5", name: "Office", isOn: false },
    { id: "6", name: "Bedroom", isOn: false },
    { id: "7", name: "Bathroom", isOn: false },
    { id: "8", name: "Hallway", isOn: false },
  ]);

  const turnedOnLights = lights.filter((light) => light.isOn);
  const isDimmed = turnedOnLights.length === 0;

  //toggle function - to act as GLOBAL STATE
  // map through lights array, if the id of lights array matches with the id entered into the function, then change isOn to true (!light.isOn), otherwise leave "light" as it is.
  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light,
      ),
    );
  }

  function handleTurnAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleTurnAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        lights={lights}
        toggleLight={handleToggle}
        {...pageProps}
        onTurnAllOn={handleTurnAllOn}
        onTurnAllOff={handleTurnAllOff}
      />
    </Layout>
  );
}
