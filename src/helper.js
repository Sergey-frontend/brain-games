// рандомное число
export const getRandomNumber = (min, max) => {
  const randomNamber = Math.floor(Math.random() * (max - min)) + min;
  return randomNamber;
};

export const a = 10;
