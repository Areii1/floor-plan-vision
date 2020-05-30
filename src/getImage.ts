import FirstAppFirstView from "./mockData/mock-apartment-1/first-view.jpeg";
import FirstAppSecondView from "./mockData/mock-apartment-1/second-view.jpeg";
import FirstAppThirdView from "./mockData/mock-apartment-1/third-view.jpeg";

import SecondAppFirstView from "./mockData/mock-apartment-2/first-view.jpeg";
import SecondAppSecondView from "./mockData/mock-apartment-2/second-view.jpeg";
import SecondAppThirdView from "./mockData/mock-apartment-2/third-view.jpeg";

import ThirdAppFirstView from "./mockData/mock-apartment-3/first-view.jpeg";
import ThirdAppSecondView from "./mockData/mock-apartment-3/second-view.jpeg";
import ThirdAppThirdView from "./mockData/mock-apartment-3/third-view.jpeg";

export const getImage = (apartmentId: number, viewIndex: number) => {
  switch (apartmentId) {
    case 1: {
      switch (viewIndex) {
        case 1:
          return FirstAppFirstView;
        case 2:
          return FirstAppSecondView;
        case 3:
          return FirstAppThirdView;
        default:
          return undefined;
      }
    }
    case 2: {
      switch (viewIndex) {
        case 1:
          return SecondAppFirstView;
        case 2:
          return SecondAppSecondView;
        case 3:
          return SecondAppThirdView;
        default:
          return undefined;
      }
    }
    case 3: {
      switch (viewIndex) {
        case 1:
          return ThirdAppFirstView;
        case 2:
          return ThirdAppSecondView;
        case 3:
          return ThirdAppThirdView;
        default:
          return undefined;
      }
    }
    default: {
      break;
    }
  }
};
