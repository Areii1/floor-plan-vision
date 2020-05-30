import viewDetails1 from "../mockData/mock-apartment-1/floorPlanDetails.json";
import viewDetails2 from "../mockData/mock-apartment-2/floorPlanDetails.json";
import viewDetails3 from "../mockData/mock-apartment-3/floorPlanDetails.json";

export type Coords = {
  viewIndex: number;
  y: number;
  x: number;
  degrees: number;
};

export type ViewDetails = {
  floorPlan: string;
  views: Array<Coords>;
  apartmentId: number;
};

export const getViewDetails = (id: number): Promise<ViewDetails | Error> => {
  const newPromise = new Promise<ViewDetails | Error>((resolve, reject) => {
    const waitTime = Math.random() * 3000;
    setTimeout(() => {
      if (Math.random() < 0.9) {
        switch (id) {
          case 1: {
            resolve(viewDetails1 as ViewDetails);
            break;
          }
          case 2: {
            resolve(viewDetails2 as ViewDetails);
            break;
          }
          case 3: {
            resolve(viewDetails3 as ViewDetails);
            break;
          }
        }
      } else {
        reject(new Error("could not fetch view details"));
      }
    }, waitTime);
  });
  return newPromise;
};
