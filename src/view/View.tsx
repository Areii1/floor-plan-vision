import React from "react";
import styled from "styled-components";
import floorPlan from '../assets/mock-apartment-2/plan.jpeg';
import { getImage } from '../getImage';
import { Coords } from '../apiServices/getViewDetails';

const Wrapper = styled.div`
  width: 700px;
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

type FloorPlanDotProps = {
  coords: Coords;
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

type ViewProps = {
  coords: Coords;
};

export function View(props: ViewProps) {
  return (
    <Wrapper>
      <RoomView src={getImage(props.coords.viewIndex)} alt="apartment view" />
      <FloorPlanWrapper>
        <FloorPlanDot coords={props.coords} />
        <FloorPlan src={floorPlan} alt="floor plan" />
      </FloorPlanWrapper>
    </Wrapper>
  );
}
