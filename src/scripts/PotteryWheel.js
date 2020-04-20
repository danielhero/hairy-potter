let id = 0;

export const makePottery = (shape, weight, height) => {
  id++;
  return (
    "shape: " +
    shape +
    ", weight: " +
    weight +
    ", height: " +
    height +
    ", id: " +
    id
  );
};
