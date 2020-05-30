import viewDetails from "../assets/mock-apartment-2/floorPlanDetails.json";

export type Coords = {
  viewIndex: number;
  y: number;
  x: number;
  degrees: number;
};

export type ViewDetails = {
  floorPlan: string;
  views: Array<Coords>;
};

export const getViewDetails = (id: number): Promise<ViewDetails | Error> => {
  const newPromise = new Promise<ViewDetails | Error>((resolve, reject) => {
    const waitTime = Math.random() * 3000;
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(viewDetails as ViewDetails);
      } else {
        reject(new Error("could not fetch view details"));
      }
    }, waitTime);
  });
  return newPromise;
};
