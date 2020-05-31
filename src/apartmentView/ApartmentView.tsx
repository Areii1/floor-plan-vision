import React from "react";
import styled from "styled-components";
import { View } from "../view/View";
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

enum status {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

type ViewDetailsProcess = {
  status: status;
  data: ViewDetails | undefined;
  error: Error | undefined;
};

// type ApartmentViewProps = {

// }

export const ApartmentView = (props: any) => {
  const initialViewDetailProcess = {
    status: status.INITIAL,
    data: undefined,
    error: undefined,
  };
  const [getViewDetailsProcess, setGetViewDetailsProcess] = React.useState<
    ViewDetailsProcess
  >(initialViewDetailProcess);
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

  const fetchViewDetails = async (id: number) => {
    try {
      setGetViewDetailsProcess({
        status: status.LOADING,
        data: undefined,
        error: undefined,
      });
      setCurrentImageIndex(0);
      const getViewDetailsResponse = await getViewDetails(id);
      setGetViewDetailsProcess({
        status: status.SUCCESS,
        data: getViewDetailsResponse as ViewDetails,
        error: undefined,
      });
    } catch (getViewDetailsError) {
      setGetViewDetailsProcess({
        status: status.ERROR,
        data: undefined,
        error: getViewDetailsError,
      });
    }
  };

  React.useEffect(() => {
    const id = props.match.params.id ? props.match.params.id : 1;
    fetchViewDetails(parseInt(id));
  }, [props.match.params.id]);

  const handlePreviousClick = () => {
    if (currentImageIndex - 1 >= 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(getViewDetailsProcess.data!.views.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentImageIndex < getViewDetailsProcess.data!.views.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  switch (getViewDetailsProcess.status) {
    case status.INITIAL: {
      return <div />;
    }
    case status.LOADING: {
      return (
        <div>
          <h5>...</h5>
        </div>
      );
    }
    case status.SUCCESS: {
      return (
        <ViewSectionWrapper>
          <NavigationButton onClick={handlePreviousClick} title="previous view">
            <h5>&lt;</h5>
          </NavigationButton>
          <View
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
    case status.ERROR: {
      return (
        <div>
          <h5>Could not fetch view</h5>
          <button onClick={() => fetchViewDetails(1)}>try again</button>
        </div>
      );
    }
  }
};
