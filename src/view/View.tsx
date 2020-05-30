import React from "react";
import styled from "styled-components";
import { getFloorPlan } from "../getFloorPlan";
import { getImage } from "../getImage";
import { Coords } from "../apiServices/getViewDetails";

const Wrapper = styled.div`
  width: 700px;
  position: relative;
`;

const RoomView = styled.img`
  max-width: 700px;
  max-height: 700px;
`;
const FloorPlanWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const FloorPlanContentWrapper = styled.div`
  position: relative;
  margin-left: 20px;
  display: flex;
  align-items: flex-end;
  display: inline-block;
`;

const FloorPlan = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

const CloseFloorPlanButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
`;

const CloseFloorPlanButtonText = styled.h5`
  margin: 0;
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
  apartmentId: number;
  currentImageIndex: number;
  viewsLength: number;
};

export function View(props: ViewProps) {
  const [displayFloorPlan, setDisplayFloorPlan] = React.useState<boolean>(true);
  const [hoveringOverFloorPlan, setHoveringOverFloorPlan] = React.useState<
    boolean
  >(false);
  React.useEffect(() => {
    setDisplayFloorPlan(true);
  }, [props.coords.viewIndex]);
  const handleMouseFloorPlanEnter = () => {
    setHoveringOverFloorPlan(true);
  };

  const handleMouseFloorPlanLeave = () => {
    setHoveringOverFloorPlan(false);
  };

  const handleCloseFloorPlanClick = () => {
    setDisplayFloorPlan(false);
  };
  return (
    <Wrapper>
      <h4>{`${props.currentImageIndex + 1}/${props.viewsLength}`}</h4>
      <RoomView
        src={getImage(props.apartmentId, props.coords.viewIndex)}
        alt="apartment view"
      />
      {displayFloorPlan && (
        <FloorPlanWrapper
          onMouseEnter={handleMouseFloorPlanEnter}
          onMouseLeave={handleMouseFloorPlanLeave}
        >
          <FloorPlanContentWrapper>
            {hoveringOverFloorPlan && (
              <CloseFloorPlanButton onClick={handleCloseFloorPlanClick}>
                <CloseFloorPlanButtonText>X</CloseFloorPlanButtonText>
              </CloseFloorPlanButton>
            )}
            <FloorPlanDot coords={props.coords} />
            <FloorPlan src={getFloorPlan(props.apartmentId)} alt="floor plan" />
          </FloorPlanContentWrapper>
        </FloorPlanWrapper>
      )}
    </Wrapper>
  );
}
