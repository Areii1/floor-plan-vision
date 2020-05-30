import React from "react";
import styled from "styled-components";
import firstView from "./assets/mock-apartment-2/first-view.jpeg";
import floorViewDetails from "./assets/mock-apartment-2/coords.json";
import { View } from "./view/View";

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const NavigationButton = styled.div`
  margin: 0 20px;
  background-color: transparent;
  border: none;
  font-size: 4em;
  cursor: pointer;
`;

function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  console.log(floorViewDetails, "floorViewDetails");

  const handlePreviousClick = () => {
    if (currentImageIndex - 1 >= 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(floorViewDetails.views.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex < floorViewDetails.views.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  console.log(currentImageIndex, 'currentImageIndex');
  return (
    <Wrapper>
      <NavigationButton onClick={handlePreviousClick} title="previous view">
        <h5>&lt;</h5>
      </NavigationButton>
      <View coords={floorViewDetails.views[currentImageIndex]} />
      <NavigationButton onClick={handleNextClick} title="next view">
        <h5>&gt;</h5>
      </NavigationButton>
    </Wrapper>
  );
}

export default App;
