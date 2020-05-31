import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { ApartmentView } from "./apartmentView/ApartmentView";

const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const ApartmentNavigationList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ApartmentNavigationListItem = styled.li`
  margin: 0 10px;
`;

function App() {
  const apartmentLinksListItems = ["", "", ""].map((_, index) => {
    return (
      <ApartmentNavigationListItem key={index + 1}>
        <Link to={`/${index + 1}`}>{`apartment ${index + 1}`}</Link>
      </ApartmentNavigationListItem>
    );
  });
  return (
    <Wrapper>
      <ApartmentNavigationList>
        {apartmentLinksListItems}
      </ApartmentNavigationList>
      <Switch>
        <Route exact path="/:id" component={ApartmentView} />
        <Route exact path="/" component={ApartmentView} />
      </Switch>
    </Wrapper>
  );
}

export default App;
