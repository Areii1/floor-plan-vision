import floorPlan1 from "./mockData/mock-apartment-1/floor-plan.jpeg";
import floorPlan2 from "./mockData/mock-apartment-2/floor-plan.jpeg";
import floorPlan3 from "./mockData/mock-apartment-3/floor-plan.jpeg";

export const getFloorPlan = (viewIndex: number) => {
  switch (viewIndex) {
    case 1:
      return floorPlan1;
    case 2:
      return floorPlan2;
    case 3:
      return floorPlan3;
    default:
      return undefined;
  }
};
