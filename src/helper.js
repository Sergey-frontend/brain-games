const getRandomNumber = (min, max) => {
  const randomNamber = Math.floor(Math.random() * (max - min)) + min;
  return randomNamber;
};

export default getRandomNumber;
