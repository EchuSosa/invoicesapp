const shuffle = (v) => [...v].sort((_) => Math.random() - 0.5).join("");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const GetRandomId = () => {
  const numberPart = randomNumber(0, 9)+randomNumber(0, 9)
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let stringsPart = "";
  for (let i = 0; i < 4; i++)
    stringsPart += possible.charAt(Math.floor(Math.random() * possible.length));

  return shuffle(numberPart + stringsPart);
};

export default GetRandomId;
