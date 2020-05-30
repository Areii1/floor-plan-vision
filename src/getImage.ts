import firstView from "./assets/mock-apartment-2/first-view.jpeg";
import secondView from "./assets/mock-apartment-2/second-view.jpeg";
import thirdView from "./assets/mock-apartment-2/third-view.jpeg";

export const getImage = (viewIndex: number) => {
  switch (viewIndex) {
    case 1:
      return firstView;
    case 2:
      return secondView;
    case 3:
      return thirdView;
    default:
      return undefined;
  }
};
