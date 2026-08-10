import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, onTurnAllOff, onTurnAllOn }) {
  const turnedOnLights = lights.filter((light) => light.isOn);
  const isAllOn = turnedOnLights.length === lights.length;
  const isAllOff = turnedOnLights.length === 0;

  return (
    <StyledQuickActions>
      <Button
        disabled={isAllOff}
        type="button"
        onClick={() => {
          onTurnAllOff();
          console.log("Turn all lights off");
        }}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={isAllOn}
        type="button"
        onClick={() => {
          onTurnAllOn();
          console.log("Turn all lights on");
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
