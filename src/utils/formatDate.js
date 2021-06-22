const formatDate = (string) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(string);
  let newFormat = date.toLocaleDateString("en-US", options).split(" ");
  newFormat = `${newFormat[1]} ${newFormat[0]} ${newFormat[2]}`;
  return newFormat.replace(/,/g, "");
};

export default formatDate;
