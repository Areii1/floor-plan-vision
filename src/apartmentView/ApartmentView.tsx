import React from "react";
import styled from "styled-components";
import { RoomView } from "./roomView/RoomView";
import { getViewDetails } from "../apiServices/getViewDetails";
import { ViewDetails } from "../apiServices/getViewDetails";

const ViewSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationButton = styled.div`
  margin: 0 20px;
  background-color: transparent;
  border: none;
  font-size: 4em;
  cursor: pointer;
`;

enum Status {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

type ViewDetailsProcess =
  | {
      status: Status.INITIAL;
    }
  | {
      status: Status.LOADING;
    }
  | {
      status: Status.SUCCESS;
      data: ViewDetails;
    }
  | {
      status: Status.ERROR;
      error: Error;
    };

// type ApartmentViewProps = {

// }

export const ApartmentView = (props: any) => {
  const [getViewDetailsProcess, setGetViewDetailsProcess] = React.useState<
    ViewDetailsProcess
  >({
    status: Status.INITIAL,
  });
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

  const fetchViewDetails = async (id: number) => {
    try {
      setGetViewDetailsProcess({
        status: Status.LOADING,
      });
      setCurrentImageIndex(0);
      const getViewDetailsResponse = await getViewDetails(id);
      setGetViewDetailsProcess({
        status: Status.SUCCESS,
        data: getViewDetailsResponse,
      });
    } catch (getViewDetailsError) {
      setGetViewDetailsProcess({
        status: Status.ERROR,
        error: getViewDetailsError,
      });
    }
  };

  React.useEffect(() => {
    const id = props.match.params.id ? props.match.params.id : 1;
    fetchViewDetails(parseInt(id));
  }, [props.match.params.id]);

  const handlePreviousClick = () => {
    if (getViewDetailsProcess.status === Status.SUCCESS) {
      if (currentImageIndex - 1 >= 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else {
        setCurrentImageIndex(getViewDetailsProcess.data.views.length - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (getViewDetailsProcess.status === Status.SUCCESS) {
      if (currentImageIndex < getViewDetailsProcess.data.views.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    }
  };

  switch (getViewDetailsProcess.status) {
    case Status.INITIAL: {
      return <div />;
    }
    case Status.LOADING: {
      return (
        <div>
          <h5>...</h5>
        </div>
      );
    }
    case Status.SUCCESS: {
      return (
        <ViewSectionWrapper>
          <NavigationButton onClick={handlePreviousClick} title="previous view">
            <h5>&lt;</h5>
          </NavigationButton>
          <RoomView
            coords={getViewDetailsProcess.data!.views[currentImageIndex]!}
            apartmentId={getViewDetailsProcess.data!.apartmentId}
            viewsLength={getViewDetailsProcess.data!.views.length}
            currentImageIndex={currentImageIndex}
          />
          <NavigationButton onClick={handleNextClick} title="next view">
            <h5>&gt;</h5>
          </NavigationButton>
        </ViewSectionWrapper>
      );
    }
    case Status.ERROR: {
      return (
        <div>
          <h5>Could not fetch view</h5>
          <button onClick={() => fetchViewDetails(1)}>try again</button>
        </div>
      );
    }
    default: {
      return <div />;
    }
  }
};
