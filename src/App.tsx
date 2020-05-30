import React from "react";
import styled from "styled-components";
import firstView from "./assets/mock-apartment-2/first-view.jpeg";
import floorPlan from "./assets/mock-apartment-2/plan.jpeg";
import coordsArr from "./assets/mock-apartment-2/coords.json";

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const View = styled.div`
  width: 700px;
`;

const NavigationButton = styled.div`
  margin: 0 20px;
  background-color: transparent;
  border: none;
  font-size: 4em;
  cursor: pointer;
`;

const RoomView = styled.img`
  max-width: 700px;
  max-height: 700px;
`;

const FloorPlan = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

const FloorPlanWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-left: 20px;
`;

type coords = {
  viewIndex: number;
  y: number;
  x: number;
  degrees: number;
};

type FloorPlanDotProps = {
  coords: coords;
};

const FloorPlanDot = styled.div`
  background-color: blue;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  position: absolute;
  bottom: ${(props: FloorPlanDotProps) => `${props.coords.y}%`};
  left: ${(props: FloorPlanDotProps) => `${props.coords.x}%`};
`;

function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  console.log(coordsArr, "coordsArr");

  const handlePreviousClick = () => {
    if (currentImageIndex - 1 >= 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(coordsArr.length);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex - 1 <= coordsArr.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <Wrapper>
      <NavigationButton onClick={handlePreviousClick}>
        <h5>&lt;</h5>
      </NavigationButton>
      <View>
        <RoomView src={firstView} alt="apartment view" />
        <FloorPlanWrapper>
          <FloorPlanDot coords={coordsArr[0]} />
          <FloorPlan src={floorPlan} alt="floor plan" />
        </FloorPlanWrapper>
      </View>
      <NavigationButton onClick={handleNextClick}>
        <h5>&gt;</h5>
      </NavigationButton>
    </Wrapper>
  );
}

export default App;
